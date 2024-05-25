import { Link } from "react-router-dom";
import { useState } from "react";
import Footer from "../Components/Footer";
import "../App.css";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenuButtonClick = () => {
    setIsMenuOpen(true);
  };
  const handleCloseButtonClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className=" border-b ">
      <div className="flex flex-wrap items-center justify-between lg:mr-10 sm:mr-0  bg-transparent backdrop-blur-md">
        <div className="flex">
          <div className=" w-30 bg-black lg:h-16 ssm:h-12 ">
            <Link to="/home">
              <img
                src="/65847d8cf5bdf9297445eb77_Logo-White.png"
                alt="Logo"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                  e.curentTarget.enerror = null;
                }}
                className="p-5  lg:w-[100px] ssm:w-[90px]"
              />
            </Link>
          </div>
          <p className="mt-3 ml-3 text-lg font-medium ssm:hidden sm:hidden lg:block text-black ">
            Digital Agency from New York
          </p>
        </div>
        <div
          className="lg:flex list-none justify-between text-white ssm:hidden sm:flex "
          id="navigations-container"
        >
          <ul className="flex mt-2 lg:gap-6 md:gap-4 sm:gap-1 ssm:gap-0">
            <Link to="/home">
              <li className="sm:pl-1 text-gray-600">
                <a href="">Home</a>
              </li>
            </Link>
            <Link to="/work">
              <li className="text-gray-600 sm:pl-0 ">Work</li>
            </Link>

            <li className="text-gray-600">
              <Link to="/about">About</Link>
            </li>
          </ul>
          <Link to="/contact">
            <button className="text-lg  border lg:ml-10 sm:ml-2 px-6 py-1 bg-white hover:bg-black text-black hover:text-white">
              Let's Talk
            </button>
          </Link>
        </div>
        <div className="sm:hidden lg:hidden ">
          <button
            onClick={handleMenuButtonClick}
            style={{ display: isMenuOpen ? "none" : "block" }}
            className="ssm:mr-5 font-medium lg:hidden md:hidden sm:hidden"
          >
            Menu
          </button>
          <div
            id="sidebar-container"
            className="h-fit bg-white"
            style={{ display: isMenuOpen ? "block" : "none" }}
          >
            <div
              id="sidebar"
              style={{ display: isMenuOpen ? "block" : "none" }}
              className=" sidebar ssm:mr-5"
            >
              <button
                onClick={handleCloseButtonClick}
                id="close-button"
                style={{ display: isMenuOpen ? "block" : "none" }}
                className="text-gray-500"
              >
                close
              </button>
              <div className="w-screen relative -top-14 ">
                <article className="pb-[100px] sm:px-3 ">
                  <div className="bg-black">
                    <div className="px-3 my-[50px] h-screen pt-16 bg-black text-white">
                      <ul className="">
                        <Link to="/">
                          <li className="text-[45px] py-2  border-b border-gray-500">
                            Home
                          </li>
                        </Link>
                        <Link to="/work">
                          <li className="text-[45px] py-2 border-b border-gray-500">
                            Work
                          </li>
                        </Link>
                        <Link to="/contact">
                          <li className="text-[45px] py-2 border-b border-gray-500">
                            Contact
                          </li>
                        </Link>
                        <Link to="/about">
                          <li className="text-[45px] py-2 border-b border-gray-500">
                            About
                          </li>
                        </Link>
                      </ul>
                      <div className="flex text-[17px] gap-3 my-3">
                        <div>
                          <p className="text-gray-500">General Inquiries</p>
                          <p>rnya2022@gmail.com</p>
                        </div>
                        <div className="">
                          <p className="text-gray-500">Phone</p>
                          <p>+233257152860</p>
                        </div>
                      </div>
                      <button className="h-[50px] text-[18px] border w-full mt-5 bg-white text-black">
                        Let's Talk
                      </button>
                    </div>
                  </div>
                  <div className="ssm:px-2">
                    <img
                      src="/public/6583f7931e891cc8ba8b5f94_About Image.png"
                      alt=""
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                        e.curentTarget.enerror = null;
                      }}
                    />
                  </div>
                  <div className="ssm:px-2">
                    <div className="lg:flex justify-between py-[50px] ">
                      <li className="ssm:my-5">Our value</li>

                      <div className="lg:w-[900px] sm:w-full">
                        <p className="lg:text-[40px] sm:text-[30px] ssm:text-[25px] leading-none sm:py-5">
                          Good design begins with honesty, asks tough questions,
                          comes from collaboration and from trusting your
                          intuition
                        </p>
                      </div>
                    </div>
                    <hr />
                    <div>
                      <div className="lg:flex md:inline-block leading-relaxed sm:inline-block sm:py-10 justify-between lg:py-10  ssm:my-10 ">
                        <p>[01]</p>
                        <div>
                          <p className="text-[30px] ">Inclusive</p>
                        </div>
                        <div>
                          <p className="lg:w-[600px] text-gray-500">
                            By embracing empathy in design, designers can create
                            products, services, and experiences that are more
                            inclusive, user-centered, and meaningful.
                          </p>
                        </div>
                      </div>
                    </div>
                    <hr />
                    <div>
                      <div className="lg:flex md:inline-block leading-relaxed sm:inline-block sm:py-10 justify-between lg:py-10 ssm:my-10">
                        <p>[02]</p>
                        <div>
                          <p className="text-[30px] ">Efficient</p>
                        </div>
                        <div>
                          <p className="lg:w-[600px] text-gray-500">
                            By embracing empathy in design, designers can create
                            products, services, and experiences that are more
                            inclusive, user-centered, and meaningful.
                          </p>
                        </div>
                      </div>
                    </div>
                    <hr />
                    <div>
                      <div className="lg:flex md:inline-block leading-relaxed sm:inline-block sm:py-10 justify-between lg:py-10 ssm:my-10">
                        <p>[03]</p>
                        <div>
                          <p className="text-[30px] ">Inovative</p>
                        </div>
                        <div>
                          <p className="lg:w-[600px] text-gray-600">
                            With rapidly evolving technologies and changing
                            consumer preferences, companies that prioritize
                            design will have a competitive edge in the market.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
                <article className="bg-gray-100 lg:px-10 sm:px-3 ssm:px-3">
                  <div className="py-40">
                    <div className="ssm:mb-5 lg:hidden md:hidden sm:block ssm:block">
                      <li className="ssm:my-2">Our Philosophy</li>
                      <p className="lg:text-[40px] ssm:text-[25px] ssm:leading-tight sm:text-[30px] sm:my-5 lg:w-[600px] lg:leading-tight lg:py-10 sm:30px sm:leading-tight">
                        Design is not just what it looks like and how it feels
                        like. Design is how it works
                      </p>
                    </div>
                    <div className=" lg:flex justify-between ">
                      <img
                        src="/658a86b48b1487c1daf29d01_About Image 01.webp"
                        alt="About"
                        onError={(e) => {
                          e.currentTarget.style.display = "none";
                          e.curentTarget.enerror = null;
                        }}
                        className="w-[600px]"
                        loading=""
                        id="lazy-loading"
                      />
                      <div>
                        <div className="ssm:my-5 ssm:hidden">
                          <li>Our Philosophy</li>
                          <p className="lg:text-[40px] ssm:text-[20px] sm:text-[30px] sm:my-5 lg:w-[600px] lg:leading-tight lg:py-10 sm:30px sm:leading-tight">
                            Design is not just what it looks like and how it
                            feels like. Design is how it works
                          </p>
                        </div>
                        <div className="lg:flex lg:justify-end ssm:my-10">
                          <img
                            src="/658a86b4a496f897ff02b5a5_About Image 02.webp"
                            alt="About"
                            onError={(e) => {
                              e.currentTarget.style.display = "none";
                              e.curentTarget.enerror = null;
                            }}
                            className="w-[500px] lg:relative lg:top-40"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
                <article className="lg:mx-10 sm:mx-3 lg:py-[100px] sm:my-[100px] ssm:my-[50px] ssm:px-3">
                  <div className="lg:flex lg:justify-between ">
                    <div id="left-content">
                      <li>Our People </li>
                      <div className="lg:my-10 ssm:my-5 sm:my-5">
                        <p className="lg:text-[40px] lg:w-[500px] leading-none sm:text-[30px]">
                          In order to generate innovative soluions, deducation
                          alone is not enough
                        </p>
                        <button className="text-[17px] border bg-white w-[130px] h-[40px] hover:bg-black hover:text-white lg:my-10 ssm:my-5 sm:my-5">
                          Join our team
                        </button>
                      </div>
                    </div>
                    <div className="" id="right-content">
                      <div className="lg:grid lg:grid-cols-2 lg:gap-5 sm:grid sm:grid-cols-2 ssm:flex-row ssm:space-y-5 ssm:mb-20 sm:gap-5">
                        <div>
                          <img
                            src="/658a8aa21119417045808dbe_Our team Image 4.webp"
                            alt="About"
                            onError={(e) => {
                              e.currentTarget.style.display = "none";
                              e.curentTarget.enerror = null;
                            }}
                          />
                          <div>
                            <p className="text-[20px]">Ethan Davis</p>
                            <p className="text-gray-500">Founder/CEO</p>
                          </div>
                        </div>

                        <div>
                          <img
                            src="/658a8aa2f1b468de2a394822_Our team Image 5.webp"
                            alt=""
                            onError={(e) => {
                              e.currentTarget.style.display = "none";
                              e.curentTarget.enerror = null;
                            }}
                          />
                          <div>
                            <p className="text-[20px]">Ava Wilson</p>
                            <p className="text-gray-500">CFO</p>
                          </div>
                        </div>
                        <div>
                          <img
                            src="/658a8aa21a3e4e63dfed8f3d_Our team Image 1.webp"
                            alt=""
                            onError={(e) => {
                              e.currentTarget.style.display = "none";
                              e.curentTarget.enerror = null;
                            }}
                          />
                          <div>
                            <p className="text-[20px]">James Bond</p>
                            <p className="text-gray-500">Head of Design</p>
                          </div>
                        </div>
                        <div>
                          <img
                            src="/658a8aa2ecbc3a7acd46bcc0_Our team Image 3.webp"
                            alt=""
                            onError={(e) => {
                              e.currentTarget.style.display = "none";
                              e.curentTarget.enerror = null;
                            }}
                          />
                          <div>
                            <p className="text-[20px]">Christopher Smith</p>
                            <p className="text-gray-500">Creative Director</p>
                          </div>
                        </div>
                        <div>
                          <img
                            src="/658a8aa29146276e6d297a36_Our team Image 6.webp"
                            alt=""
                            onError={(e) => {
                              e.currentTarget.style.display = "none";
                              e.curentTarget.enerror = null;
                            }}
                          />
                          <div>
                            <p className="text-[20px]">Chandler Riggs</p>
                            <p className="text-gray-500">CTO</p>
                          </div>
                        </div>
                        <div>
                          <img
                            src="/658a8aa21119417045808db7_Our team Image 2.webp"
                            alt=""
                            onError={(e) => {
                              e.currentTarget.style.display = "none";
                              e.curentTarget.enerror = null;
                            }}
                          />
                          <div>
                            <p className="text-[20px]">Isabella Rodriguez</p>
                            <p className="text-gray-500">HR Manager</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
                <footer>
                  <Footer />
                </footer>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
