import React, { useEffect, useState } from "react";
import HomePageComponent from "../../components/homepage";
import nextId from "react-id-generator";
import "../information/styles.css";
// import tsamemleaserImage from "../../assets/img/tsamemleaserImage.jpg";
// import tawlat from "../../assets/img/tawlat.jpg";
// import waghatalamonyomImage from "../../assets/img/waghatalamonyomImage.jpg";
// import drabzenImage from "../../assets/img/drabzenImage.jpg";
// import elyabeshospitalImage from "../../assets/img/elyabeshospitalImage.jpg";
// import waghahadedImage from "../../assets/img/waghahadedImage.jpg";
// import waghatsoaorImage from "../../assets/img/waghatsoaorImage.jpg";
// import stanlssteelImage from "../../assets/img/stanlssteelImage.jpg";
// import hadedasleazerImage from "../../assets/img/hadedasleazerImage.jpg";
// import quizAppImage from "../../assets/img/quizAppImage.jpg";
// import amalfrabkshenImage from "../../assets/img/amalfrabkshenImage.jpg";
// import bartechanImage from "../../assets/img/bartechanImage.jpg";
// import glassroomImage from "../../assets/img/glassroomImage.jpg";
import Spinner from "../../components/Spinner";
import { FaArrowCircleUp } from "react-icons/fa";

// const getLanguagesIcons = () => {
//   var json = {
//     icons: [
//       {
//         id: 1,
//         alt: "HTML5",
//         src: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png",
//       },
//       {
//         id: 2,
//         alt: "CSS3",
//         src: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png",
//       },
//       {
//         id: 3,
//         alt: "JavaScript",
//         src: "https://img.icons8.com/dusk/64/000000/javascript-logo.png",
//       },
//       {
//         id: 4,
//         alt: "React",
//         src: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png",
//       },
//       {
//         id: 5,
//         alt: "Redux",
//         src: "https://img.icons8.com/color/48/000000/redux.png",
//       },
//       {
//         id: 6,
//         alt: "NodeJS",
//         src: "https://img.icons8.com/color/48/000000/nodejs.png",
//       },
//       {
//         id: 7,
//         alt: "ExpressJS",
//         src: "https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/359/full/expressjslogo.png",
//       },
//       // {
//       // 	id: 8,
//       // 	alt: "Python",
//       // 	src: "https://img.icons8.com/color/48/000000/python.png",
//       // },
//       // {
//       // 	id: 9,
//       // 	alt: "SQL",
//       // 	src: "https://img.icons8.com/bubbles/50/000000/data-configuration.png",
//       // },
//       // {
//       // 	id: 10,
//       // 	alt: "MongoDB",
//       // 	src: "https://img.icons8.com/color/48/000000/mongodb.png",
//       // },
//       // {
//       // 	id: 11,
//       // 	alt: "PostgreSQL",
//       // 	src: "https://img.icons8.com/color/48/000000/postgreesql.png",
//       // },
//     ],
//   };
//   return json.icons;
// };

// const getToolsIcon = () => {
//   let json = {
//     icons: [
//       {
//         id: nextId(),
//         alt: "VScode",
//         src: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/visual-studio-code/visual-studio-code.png",
//       },
//       {
//         id: nextId(),
//         alt: "Git",
//         src: "https://img.icons8.com/color/48/000000/git.png",
//       },
//       {
//         id: nextId(),
//         alt: "Github",
//         src: "https://img.icons8.com/nolan/64/github.png",
//       },
//       {
//         id: nextId(),
//         alt: "Terminal",
//         src: "https://img.icons8.com/fluent/48/000000/console.png",
//       },
//       {
//         id: nextId(),
//         alt: "Katalon",
//         src: "https://d1h3p5fzmizjvp.cloudfront.net/wp-content/uploads/2019/10/22154517/katalon_icon_color_normal.png",
//       },
//       {
//         id: nextId(),
//         alt: "Photoshop",
//         src: "https://img.icons8.com/fluent/50/000000/adobe-photoshop.png",
//       },
//       {
//         id: nextId(),
//         alt: "Premiere",
//         src: "https://img.icons8.com/color/48/000000/adobe-premiere-pro.png",
//       },
//       {
//         id: nextId(),
//         alt: "Trello",
//         src: "https://img.icons8.com/color/48/000000/trello.png",
//       },
//       {
//         id: nextId(),
//         alt: "Slack",
//         src: "https://img.icons8.com/color/48/000000/slack-new.png",
//       },
//     ],
//   };
//   return json.icons;
// };

const getSocialsIcon = () => {
  let json = {
    socials: [
      {
        id: nextId(),
        alt: "Facebook",
        link: "https://www.facebook.com/profile.php?id=eman.zaki.1610/",
        src: "https://img.icons8.com/dusk/64/000000/facebook-new--v2.png",
      },
      {
        id: nextId(),
        alt: "Instagram",
        link: "https://instagram.com/eman.zaki.1610/?utm_medium=copy_link",
        src: "https://img.icons8.com/clouds/100/000000/instagram-new--v3.png",
      },

      {
        id: nextId(),
        alt: "Whatsapp",
        link: "whatsapp://send?text=welcome&phone=+966556286650",
        src: "https://img.icons8.com/clouds/100/000000/whatsapp.png",
      },
    ],
  };
  return json.socials;
};

// const getPosts = () => {
//   let json = {
//     posts: [
//       {
//         id: nextId(),
//         title: "طاولات",
//         description: "أفضل سعر لجوده عالميه تناسب جميع الأذواق 🌸",

//         imgSrc: tawlat,
//         imgAlt: "tawlat-logo",
//         link: "https://www.instagram.com/p/CFovvpLAvYm/",
//       },
//       {
//         id: nextId(),
//         title: "وجهات المنيوم مع زجاج",
//         description: "تركيب وجهات المنيوم مع زجاج بجنوب الرياض",
//         imgSrc: waghatalamonyomImage,
//         imgAlt: "waghatalamonyom-logo",
//         link: "https://www.instagram.com/p/CFwngX2gFQ2/",
//       },
//       {
//         id: nextId(),
//         title: "دربزينات",
//         description: "أفضل سعر لجوده عالميه تناسب جميع الأذواق 🌸",
//         imgSrc: drabzenImage,
//         imgAlt: "drabzen-logo",
//         link: "https://www.instagram.com/p/CKOz1M0g2ae/",
//       },
//       {
//         id: nextId(),
//         title: "مستشفي اليابس بطريق مكه",
//         description: "أفضل سعر لجوده عالميه تناسب جميع الأذواق 🌸",

//         imgSrc: elyabeshospitalImage,
//         imgAlt: "elyabeshospital-logo",
//         link: "https://www.instagram.com/p/CJ6hNOjrpnh/",
//       },
//       {
//         id: nextId(),
//         title: "وجهه حديد قص ليزر ارتفاع ٨ متر",
//         description: "أفضل سعر لجوده عالميه تناسب جميع الأذواق 🌸",

//         imgSrc: waghahadedImage,
//         imgAlt: "waghahaded-logo",
//         link: "https://www.instagram.com/p/CQMdCirh-Fi/",
//       },
//       {
//         id: nextId(),
//         title: "وجهات كلادنج بمعرض الصقور",
//         description: "أفضل سعر لجوده عالميه تناسب جميع الأذواق 🌸",

//         imgSrc: waghatsoaorImage,
//         imgAlt: "waghatsoaor-logo",
//         link: "https://www.instagram.com/p/CJ6iNpvLmFc/",
//       },
//       {
//         id: nextId(),
//         title: " استانلس ستيل",
//         description: "أعمال فبريكشن شغل استانلس ستيل",
//         imgSrc: stanlssteelImage,
//         imgAlt: "stanlssteel-logo",
//         link: "https://www.instagram.com/p/CMPYC87gMha/",
//       },
//       {
//         id: nextId(),
//         title: "حديد قص ليزر",
//         description: "أفضل سعر لجوده عالميه تناسب جميع الأذواق 🌸",

//         imgSrc: hadedasleazerImage,
//         imgAlt: "hadedasleazer-logo",
//         link: "https://www.instagram.com/p/CNO9cAHL4-D/",
//       },
//       {
//         id: nextId(),
//         title: "صميمات قص ليزر",
//         description: "أفضل سعر لجوده عالميه تناسب جميع الأذواق 🌸",

//         imgSrc: tsamemleaserImage,
//         imgAlt: "tsamemleaser-logo",
//         link: "https://www.instagram.com/p/CNO9iRnr8Ry/",
//       },
//       {
//         id: nextId(),
//         title: "أعمال فبريكشن",
//         description: "أفضل سعر لجوده عالميه لعشاق التميز 🌸",
//         imgSrc: amalfrabkshenImage,
//         imgAlt: "amalfrabkshen-logo",
//         link: "https://www.instagram.com/p/CMPslUUATKr/",
//       },
//       {
//         id: nextId(),
//         title: "بارتشن او حمايات شبابيك",
//         description: "شكال مميزه تصلح لبارتشن او حمايات شبابيك 💝",
//         imgSrc: bartechanImage,
//         imgAlt: "bartechan-logo",
//         link: "https://www.instagram.com/p/CKOz9wCgBWD/",
//       },
//       {
//         id: nextId(),
//         title: "غرفه بالحديد والزجاج",
//         description: "غرفه بالحديد والزجاج بشمال الرياض",
//         imgSrc: glassroomImage,
//         imgAlt: "glassroom-logo",
//         link: "https://www.instagram.com/p/CNMpcx-HULD/",
//       },
//     ],
//   };
//   return json.posts;
// };

const HomePage = () => {
  const [visible, setVisible] = useState(false);
  const [spinner, setSpinner] = useState(true);

  const socials = getSocialsIcon();
  // const languages = getLanguagesIcons();
  // const tools = getToolsIcon();
  // const posts = getPosts();

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 200) {
      setVisible(true);
    } else if (scrolled <= 200) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  useEffect(() => {
    setTimeout(() => {
      setSpinner(false);
    }, 2300);
  }, []);

  return (
    <div>
      {spinner ? (
        <Spinner />
      ) : (
        <>
          <div className="scrollToTop">
            <FaArrowCircleUp
              onClick={scrollToTop}
              style={{ display: visible ? "inline" : "none" }}
            />
          </div>

          <HomePageComponent
            socials={socials}
            // languages={languages}
            // tools={tools}
            // posts={posts}
          />
        </>
      )}
    </div>
  );
};

export default HomePage;
