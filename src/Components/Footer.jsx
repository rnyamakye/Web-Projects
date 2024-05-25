import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <>
      <footer className="bg-black text-white sm:px-3 py-10 ssm:px-3">
        <div>
          <div className="lg:flex lg:justify-around lg:items-center">
            <img
              src="/65847d8cf5bdf9297445eb77_Logo-White.png"
              alt=""
              onError={(e) => {
                e.currentTarget.style.display = "none";
                e.curentTarget.enerror = null;
              }}
              className="w-[60px] sm:py-5 lg:relative sm:-left-56 "
            />
            <div className="sm:my-5 ssm:my-5 ssm:mb-8 ssm:leading-tight">
              <p className="sm:text-[30px] ssm:text-[25px]">
                We would love to hear from you
              </p>
              <p className="text-gray-400 block sm:text-[30px] ssm:text-[25px]">
                hello@save.design
              </p>
            </div>
          </div>
          <hr />
          <div className="sm:grid ssm:grid-cols-2 ssm:grid sm:grid-cols-2 sm:gap-10 lg:flex lg:justify-around sm:text-[17px] sm:pt-10 ssm:pt-10">
            <div>
              <ul className="text-gray-400">
                <li className="text-white">Page</li>
                <Link to="/">
                  <li className="hover:text-white">Home</li>
                </Link>
                <Link to="/about">
                  <li className="hover:text-white">About</li>
                </Link>
                <Link to="/work">
                  <li className="hover:text-white">Work</li>
                </Link>
                <Link to="/contact">
                  <li className="hover:text-white">Contact</li>
                </Link>
              </ul>
            </div>
            <div>
              <ul className="text-gray-400">
                <li className="text-white">Social</li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/richard-nyamekye-7b1380246"
                    className="hover:text-white"
                  >
                    Facebook
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/richard-nyamekye-7b1380246"
                    className="hover:text-white"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="" className="hover:text-white">
                    Youtube
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/richard-nyamekye-7b1380246"
                    className="hover:text-white"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/richard-nyamekye-7b1380246"
                    className="hover:text-white"
                  >
                    Twitter
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <ul className="text-gray-400">
                <li className="text-white hover:text-white">Info</li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/richard-nyamekye-7b1380246"
                    className="hover:text-white"
                  >
                    Style Guide
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/richard-nyamekye-7b1380246"
                    className="hover:text-white"
                  >
                    Changelog
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/richard-nyamekye-7b1380246"
                    className="hover:text-white"
                  >
                    Licenses
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/richard-nyamekye-7b1380246"
                    className="hover:text-white"
                  >
                    Webflow
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="sm:py-5 lg:mx-40 lg:py-20 ssm:py-10 text-gray-400">
          <p className=" ">
            <a
              href="#"
              className="
                flex lg:relative lg:-left-36 "
            >
              <span>
                <img
                  src="/65847f38138ef2ac95148aba_Up-Arrow.svg"
                  alt="Home"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                    e.curentTarget.enerror = null;
                  }}
                  className="w-[15px] relative top-1 "
                />
              </span>
              Back to top
            </a>
          </p>
        </div>
        <div className="lg:text-center ssm:mt-10 text-wrap text-gray-400">
          <p>&#169; 2023 Save Agency. All Rights Reserved.</p>
        </div>
      </footer>
    </>
  );
}
