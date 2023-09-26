import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./ContactPage.css";

const ContactPage = () => {
  const navigate = useNavigate();

  const onText7Click = useCallback(() => {
    // Please sync "Privacy Policy Page" to the project
  }, []);

  const onText8Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onLinkText26Click = useCallback(() => {
    // Please sync "Home Page" to the project
  }, []);

  const onLinkText27Click = useCallback(() => {
    // Please sync "About Us Page" to the project
  }, []);

  const onLinkText28Click = useCallback(() => {
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
    <div className="contact-page">
      <div className="contact-7">
        <div className="content39">
          <div className="section-title">
            <b className="heading5">Contact us</b>
            <div className="text2">
              Our dedicated Customer Support team is here to assist you with any
              inquiries or assistance you may need
            </div>
          </div>
          <div className="form">
            <div className="input">
              <div className="name">Name</div>
              <div className="text-input1">
                <div className="placeholder1">Placeholder</div>
              </div>
            </div>
            <div className="input">
              <div className="name">Email</div>
              <div className="text-input1">
                <div className="placeholder1">Placeholder</div>
              </div>
            </div>
            <div className="input">
              <div className="name">Message</div>
              <div className="text-area1">
                <div className="type-your-message1">Type your message...</div>
                <img className="text-area-inner" alt="" src="/line-1.svg" />
                <img className="line-icon" alt="" src="/line-2.svg" />
              </div>
            </div>
            <div className="button7">
              <div className="button8">Submit</div>
            </div>
          </div>
        </div>
        <img
          className="placeholder-image"
          alt=""
          src="/placeholder--image@2x.png"
        />
      </div>
      <div className="logo-2">
        <b className="heading6">
          Feel free to reach out to us through the following channels:
        </b>
        <div className="logo-holder4">
          <div className="logo4">
            <img className="image-4-icon4" alt="" src="/image-41@2x.png" />
          </div>
          <div className="button8">Nourishing Lives, Enriching Souls</div>
        </div>
      </div>
      <div className="contact-22">
        <div className="content40">
          <img className="icon-email" alt="" src="/icon--email.svg" />
          <div className="section-title">
            <div className="actions">
              <b className="heading7">Email</b>
              <div className="text3">
                Our team will respond promptly to your email within [Insert
                Response Time]
              </div>
            </div>
            <div className="link53">hello@mail.io</div>
          </div>
        </div>
        <div className="content42">
          <img className="icon-email" alt="" src="/icon--phone.svg" />
          <div className="section-title">
            <div className="actions">
              <b className="heading7">Phone</b>
              <div className="text3">
                Our team is available during our operating hours to address your
                queries.
              </div>
            </div>
            <div className="link53">+1 (555) 000-0000</div>
          </div>
        </div>
        <div className="content44">
          <img className="icon-email" alt="" src="/icon--pin.svg" />
          <div className="section-title">
            <div className="actions">
              <b className="heading7">Office</b>
              <div className="text3">
                <p className="visit-our-physical">
                  Visit our physical store to explore our products and
                  experience the essence of Hari Arunachala. You can find us at:
                </p>
                <p className="visit-our-physical">[Insert Store Address]</p>
              </div>
            </div>
            <div className="link53">123 Sample St, Sydney NSW 2000 AU</div>
          </div>
        </div>
        <div className="content46">
          <div className="accordion-item">
            <div className="actions">
              <b className="heading7">Office Operating Hours:</b>
              <div className="text3">
                <p className="visit-our-physical">
                  Monday to Saturday: [Insert Opening Time] - [Insert Closing
                  Time]
                </p>
                <p className="visit-our-physical">
                  {" "}
                  Sunday: [Insert Opening Time] - [Insert Closing Time]
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="faq-1">
        <div className="container4">
          <div className="section-title1">
            <b className="heading5">Frequently asked questions</b>
            <div className="text2">
              Frequently asked questions ordered by popularity. Remember that if
              the visitor has not committed to the call to action, they may
              still have questions (doubts) that can be answered.
            </div>
          </div>
          <div className="accordion">
            <div className="accordion-item">
              <div className="divider2" />
              <div className="title">
                <b className="question">Question text goes here</b>
                <img className="icon" alt="" src="/icon.svg" />
              </div>
            </div>
            <div className="accordion-item">
              <div className="divider2" />
              <div className="title">
                <b className="question">Question text goes here</b>
                <img className="icon" alt="" src="/icon.svg" />
              </div>
            </div>
            <div className="accordion-item">
              <div className="divider2" />
              <div className="title">
                <b className="question">Question text goes here</b>
                <img className="icon" alt="" src="/icon.svg" />
              </div>
            </div>
            <div className="accordion-item">
              <div className="divider2" />
              <div className="title">
                <b className="question">Question text goes here</b>
                <img className="icon" alt="" src="/icon.svg" />
              </div>
            </div>
            <div className="accordion-item">
              <div className="divider2" />
              <div className="title">
                <b className="question">Question text goes here</b>
                <img className="icon" alt="" src="/icon.svg" />
              </div>
            </div>
            <div className="divider2" />
          </div>
          <div className="content48">
            <div className="content49">
              <b className="heading7">Still have questions?</b>
              <div className="text2">
                Support details to capture customers that might be on the fence.
              </div>
            </div>
            <div className="button9">
              <div className="button8">Contact us</div>
            </div>
          </div>
          <div className="heading13">
            Join our newsletter to stay up to date on features and releases.
          </div>
          <div className="newsletter">
            <div className="actions">
              <div className="form1">
                <div className="text-input3">
                  <div className="question">Enter Your Email</div>
                </div>
                <div className="button11">
                  <div className="button8">Subscribe</div>
                </div>
              </div>
              <div className="text9" onClick={onText7Click}>
                {`By subscribing you agree to with our `}
                <span className="privacy-policy">Privacy Policy</span> and
                provide consent to receive updates from our company.
              </div>
              <div className="text9" onClick={onText8Click}>
                {`By subscribing you agree to with our `}
                <span className="privacy-policy">Terms and Conditions</span> and
                provide consent to receive updates from our company.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-61">
        <div className="header-23">
          <div className="column8">
            <div className="section-title">
              <b className="heading5">Nourishing Lives, Enriching Souls</b>
              <div className="text2">
                we value your engagement and support. Whether you have
                questions, feedback, or simply want to connect, we are here to
                serve you with warmth and care.
              </div>
            </div>
          </div>
        </div>
        <div className="container5">
          <div className="divider8" />
          <div className="links1">
            <div className="column9">
              <div className="heading15">Column One</div>
              <div className="footer-links4">
                <div className="link56">
                  <div className="question">Link One</div>
                </div>
                <div className="link56">
                  <div className="question">Link Two</div>
                </div>
                <div className="link56">
                  <div className="question">Link Three</div>
                </div>
                <div className="link56">
                  <div className="question">Link Four</div>
                </div>
                <div className="link56">
                  <div className="question">Link Five</div>
                </div>
              </div>
            </div>
            <div className="column9">
              <div className="heading15">Column Two</div>
              <div className="footer-links4">
                <div className="link56">
                  <div className="question">Link Six</div>
                </div>
                <div className="link56">
                  <div className="question">Link Seven</div>
                </div>
                <div className="link56">
                  <div className="question">Link Eight</div>
                </div>
                <div className="link56">
                  <div className="question">Link Nine</div>
                </div>
                <div className="link56">
                  <div className="question">Link Ten</div>
                </div>
              </div>
            </div>
            <div className="column9">
              <div className="heading15">Column Three</div>
              <div className="footer-links4">
                <div className="link56">
                  <div className="question">Link Eleven</div>
                </div>
                <div className="link56">
                  <div className="question">Link Twelve</div>
                </div>
                <div className="link56">
                  <div className="question">Link Thirteen</div>
                </div>
                <div className="link56">
                  <div className="question">Link Fourteen</div>
                </div>
                <div className="link56">
                  <div className="question">Link Fifteen</div>
                </div>
              </div>
            </div>
            <div className="column9">
              <div className="heading15">Column Four</div>
              <div className="footer-links4">
                <div className="link56">
                  <div className="question">Link Sixteen</div>
                </div>
                <div className="link56">
                  <div className="question">Link Seventeen</div>
                </div>
                <div className="link56">
                  <div className="question">Link Eightteen</div>
                </div>
                <div className="link56">
                  <div className="question">Link Nineteen</div>
                </div>
                <div className="link56">
                  <div className="question">Link Twenty</div>
                </div>
              </div>
            </div>
          </div>
          <div className="credits1">
            <div className="divider8" />
            <div className="logo-holder-group">
              <div className="logo-holder5">
                <div className="logo5">
                  <img
                    className="image-4-icon4"
                    alt=""
                    src="/image-411@2x.png"
                  />
                </div>
                <div className="button8">Nourishing Lives, Enriching Souls</div>
              </div>
              <div className="text12">
                © 2023 Hari Arunachala. All rights reserved.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="component-21">
        <div className="navbar-22">
          <div className="container6">
            <div className="logo-holder6">
              <div className="logo5">
                <img className="image-4-icon4" alt="" src="/image-42@2x.png" />
              </div>
              <div className="button8">Nourishing Lives, Enriching Souls</div>
            </div>
            <div className="column13">
              <div className="button13">
                <div className="button8">Login</div>
              </div>
            </div>
            <div className="column14">
              <div className="link98" onClick={onLinkText26Click}>
                Home
              </div>
              <div className="link98" onClick={onLinkText27Click}>
                About Us
              </div>
              <div className="link98" onClick={onLinkText28Click}>
                Contact Us
              </div>
              <div className="nav-link-dropdown2">
                <div className="button8">Products</div>
                <img
                  className="chevron-down-icon2"
                  alt=""
                  src="/chevron-down.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="menu3">
          <div className="menu-list6">
            <div className="page-group-one3">Page group one</div>
            <div className="menu-item24">
              <img
                className="chevron-down-icon2"
                alt=""
                src="/icon--relume.svg"
              />
              <div className="content51">
                <div className="heading15">Page One</div>
                <div className="lorem-ipsum-dolor24">
                  Lorem ipsum dolor sit amet consectetur elit
                </div>
              </div>
            </div>
            <div className="menu-item24">
              <img
                className="chevron-down-icon2"
                alt=""
                src="/icon--relume.svg"
              />
              <div className="content51">
                <div className="heading15">Page Two</div>
                <div className="lorem-ipsum-dolor24">
                  Lorem ipsum dolor sit amet consectetur elit
                </div>
              </div>
            </div>
            <div className="menu-item24">
              <img
                className="chevron-down-icon2"
                alt=""
                src="/icon--relume.svg"
              />
              <div className="content51">
                <div className="heading15">Page Three</div>
                <div className="lorem-ipsum-dolor24">
                  Lorem ipsum dolor sit amet consectetur elit
                </div>
              </div>
            </div>
            <div className="menu-item24">
              <img
                className="chevron-down-icon2"
                alt=""
                src="/icon--relume.svg"
              />
              <div className="content51">
                <div className="heading15">Page Four</div>
                <div className="lorem-ipsum-dolor24">
                  Lorem ipsum dolor sit amet consectetur elit
                </div>
              </div>
            </div>
          </div>
          <div className="menu-list6">
            <div className="page-group-one3">Page group two</div>
            <div className="menu-item28" onClick={onMenuItemContainer4Click}>
              <img
                className="chevron-down-icon2"
                alt=""
                src="/icon--relume.svg"
              />
              <div className="content51">
                <div className="heading15">Page Five</div>
                <div className="lorem-ipsum-dolor24">
                  Lorem ipsum dolor sit amet consectetur elit
                </div>
              </div>
            </div>
            <div className="menu-item28" onClick={onMenuItemContainer5Click}>
              <img
                className="chevron-down-icon2"
                alt=""
                src="/icon--relume.svg"
              />
              <div className="content51">
                <div className="heading15">Page Six</div>
                <div className="lorem-ipsum-dolor24">
                  Lorem ipsum dolor sit amet consectetur elit
                </div>
              </div>
            </div>
            <div className="menu-item28" onClick={onMenuItemContainer6Click}>
              <img
                className="chevron-down-icon2"
                alt=""
                src="/icon--relume.svg"
              />
              <div className="content51">
                <div className="heading15">Page Seven</div>
                <div className="lorem-ipsum-dolor24">
                  Lorem ipsum dolor sit amet consectetur elit
                </div>
              </div>
            </div>
            <div className="menu-item28" onClick={onMenuItemContainer7Click}>
              <img
                className="chevron-down-icon2"
                alt=""
                src="/icon--relume.svg"
              />
              <div className="content51">
                <div className="heading15">Page Eight</div>
                <div className="lorem-ipsum-dolor24">
                  Lorem ipsum dolor sit amet consectetur elit
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
