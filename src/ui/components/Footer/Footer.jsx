import React from "react";
import "./Footer.css" ;

export default function Footer() {
  return (
    <>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12 footer-col-3">
              <div className="widget footer_widget">
                <h5 className="footer-title py-3">Address</h5>
                <div className="gem-contacts">
                  <div className="gem-contacts-item gem-contacts-address">
                    Corporate Office : Doon House, B-275(A), First floor
                    Sector-57, Shushant Lok 3 Near Hong Kong Bazzar, Gurugram
                    Pin 122001, Haryana.
                  </div>
                  <div className="gem-contacts-item gem-contacts-phone">
                    <i className="fa fa-phone" aria-hidden="true"></i> Phone:{" "}
                    <a href="">+91-9122588799</a>
                  </div>

                  <div className="gem-contacts-item gem-contacts-address mt-2">
                    Reg. Office : Doon House, D2/3, 4th Floor, Chandra Tower,
                    IDBI Bank Building Dimna Road, Mango, Jamshedpur-831012,
                    Jharkhand.
                  </div>
                  <div className="gem-contacts-item gem-contacts-phone">
                    <i className="fa fa-phone" aria-hidden="true"></i> Phone:{" "}
                    <a>+91 9122588799</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-6 col-lg-6 col-md-6 col-sm-6">
              <div className="widget footer_widget">
                <h5 className="footer-title py-3">Recent News</h5>
                <ul className="posts  styled">
                  <li className="clearfix gem-pp-posts">
                    <div className="gem-pp-posts-text">
                      <div className="gem-pp-posts-item">
                        <a href="#">Want to start Your Own Play School.</a>
                      </div>
                      <div className="gem-pp-posts-date">Call +91-9122588799</div>
                    </div>
                  </li>
                  <li className="clearfix gem-pp-posts">
                    <div className="gem-pp-posts-text">
                      <div className="gem-pp-posts-item">
                        <a href="#">
                          Now we are in Faridabad,Now we are in DaudNagar.
                        </a>
                      </div>
                      <div className="gem-pp-posts-date">
                        Call +91-9122588799, +91-9122588799
                      </div>
                    </div>
                  </li>
                  <li className="clearfix gem-pp-posts">
                    <div className="gem-pp-posts-text">
                      <div className="gem-pp-posts-item">
                        <a href="">Now we are in Ranchi, Admission open</a>
                      </div>
                      <div className="gem-pp-posts-date">
                        Call +91-9122588799, +91-9122588799
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-md-3">
              <div className="footer-site-info">
                2020 ©{" "}
                <a
                >
                  Top HTML & CSS Program{" "}
                </a>
              </div>
            </div>

            <div className="col-md-6">
              <nav
                id="footer-navigation"
                className="site-navigation footer-navigation centered-box"
                role="navigation"
              >
                <ul
                  id="footer-menu"
                  className="nav-menu styled clearfix inline-inside"
                >
                  <li
                    id="menu-item-26"
                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-26"
                  >
                    <a href="#">Support</a>
                  </li>
                  <li
                    id="menu-item-27"
                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-27"
                  >
                    <a href="#">Contact Us</a>
                  </li>
                  <li
                    id="menu-item-28"
                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-28"
                  >
                    <a href="#">Disclaimer</a>
                  </li>
                  <li
                    id="menu-item-29"
                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-29"
                  >
                    <a >Add more</a>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="col-md-3">
              <div id="footer-socials">
                <div className="socials inline-inside socials-colored">
                  <a
                    target="_blank"
                    title="Facebook"
                    className="socials-item"
                  >
                    <i className="fab fa-facebook-f facebook"></i>
                  </a>
                  <a
                    target="_blank"
                    title="Twitter"
                    className="socials-item"
                  >
                    <i className="fab fa-twitter twitter"></i>
                  </a>
                  <a
                    target="_blank"
                    title="Instagram"
                    className="socials-item"
                  >
                    <i className="fab fa-instagram instagram"></i>
                  </a>
                  <a
                    target="_blank"
                    title="YouTube"
                    className="socials-item"
                  >
                    <i className="fab fa-youtube youtube"></i>
                  </a>
                  <a
                    target="_blank"
                    title="Telegram"
                    className="socials-item"
                  >
                    <i className="fab fa-telegram telegram"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
