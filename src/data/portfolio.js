
let portfolio;
import planfly from "/src/imgs/portfolio/planfy.png";
import carteira from "/src/imgs/portfolio/carteiravirtual.png";
import carteiraBigImage from "/src/imgs/portfolio/carteriaBigImage.png";
import couplement from "/src/imgs/portfolio/couplement.png";
import thisportfolio from "/src/imgs/portfolio/resume.png";
import winebox from "/src/imgs/portfolio/winebox.png";
import wineboxBigImage from "/src/imgs/portfolio/wineboxBigImage.png";
import eventpage from "/src/imgs/portfolio/onlineevent.png";
import eventpageBigImage from "/src/imgs/portfolio/onlineeventBigImage.png";
import amiami from "/src/imgs/portfolio/amiami.png";
import amiamiBigImage from "/src/imgs/portfolio/amiamiBigImage.png";

export default portfolio = [
    {
        title: 'Planfy',
        description: 'Mobile & Web',
        image: planfly,
        bigImage: "",
    },
    {
        title: 'Carteira Virtual',
        description: 'Case Study / Mobile',
        image: carteira,
        bigImage: carteiraBigImage ,
    },
    {
        title: 'Couplement',
        description: 'Mobile',
        image: couplement,
        bigImage: "",
    },
    {
        title: 'This portfolio',
        description: 'Web',
        image: thisportfolio,
        bigImage: "",
    },
    {
        title: 'Winebox Landing Page',
        subTitle:"Landing Page UI Design",
        description: 'Web',
        longDescription: "Wine subscription landing page made on Figma. The brand, logo and box mockup were created on illustrator.",
        image: winebox,
        bigImage: wineboxBigImage,
    },
    {
        title: 'Online Event Landing Page',
        subTitle:"Landing Page UI Design",
        description: 'Web',
        longDescription: "Online event registration landing page made on Figma. This page was a project proposal to the Ignição Digital Marketing Company.",
        image: eventpage,
        bigImage: eventpageBigImage,
    },
    {
        title: 'Amiami',
        subTitle:"UI Design",
        description: 'Web',
        longDescription: "UI Design of Amiami's checkout page, the largest online figure/hobby store in Japan.",
        image: amiami,
        bigImage: amiamiBigImage,
    },
];