import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./TermsAndConditionsPage.css";

const TermsAndConditionsPage = () => {
  const navigate = useNavigate();

  const onLinkText1Click = useCallback(() => {
    // Please sync "Home Page" to the project
  }, []);

  const onLinkText2Click = useCallback(() => {
    // Please sync "About Us Page" to the project
  }, []);

  const onLinkText3Click = useCallback(() => {
    navigate("/contact-page");
  }, [navigate]);

  const onMenuItemContainer4Click = useCallback(() => {
    // Please sync "Food Products Page" to the project
  }, []);

  const onMenuItemContainer5Click = useCallback(() => {
    // Please sync "Religious SrorePage" to the project
  }, []);

  const onMenuItemContainer6Click = useCallback(() => {
    // Please sync "Books Page" to the project
  }, []);

  const onMenuItemContainer7Click = useCallback(() => {
    // Please sync "Subsidized Food page" to the project
  }, []);

  return (
    <div className="terms-and-conditions-page">
      <div className="header-64">
        <div className="container">
          <b className="heading">Terms of Service</b>
          <div className="text">Effective date: April 3, 2023</div>
        </div>
      </div>
      <div className="component-2">
        <div className="navbar-2">
          <div className="container1">
            <div className="logo-holder">
              <div className="logo">
                <img className="image-4-icon" alt="" src="/image-42@2x.png" />
              </div>
              <div className="link">Nourishing Lives, Enriching Souls</div>
            </div>
            <div className="column">
              <div className="button">
                <div className="link">Login</div>
              </div>
            </div>
            <div className="column1">
              <div className="link1" onClick={onLinkText1Click}>
                Home
              </div>
              <div className="link1" onClick={onLinkText2Click}>
                About Us
              </div>
              <div className="link1" onClick={onLinkText3Click}>
                Contact Us
              </div>
              <div className="nav-link-dropdown">
                <div className="link">Products</div>
                <img
                  className="chevron-down-icon"
                  alt=""
                  src="/chevron-down.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="menu">
          <div className="menu-list">
            <div className="page-group-one">Page group one</div>
            <div className="menu-item">
              <img
                className="chevron-down-icon"
                alt=""
                src="/icon--relume.svg"
              />
              <div className="content">
                <div className="page-one">Page One</div>
                <div className="lorem-ipsum-dolor">
                  Lorem ipsum dolor sit amet consectetur elit
                </div>
              </div>
            </div>
            <div className="menu-item">
              <img
                className="chevron-down-icon"
                alt=""
                src="/icon--relume.svg"
              />
              <div className="content">
                <div className="page-one">Page Two</div>
                <div className="lorem-ipsum-dolor">
                  Lorem ipsum dolor sit amet consectetur elit
                </div>
              </div>
            </div>
            <div className="menu-item">
              <img
                className="chevron-down-icon"
                alt=""
                src="/icon--relume.svg"
              />
              <div className="content">
                <div className="page-one">Page Three</div>
                <div className="lorem-ipsum-dolor">
                  Lorem ipsum dolor sit amet consectetur elit
                </div>
              </div>
            </div>
            <div className="menu-item">
              <img
                className="chevron-down-icon"
                alt=""
                src="/icon--relume.svg"
              />
              <div className="content">
                <div className="page-one">Page Four</div>
                <div className="lorem-ipsum-dolor">
                  Lorem ipsum dolor sit amet consectetur elit
                </div>
              </div>
            </div>
          </div>
          <div className="menu-list">
            <div className="page-group-one">Page group two</div>
            <div className="menu-item4" onClick={onMenuItemContainer4Click}>
              <img
                className="chevron-down-icon"
                alt=""
                src="/icon--relume.svg"
              />
              <div className="content">
                <div className="page-one">Page Five</div>
                <div className="lorem-ipsum-dolor">
                  Lorem ipsum dolor sit amet consectetur elit
                </div>
              </div>
            </div>
            <div className="menu-item4" onClick={onMenuItemContainer5Click}>
              <img
                className="chevron-down-icon"
                alt=""
                src="/icon--relume.svg"
              />
              <div className="content">
                <div className="page-one">Page Six</div>
                <div className="lorem-ipsum-dolor">
                  Lorem ipsum dolor sit amet consectetur elit
                </div>
              </div>
            </div>
            <div className="menu-item4" onClick={onMenuItemContainer6Click}>
              <img
                className="chevron-down-icon"
                alt=""
                src="/icon--relume.svg"
              />
              <div className="content">
                <div className="page-one">Page Seven</div>
                <div className="lorem-ipsum-dolor">
                  Lorem ipsum dolor sit amet consectetur elit
                </div>
              </div>
            </div>
            <div className="menu-item4" onClick={onMenuItemContainer7Click}>
              <img
                className="chevron-down-icon"
                alt=""
                src="/icon--relume.svg"
              />
              <div className="content">
                <div className="page-one">Page Eight</div>
                <div className="lorem-ipsum-dolor">
                  Lorem ipsum dolor sit amet consectetur elit
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="content-7">
        <div className="content8">
          <div className="rich-text-wrapper">
            <div className="rich-text">
              <div className="content9">
                <b className="heading">Heading 2</b>
              </div>
              <div className="content10">
                <b className="dolor-enim-eu">
                  Dolor enim eu tortor urna sed duis nulla. Aliquam vestibulum,
                  nulla odio nisl vitae. In aliquet pellentesque aenean hac
                  vestibulum turpis mi bibendum diam. Tempor integer aliquam in
                  vitae malesuada fringilla.
                </b>
              </div>
              <div className="content11">
                <div className="mi-tincidunt-elit">
                  Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam
                  suspendisse morbi eleifend faucibus eget vestibulum felis.
                  Dictum quis montes, sit sit. Tellus aliquam enim urna, etiam.
                  Mauris posuere vulputate arcu amet, vitae nisi, tellus
                  tincidunt. At feugiat sapien varius id.
                </div>
              </div>
              <div className="content12">
                <b className="heading">Heading 3</b>
              </div>
              <div className="content11">
                <div className="mi-tincidunt-elit">
                  Eget quis mi enim, leo lacinia pharetra, semper. Eget in
                  volutpat mollis at volutpat lectus velit, sed auctor.
                  Porttitor fames arcu quis fusce augue enim. Quis at habitant
                  diam at. Suscipit tristique risus, at donec. In turpis vel et
                  quam imperdiet. Ipsum molestie aliquet sodales id est ac
                  volutpat.
                </div>
              </div>
              <div className="content11">
                <div className="mi-tincidunt-elit">
                  Tristique odio senectus nam posuere ornare leo metus,
                  ultricies. Blandit duis ultricies vulputate morbi feugiat cras
                  placerat elit. Aliquam tellus lorem sed ac. Montes, sed mattis
                  pellentesque suscipit accumsan. Cursus viverra aenean magna
                  risus elementum faucibus molestie pellentesque. Arcu ultricies
                  sed mauris vestibulum.
                </div>
              </div>
              <div className="content15">
                <b className="heading-4">Heading 4</b>
              </div>
              <div className="content11">
                <div className="mi-tincidunt-elit">
                  Morbi sed imperdiet in ipsum, adipiscing elit dui lectus.
                  Tellus id scelerisque est ultricies ultricies. Duis est sit
                  sed leo nisl, blandit elit sagittis. Quisque tristique
                  consequat quam sed. Nisl at scelerisque amet nulla purus
                  habitasse.
                </div>
              </div>
              <div className="content17">
                <b className="dolor-enim-eu">Heading 5</b>
              </div>
              <div className="content11">
                <div className="mi-tincidunt-elit">
                  Morbi sed imperdiet in ipsum, adipiscing elit dui lectus.
                  Tellus id scelerisque est ultricies ultricies. Duis est sit
                  sed leo nisl, blandit elit sagittis. Quisque tristique
                  consequat quam sed. Nisl at scelerisque amet nulla purus
                  habitasse.
                </div>
              </div>
              <div className="content19">
                <div className="content20">
                  <div className="mi-tincidunt-elit">
                    Morbi sed imperdiet in ipsum, adipiscing elit dui lectus.
                    Tellus id scelerisque est ultricies ultricies. Duis est sit
                    sed leo nisl, blandit elit sagittis. Quisque tristique
                    consequat quam sed. Nisl at scelerisque amet nulla purus
                    habitasse.
                  </div>
                </div>
              </div>
              <div className="content21">
                <b className="dolor-enim-eu">Heading 6</b>
              </div>
              <div className="content11">
                <div className="mi-tincidunt-elit">
                  Nunc sed faucibus bibendum feugiat sed interdum. Ipsum egestas
                  condimentum mi massa. In tincidunt pharetra consectetur sed
                  duis facilisis metus. Etiam egestas in nec sed et. Quis
                  lobortis at sit dictum eget nibh tortor commodo cursus.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-6">
        <div className="container2">
          <div className="divider" />
          <div className="links">
            <div className="column2">
              <div className="page-one">Column One</div>
              <div className="footer-links">
                <div className="link5">
                  <div className="link6">Link One</div>
                </div>
                <div className="link5">
                  <div className="link6">Link Two</div>
                </div>
                <div className="link5">
                  <div className="link6">Link Three</div>
                </div>
                <div className="link5">
                  <div className="link6">Link Four</div>
                </div>
                <div className="link5">
                  <div className="link6">Link Five</div>
                </div>
              </div>
            </div>
            <div className="column2">
              <div className="page-one">Column Two</div>
              <div className="footer-links">
                <div className="link5">
                  <div className="link6">Link Six</div>
                </div>
                <div className="link5">
                  <div className="link6">Link Seven</div>
                </div>
                <div className="link5">
                  <div className="link6">Link Eight</div>
                </div>
                <div className="link5">
                  <div className="link6">Link Nine</div>
                </div>
                <div className="link5">
                  <div className="link6">Link Ten</div>
                </div>
              </div>
            </div>
            <div className="column2">
              <div className="page-one">Column Three</div>
              <div className="footer-links">
                <div className="link5">
                  <div className="link6">Link Eleven</div>
                </div>
                <div className="link5">
                  <div className="link6">Link Twelve</div>
                </div>
                <div className="link5">
                  <div className="link6">Link Thirteen</div>
                </div>
                <div className="link5">
                  <div className="link6">Link Fourteen</div>
                </div>
                <div className="link5">
                  <div className="link6">Link Fifteen</div>
                </div>
              </div>
            </div>
            <div className="column2">
              <div className="page-one">Column Four</div>
              <div className="footer-links">
                <div className="link5">
                  <div className="link6">Link Sixteen</div>
                </div>
                <div className="link5">
                  <div className="link6">Link Seventeen</div>
                </div>
                <div className="link5">
                  <div className="link6">Link Eightteen</div>
                </div>
                <div className="link5">
                  <div className="link6">Link Nineteen</div>
                </div>
                <div className="link5">
                  <div className="link6">Link Twenty</div>
                </div>
              </div>
            </div>
          </div>
          <div className="credits">
            <div className="divider" />
            <div className="logo-holder-parent">
              <div className="logo-holder1">
                <div className="logo">
                  <img className="image-4-icon" alt="" src="/image-4@2x.png" />
                </div>
                <div className="link">Nourishing Lives, Enriching Souls</div>
              </div>
              <div className="text1">
                © 2023 Hari Arunachala. All rights reserved.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditionsPage;
