"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header3({ variant }) {
  const [mobileToggle, setMobileToggle] = useState(false);
  const [isSticky, setIsSticky] = useState();
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [searchToggle, setSearchToggle] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      if (currentScrollPos > prevScrollPos) {
        setIsSticky("cs-gescout_sticky"); // Scrolling down
      } else if (currentScrollPos !== 0) {
        setIsSticky("cs-gescout_show cs-gescout_sticky"); // Scrolling up
      } else {
        setIsSticky();
      }
      setPrevScrollPos(currentScrollPos); // Update previous scroll position
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  // Inline Nav component
  const Nav = ({ setMobileToggle }) => {
    return (
      <ul className="cs_nav_list fw-medium">
        <li className="menu-item-has-children">
          <Link href="/">Home</Link>
          <ul>
            <li>
              <Link href="/" onClick={() => setMobileToggle(false)}>
                Home Version 1
              </Link>
            </li>
            <li>
              <Link href="/home2" onClick={() => setMobileToggle(false)}>
                Home Version 2
              </Link>
            </li>
            <li>
              <Link href="/home3" onClick={() => setMobileToggle(false)}>
                Home Version 3
              </Link>
            </li>
          </ul>
        </li>

        <li className="menu-item-has-children">
          <Link href="#">Pages</Link>
          <ul>
            <li>
              <Link href="/about" onClick={() => setMobileToggle(false)}>
                About Us
              </Link>
            </li>
            <li>
              <Link href="/team" onClick={() => setMobileToggle(false)}>
                Our Team
              </Link>
            </li>
            <li>
              <Link href="/team-details" onClick={() => setMobileToggle(false)}>
                Team Details
              </Link>
            </li>
            <li>
              <Link href="/pricing" onClick={() => setMobileToggle(false)}>
                Pricing
              </Link>
            </li>
            <li>
              <Link href="/faq" onClick={() => setMobileToggle(false)}>
                Faq
              </Link>
            </li>
            <li>
              <Link href="/contact" onClick={() => setMobileToggle(false)}>
                Contact
              </Link>
            </li>
          </ul>
        </li>

        <li className="menu-item-has-children">
          <Link href="/project" onClick={() => setMobileToggle(false)}>
            Project
          </Link>
          <ul>
            <li>
              <Link href="/project" onClick={() => setMobileToggle(false)}>
                Project 1
              </Link>
            </li>
            <li>
              <Link href="/project2" onClick={() => setMobileToggle(false)}>
                Project 2
              </Link>
            </li>
            <li>
              <Link
                href="/project/project-details"
                onClick={() => setMobileToggle(false)}
              >
                Project Details
              </Link>
            </li>
          </ul>
        </li>

        <li className="menu-item-has-children">
          <Link href="/service" onClick={() => setMobileToggle(false)}>
            Services
          </Link>
          <ul>
            <li>
              <Link href="/service" onClick={() => setMobileToggle(false)}>
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/service/service-details"
                onClick={() => setMobileToggle(false)}
              >
                Service Details
              </Link>
            </li>
          </ul>
        </li>

        <li className="menu-item-has-children">
          <Link href="/blog" onClick={() => setMobileToggle(false)}>
            Blog
          </Link>
          <ul>
            <li>
              <Link href="/blog" onClick={() => setMobileToggle(false)}>
                Blog
              </Link>
            </li>
            <li>
              <Link href="/blog-sidebar" onClick={() => setMobileToggle(false)}>
                Blog With Sidebar
              </Link>
            </li>
            <li>
              <Link
                href="/blog-left-sidebar"
                onClick={() => setMobileToggle(false)}
              >
                Blog Left Sidebar
              </Link>
            </li>
            <li>
              <Link
                href="/blog/blog-details"
                onClick={() => setMobileToggle(false)}
              >
                Blog Details
              </Link>
            </li>
          </ul>
        </li>

        <li>
          <Link href="/contact" onClick={() => setMobileToggle(false)}>
            Contact
          </Link>
        </li>
      </ul>
    );
  };

  return (
    <div>
      <header
        className={`cs_site_header header_style_2 header_area_4 cs_style_1 ${
          variant ? variant : ""
        } cs_sticky_header cs_site_header_full_width ${
          mobileToggle ? "cs_mobile_toggle_active" : ""
        } ${isSticky ? isSticky : ""}`}
      >
        <div className="cs_main_header">
          <div className="container">
            <div className="cs_main_header_in">
              <div className="cs_main_header_left">
                <Link className="cs_site_branding" href="/">
                  <Image
                    src="/assets/images/logo/logo.svg"
                    alt="img"
                    width={177}
                    height={54}
                  />
                </Link>
              </div>

              <div className="cs_main_header_center">
                <div className="cs_nav cs_primary_font fw-medium">
                  <span
                    className={
                      mobileToggle
                        ? "cs-munu_toggle cs_teggle_active"
                        : "cs-munu_toggle"
                    }
                    onClick={() => setMobileToggle(!mobileToggle)}
                  >
                    <span></span>
                  </span>
                  <Nav setMobileToggle={setMobileToggle} />
                </div>
              </div>

              <div className="cs_main_header_right">
                <div className="header-btn d-flex align-items-center">
                  <a
                    onClick={() => setSearchToggle(!searchToggle)}
                    className="search-trigger search-icon"
                  >
                    <i className="bi bi-search"></i>
                  </a>
                  <div className="header-button ms-4">
                    <Link href="/contact" className="theme-btn">
                      <span>
                        Get Started
                        <i className="bi bi-arrow-right"></i>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="cs_site_header_spacing_140"></div>

      <div className={`search-wrap ${searchToggle ? "active" : ""}`}>
        <div className="search-inner">
          <i
            onClick={() => setSearchToggle(!searchToggle)}
            id="search-close"
            className="bi bi-x-lg search-close"
          ></i>
          <div className="search-cell">
            <form method="get">
              <div className="search-field-holder">
                <input
                  type="search"
                  className="main-search-input"
                  placeholder="Search..."
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
