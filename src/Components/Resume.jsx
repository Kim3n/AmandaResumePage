import "./styles/ResumeStyle.css";
import ExperienceCard from "./ExperienceCard";
import AcademicCard from "./AcademicCard.jsx";

function ResumeList() {
  const academicData = [
    {
      degree: "UX/UI Design - Technical Proficiency",
      school: "Awari",
      dates: "Feb of 2022 - Oct of 2022",
    },
    {
      degree:
        "MBA - Business Intelligence, Digital Marketing and Data Driven Strategy",
      school: "PUCRS - Pontifícia Universidade Católica do Rio Grande do Sul",
      dates: "Feb of 2022 - Oct of 2022",
    },
    {
      degree: "Bachlor’s Degree in Advertising and Marketing",
      school: "IESB",
      dates: "Jun of 2016 - Aug of 2020",
    },
  ];

  const experienceData = [
    {
      company: "VLGI Investimentos",
      role: "UX/UI Designer",
      dates: "Mar of 2023 - Present",
      sections: [
        {
          title: "", //CAN BE EMPTY
          responsibilities: [
            "Wireframes, user journey maps, and interactive prototypes for both web and mobile. Responsive design and adaptation for different devices",
            "Strategic decision-making based on market research, user data analysis, and design trends",
            "Project production focused on the financial market, including the conception of new features and user feedback collection",
            "Solutions centered around accessibility and usability",
            "Project implementation with multidisciplinary teams, including developers, data analysts, project managers, and stakeholders",
            "Creation of Design System and Visual Identity Manual",
            "Agile methodology",
            "Figma, Photoshop, Illustrator.",
          ],
        },
      ],
    },
    {
      company: "Associação dos Servidores do Banco Central",
      role: "Marketing & Advertising",
      dates: "May of 2019 – Feb of 2020",
      sections: [
        {
          title: "",
          responsibilities: [
            "Creation of online and offline advertising pieces, posters, and informative bulletins for publication on social networks and printed material",
            "Management of social media, as well as promotion strategies",
            "Responsible for covering and photographing various events, such as championships, workshops, and others",
            "Software: Adobe Photoshop, Illustrator, InDesign, Lightroom,  After Effects, inDesign and Lightroom",
          ],
        },
      ],
    },
    {
      company: "The Walt Disney Company",
      role: "Hostess, Attractions And Guest Flow",
      dates: "Nov of 2018 – Feb of 2019",
      sections: [
        {
          title: "",
          responsibilities: [
            "Accommodate, monitor, and assist park visitors, providing guidance, event schedules, and other information",
            "Operate the attraction's functionality through control systems, handling quickly and efficiently in any emergency situation to ensure visitor safety",
            "Organize the flow of visitors during shows and parades, memorizing operational and safety instruction speeches, and communicating with large groups",
          ],
        },
      ],
    },
    {
      company: "Ministério da Justiça - Classificação Indicativa & IARC",
      role: "Intern",
      dates: "Sep of 2017 – Nov of 2018",
      sections: [
        {
          title: "CLASSIFICAÇÃO INDICATIVA:",
          responsibilities: [
            "Analyze and grade age ratings for movies, series, soap operas, TV shows, video games, and other works by preparing descriptive reports and technical opinions, following the classification standards set by the Ministry of Justice.",
          ],
        },
        {
          title: "INTERNATIONAL AGE RATING COALITION (IARC):",
          responsibilities: [
            "Grade the worldwide age rating of applications and games on platforms such as Google Play, Nintendo eShop, and Microsoft, in partnership with international age rating organizations such as ESRB (United States), PEGI (Europe), and USK (Germany), among others",
            "English description of content for rated works",
          ],
        },
      ],
    },
  ];

  return (
    <>
      <div className="resume-container">
        <h2 className="resume-title">Professional Experience</h2>
        <div className="professional-experience">
          {experienceData.map((job, index) => (
            <ExperienceCard
              key={index}
              company={job.company}
              role={job.role}
              dates={job.dates}
              sections={job.sections}
            />
          ))}
        </div>
      </div>
      <div className="academic-container">
        <h2 className="resume-title">Academic Background</h2>
        <div className="academic-experience">
          {academicData.map((edu, index) => (
            <AcademicCard
              key={index}
              degree={edu.degree}
              dates={edu.dates}
              school={edu.school}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default ResumeList;
