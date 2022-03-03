import React, { useState, useEffect } from "react";
import avatar from "../../assets/img/chan-dung-edit.png";
import avatarIcon from "../../assets/img/avatar.webp";
import "./styles.css";
import { Link } from "react-router-dom";
import Greeting from "../../components/greeting";
import { FaArrowCircleUp } from "react-icons/fa";
import Spinner from "../../components/Spinner";

const Information = () => {
  const [visible, setVisible] = useState(false);
  const [spinner, setSpinner] = useState(true);

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
    <div className="app">
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
          <div className="intro-wrapper1">
            <div className="nav-wrapper">
              <div className="nav-wrapper-left__dots-wrapper">
                <div className="browser-dot dot-1"></div>
                <div className="browser-dot dot-2"></div>
                <div className="browser-dot dot-3"></div>
              </div>
            </div>

            <div className="information">
              <img src={avatar} alt="avatar" />
              <h2>DR - Eman Zaki </h2>

              <div className="social">
                <Link to="/portfolio">
                  <div className="icon">
                    <img src={avatarIcon} alt="website" />
                  </div>
                  <p>Portfolio</p>
                  <div className=""></div>
                </Link>
              </div>
              <div className="social">
                <a
                  rel="noopener noreferrer"
                  target="__blank"
                  href="/resume.pdf"
                >
                  <div className="icon">
                    <img
                      src="https://img.icons8.com/nolan/50/open-resume.png"
                      alt="resume"
                    />
                  </div>
                  <p>Résumé</p>
                  <div className=""></div>
                </a>
              </div>
              {/* <div className="social">
            <a
              rel="noopener noreferrer"
              target="__blank"
              href="https://github.com/mohamed4ahmed"
            >
              <div className="icon">
                <img
                  src="https://img.icons8.com/fluent/48/000000/github.png"
                  alt="github"
                />
              </div>
              <p>Github</p>
              <div className=""></div>
            </a>
          </div> */}

              <div className="social">
                <a
                  rel="noopener noreferrer"
                  target="__blank"
                  href="mailto:youyaahmed1731993@gmail.com"
                >
                  <div className="icon">
                    <img
                      src="https://img.icons8.com/color/48/000000/gmail-new.png"
                      alt="email"
                    />
                  </div>
                  <p>Email</p>
                  <div className=""></div>
                </a>
              </div>

              <div className="social">
                <a
                  rel="noopener noreferrer"
                  target="__blank"
                  href="tel:+201017043714"
                >
                  <div className="icon">
                    <img
                      src="https://img.icons8.com/color/48/000000/egypt-circular.png"
                      alt="phoneegy"
                    />
                    <img
                      src="https://img.icons8.com/ios/50/000000/apple-phone.png"
                      alt="phone"
                    />
                  </div>
                  <p>Phone Number EGY</p>
                  <div className=""></div>
                </a>
              </div>

              <div className="social">
                <a
                  rel="noopener noreferrer"
                  target="__blank"
                  href="tel:+966556286650"
                >
                  <div className="icon">
                    <img
                      src="https://img.icons8.com/color/48/000000/saudi-arabia.png"
                      alt="phoneksa"
                    />
                    <img
                      src="https://img.icons8.com/clouds/100/000000/apple-phone.png"
                      alt="phonenum"
                    />
                  </div>
                  <p>Phone Number KSA</p>
                  <div className=""></div>
                </a>
              </div>

              <div className="social">
                <a
                  rel="noopener noreferrer"
                  target="__blank"
                  href="https://www.linkedin.com"
                >
                  <div className="icon">
                    <img
                      src="https://img.icons8.com/color/48/000000/linkedin.png"
                      alt="linkedin"
                    />
                  </div>
                  <p>Linkedin</p>
                  <div className=""></div>
                </a>
              </div>

              <div className="social">
                <a
                  rel="noopener noreferrer"
                  target="__blank"
                  href="https://www.facebook.com/eman.zaki.1610/"
                  aria-label="Facebook"
                >
                  <div className="icon">
                    <img
                      src="https://img.icons8.com/fluency/48/000000/facebook-new.png"
                      alt="facebook"
                    />
                  </div>
                  <p>Facebook</p>
                  <div className=""></div>
                </a>
              </div>

              <div className="social">
                <a
                  rel="noopener"
                  target="__blank"
                  href="https://m.facebook.com/messages/t/100041579624188"
                  aria-label="Facebook"
                >
                  <div className="icon">
                    <img
                      src="https://img.icons8.com/fluency/50/000000/facebook-messenger--v2.png"
                      alt="messenger"
                    />
                  </div>
                  <p>Messenger</p>
                  <div className=""></div>
                </a>
              </div>

              <div className="social">
                <a
                  rel="noopener noreferrer"
                  target="__blank"
                  href="https://www.instagram.com/eman.zaki.1610/"
                >
                  <div className="icon">
                    <img
                      src="https://img.icons8.com/fluent/48/000000/instagram-new.png"
                      alt="instagram"
                    />
                  </div>
                  <p>Instagram</p>
                  <div className=""></div>
                </a>
              </div>

              <div className="social">
                <a
                  rel="noopener noreferrer"
                  target="__blank"
                  href="https://www.instagram.com/direct/t/340282366841710300949128118546318973238"
                >
                  <div className="icon">
                    <img
                      src="https://img.icons8.com/ios-filled/50/000000/facebook-messenger.png"
                      alt="instagrammessenger"
                    />
                  </div>
                  <p>Instagram Messenger</p>
                  <div className=""></div>
                </a>
              </div>

              <Greeting />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Information;
