import Navbar from "./Navbar";
import Footer from "./Footer";
export default function Contact() {
  return (
    <>
      <section>
        <header>
          <Navbar />
        </header>
        <article className="lg:mx-10 sm:mx-3 my-[50px] ssm:mx-3">
          <div className="lg:flex  lg:justify-between">
            <div>
              <p className="lg:text-[80px] sm:text-[60px] ssm:text-[35px] ssm:mb-5 sm:mb-20">
                Contact
              </p>
              <div className=" leading-loose ">
                <p className="text-gray-500">
                  Address <br />
                </p>
                <p>
                  14 Rivinton Street New York 3CA <br />
                  Hello@save.design <br />
                  +1(555) 123-4567
                </p>
                <div className="lg:my-10 sm:mt-10">
                  <div className="ssm:my-5">
                    <ul className="">
                      <li className="text-gray-500">Social</li>
                      <li>
                        <a
                          href="https://www.facebook.com/"
                          className="hover:text-gray-500"
                        >
                          Facebook
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.instagram.com/"
                          className="hover:text-gray-500"
                        >
                          Instagram
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.youtube.com/"
                          className="hover:text-gray-500"
                        >
                          Youtube
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.linkedin.com/login"
                          className="hover:text-gray-500"
                        >
                          LinkedIn
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://twitter.com/?lang=en"
                          className="hover:text-gray-500"
                        >
                          Twitter
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div>
                <p className="lg:text-[40px] ssm:text-[25px] ssm:leading-tight lg:w-[850px] sm:text-[30px] sm:leading-tight sm:w-full sm:my-10">
                  Reach out to us if you have a project request or want to get
                  started
                </p>
                <div>
                  <form action="/submit" className="">
                    <input
                      type="text"
                      name="FullName"
                      placeholder="Your Name"
                      className=" bg-gray-100 lg:w-[850px] h-[50px] px-2 sm:w-full ssm:w-full ssm:my-2"
                    />
                    <br />
                    <input
                      type="email"
                      name="Email"
                      placeholder="Your Email"
                      className=" bg-gray-100 lg:w-[850px] h-[50px] px-2 lg:my-[10px] sm:mt-5 sm:w-full ssm:w-full ssm:my-2"
                    />
                    <br />
                    <textarea
                      type=""
                      name="Text"
                      placeholder="Example Text"
                      className="lg:w-[850px] bg-gray-100 px-2 lg:h-[100px] sm:mt-5 sm:w-full sm:h-[100px] ssm:w-full ssm:my-2 ssm:h-[100px]"
                    />
                    <br />
                    <button className="border ml-10 px-3 py-2 sm:my-10 relative -left-[40px] bg-black hover:bg-gray-700 text-white ">
                      <a
                        href="https://www.linkedin.com/in/richard-nyamekye-7b1380246"
                        className="text-lg "
                      >
                        Send Message
                      </a>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </article>
        <footer>
          <Footer />
        </footer>
      </section>
    </>
  );
}
