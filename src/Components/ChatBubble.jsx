import { useEffect, useRef, useState } from "react";
import "./styles/ChatBubbleStyle.css";
import Confetti from "react-confetti";

import {
  IoCloseCircleOutline,
  IoChatbubbleEllipsesOutline,
} from "react-icons/io5";

const ChatBubble = () => {
  const [isFormVisible, setFormVisible] = useState(false);
  const [isSuccess, setSuccess] = useState(false);
  const formContainerRef = useRef(null);
  const [confettiDimensions, setConfettiDimensions] = useState({
    width: 0,
    height: 0,
  });

  const toggleForm = () => {
    setFormVisible(!isFormVisible);
    setSuccess(false);
  };

  useEffect(() => {
    if (formContainerRef.current) {
      const { offsetWidth: width, offsetHeight: height } =
        formContainerRef.current;
      setConfettiDimensions({ width, height });
    }
  }, [isFormVisible, isSuccess]);

  const handleFormSubmit = async (event) => {
    event.preventDefault(); // Prevent the default form submission (no redirect)

    // Get form data
    const formData = new FormData(event.target);
    const formObject = Object.fromEntries(formData);
    const jsonData = JSON.stringify(formObject);
    setSuccess(false);
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: jsonData,
      });

      const result = await response.json();

      if (response.status === 200) {
        setSuccess(true);
      } else {
        console.error("Error:", result.message);
        alert("There was an error submitting the form.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong!");
    }
  };
  return (
    <div className="chat-container">
      {isFormVisible && (
        <div className="chat-bubble" onClick={toggleForm}>
          <IoCloseCircleOutline />
        </div>
      )}
      {!isFormVisible && (
        <div className="chat-bubble" onClick={toggleForm}>
          <IoChatbubbleEllipsesOutline />
        </div>
      )}
      {isFormVisible && !isSuccess && (
        <div className="chat-form">
          <form
            action="https://api.web3forms.com/submit"
            method="POST"
            id="form"
            onSubmit={handleFormSubmit}
          >
            <input
              type="hidden"
              name="access_key"
              value="38e5e33a-66e8-4f0b-a2ab-8e294ab01996"
            />
            <input
              type="hidden"
              name="subject"
              value="New Submission from Web3Forms"
            />
            <input
              type="checkbox"
              name="botcheck"
              id=""
              style={{ display: "none" }}
            />
            <div>
              <label htmlFor="name">Full Name</label>

              <input
                type="text"
                name="name"
                id="name"
                placeholder="John Doe"
                required
              />
            </div>
            <div>
              <label htmlFor="email">Email Address</label>

              <input
                type="email"
                name="email"
                id="email"
                placeholder="you@company.com"
                required
              />
            </div>
            <div>
              <label htmlFor="phone">Phone Number</label>

              <input
                type="text"
                name="phone"
                id="phone"
                placeholder="12345678"
                required
              />
            </div>
            <div>
              <label htmlFor="message">Your Message</label>
              <textarea
                rows="5"
                name="message"
                id="message"
                placeholder="Let's talk! :)"
                required
              ></textarea>
            </div>

            <button type="submit" className="buttons">
              Send Message
            </button>
          </form>
          <p className="powered">
            <span>
              Powered by{" "}
              <a
                href="https://Web3Forms.com"
                className="text-gray-600"
                target="_blank"
                rel="noopener noreferrer"
              >
                Web3Forms
              </a>
            </span>
          </p>
        </div>
      )}
      {isFormVisible && isSuccess && (
        <div className="chat-form" ref={formContainerRef}>
          {/* Confining confetti within the container */}
          <Confetti
            width={confettiDimensions.width}
            height={confettiDimensions.height}
            numberOfPieces={50}
          />
          <div className="thanks">
            <h1>Thank you!</h1>
            <h2>I&#39;ll be in contact with you shortly :)</h2>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBubble;
