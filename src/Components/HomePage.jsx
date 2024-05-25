import { Link } from "react-router-dom";
import Footer from "./Footer";
import "../App.css";
import VideoBg from "/657a92c5853502406ce98743_Hero Video-transcode.mp4";
function HomePage() {
  return (
    <>
      <section className="overflow-hidden">
        <header className="relative w-full h-screen">
          <div className="absolute w-full h-full text-container">
            <video
              src={VideoBg}
              autoPlay
              loop
              muted
              className="absolute inset-0 object-cover w-full h-full -z-10"
              id="videoBg"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.5)]"></div>
            <div
              className="min-h-screen md:min-h-80 top-0 w-full text-white text-content"
              id="header-wrapper"
            >
              <nav className=" border-b ">
                <div className="flex flex-wrap items-center justify-between lg:mr-5 sm:mr-0  bg-transparent backdrop-blur-md">
                  <div className="flex">
                    <div className=" w-30 ">
                      <Link to="/home">
                        <img
                          src="/65829a678cfe02fa36ac499b_Logo-Black.svg"
                          alt="Logo"
                          onError={(e) => {
                            e.currentTarget.style.display = "none";
                            e.curentTarget.enerror = null;
                          }}
                          className="p-5 bg-white w-[100px]"
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
                    <ul className="flex mt-2 lg:gap-6 md:gap-4 sm:gap-5 ssm:gap-0">
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
                  <div className="sm:hidden lg:hidden">
                    <button className="ssm:mr-5 font-medium lg:hidden md:hidden sm:hidden">
                      Menu
                    </button>
                  </div>
                </div>
              </nav>

              <div className="grid grid-rows-2 sm:px-3 ssm:px-3 relative lg:-bottom-[350px] sm:-bottom-[200px] ssm:-bottom-[170px] md:mx-5 ssm:space-y-10">
                <div className="lg:flex justify-between md:flex sm:inline-block  lg:ml-5 ssm:space-y-5 ">
                  <div className="">
                    <h1 className="lg:text-[90px] md:text-[50px] ssm:text-[33px] ssm:leading-9 sm:text-[60px] sm:leading-none lg:w-[800px] sm:relative ssm:top-0 sm:top-10">
                      Digital Embodiment of Brand Empathy
                    </h1>
                  </div>
                  <div>
                    <p className="lg:w-[500px] mr-5 md:w-[500px] sm:text-[17px] text-gray-300 sm:w-full ssm:text-[14px] lg:text-[20px] ssm:leading-5 relative ssm:top-0 lg:top-20 sm:mt-12">
                      With our combination of creativity, strategic thinking,
                      and technical expertise, we are confident in our ability
                      to deliver exceptional branding and website solutions that
                      will elevate your business to new heights
                    </p>
                  </div>
                </div>
                <div className="lg:flex sm:grid sm:grid-cols-2 sm:gap-0 md:grid  justify-around gap-[20px] ssm:grid ssm:grid-cols-2 ssm:gap-1 sm:relative top-28  ssm:mt-2">
                  <div className="lg:flex sm:inline-block lg:space-x-5 ">
                    <div className="relative border-t border-l border-r text-center sm:mb-5 lg:w-[350px] md:w-[300px] sm:w-[200px] ssm:w-[150px] lg:h-[40px] ssm:h-[32px] content-center  border-gray-400">
                      Brand Design <sup>01</sup>
                    </div>
                    <div className="relative border-t border-l border-r text-center lg:w-[350px] sm:w-[200px] ssm:w-[150px] md:w-[300px] lg:h-[40px] ssm:h-[32px] content-center  border-gray-400">
                      Website Design <sup>02</sup>
                    </div>
                  </div>
                  <div className="lg:flex lg:space-x-5 ">
                    <div className="relative border-t border-l border-r sm:mb-5 text-center lg:w-[350px] sm:w-[200px] ssm:w-[150px] lg:h-[40px] ssm:h-[32px] md:w-[300px] content-center  border-gray-400">
                      Product Design <sup>03</sup>
                    </div>
                    <div className="relative border-t border-l border-r text-center lg:w-[350px] sm:w-[200px] ssm:w-[150px] lg:h-[40px] ssm:h-[32px] md:w-[300px] content-center  border-gray-400">
                      AR/VR Design <sup>04</sup>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        <article className="about">
          <div className="mb-[100px]">
            <div className="lg:flex md:inline-block sm:inline-block justify-between mx-5 my-20">
              <div>
                <li className="lg:ml-5 sm:mb-10">About</li>
              </div>
              <div className="lg:w-[800px] md:w-[600px] sm:w-full  lg:text-[40px] sm:text-[30px] leading-none">
                <p className="mb-20">
                  We are a team of passionate and crazy individuals dedicated to
                  bringing your ideas to life. With a keen eye for aesthetics,
                  attention to detail, and a deep understanding of design
                  principles, we strive to deliver exceptional results that
                  exceed your expectations
                </p>
                <img
                  src="/6583f7931e891cc8ba8b5f94_About Image.png"
                  alt="About image"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                    e.curentTarget.enerror = null;
                  }}
                  className="sm:w-full object-cover"
                />
              </div>
            </div>
            <div className="lg:flex justify-around md:drid sm:grid sm:grid-cols-2 sm:grid-rows-2 sm:mx-2 ssm:grid ssm:gap-10 sm:gap-y-5">
              <div className="border-t border-r border-l border-gray-300 lg:w-[350px] lg:h-[170px] md:h-[170px] md:w-[350px] sm:w-[220px] sm:">
                <p className="ml-5 text-[90px]">
                  10
                  <sup className="text-[17px] relative -top-12 -right-1">
                    Year
                  </sup>
                </p>
                <p className="ml-8 text-gray-500">
                  In the digital product design industry
                </p>
              </div>
              <div className="border-t border-r border-l border-gray-300 lg:w-[350px] lg:h-[170px] md:h-[170px] md:w-[350px] sm:w-[220px] ">
                <p className="ml-5">
                  <span className="text-[90px]"> 12</span>
                  <sup className="text-[17px] relative -top-12 -right-1">
                    Country
                  </sup>
                </p>
                <p className=" ml-10 text-gray-500">
                  Work across arouond the world
                </p>
              </div>
              <div className="border-t border-r border-l border-gray-300 lg:w-[350px] lg:h-[170px] md:h-[170px] md:w-[350px] sm:w-[220px] sm:">
                <p className="ml-10">
                  <span className="text-[90px]"> 61+ </span>
                  <sup className="text-[17px] relative sm:-top-32 sm:-right-28 md:-top-12 md:-right-1 lg:-top-12 lg:-right-1">
                    Projects
                  </sup>
                </p>
                <p className=" ml-12 text-gray-500">
                  With satisfaction from customers
                </p>
              </div>
              <div className="border-t border-r border-l border-gray-300 lg:w-[350px] lg:h-[170px] md:h-[170px] md:w-[350px] sm:w-[220px] sm:">
                <p className="ml-10">
                  <span className="text-[90px]"> 31+ </span>
                  <sup className="text-[17px] sm:relative sm:-top-16 sm:-left-10 ">
                    People
                  </sup>
                </p>
                <p className=" ml-10 text-gray-500">Talent on the team</p>
              </div>
            </div>
          </div>
        </article>
        <article className="bg-gray-100">
          <div className="py-[100px] ssm:leading-8">
            <div className="lg:flex justify-between mx-3 sm:inline-block md:inline-block">
              <div className="pt-2 sm:pb-[20px]">
                <li>Our Service</li>
              </div>
              <div className="lg:text-[40px] md:text-[] sm:text-[30px]  text-wrap lg:w-[900px] md:w-[600px] sm:w-full">
                We create business value from strategy to perfect execution
                <div>
                  <button className="text-[17px] border bg-white w-[130px] h-[40px] hover:bg-black hover:text-white">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="ssm:mx-3">
            <div className="lg:flex justify-between lg:mx-10 sm:mx-3 ssm:pt-5 pb-20">
              <p className="lg:text-[80px] md:text-[50px] sm:text-[50px] ssm:text-[30px]">
                Brand Design
                <sup className="text-[17px] relative lg:-top-12 md:-top-12 sm:-top-10">
                  (01)
                </sup>
              </p>
              <div className="lg:w-[500px] sm:w-full text-gray-500 content-center">
                Good brand design the visual representation and identity of a
                brand that communicates its values, personality, and purpose to
                its target audience
              </div>
            </div>
            <hr />
            <div className="lg:flex justify-between lg:mx-10 sm:mx-3 pb-20 ssm:pt-5">
              <p className="lg:text-[80px] md:text-[50px] sm:text-[50px] ssm:text-[30px]">
                Web Design
                <sup className="text-[17px] relative lg:-top-12 md:-top-12 sm:-top-10">
                  (02)
                </sup>
              </p>
              <div className="lg:w-[500px] sm:w-full text-gray-500 content-center">
                Good brand design the visual representation and identity of a
                brand that communicates its values, personality, and purpose to
                its target audience
              </div>
            </div>
            <hr />
            <div className="lg:flex justify-between lg:mx-10 sm:mx-3 pb-20 ssm:pt-5">
              <p className="lg:text-[80px] md:text-[50px] sm:text-[50px] ssm:text-[30px]">
                Product Design
                <sup className="text-[17px] relative lg:-top-12 md:-top-12 sm:-top-10">
                  (03)
                </sup>
              </p>
              <div className="lg:w-[500px] sm:w-full text-gray-500 content-center ">
                Good brand design the visual representation and identity of a
                brand that communicates its values, personality, and purpose to
                its target audience
              </div>
            </div>
            <hr />
            <div className="lg:flex justify-between lg:mx-10 sm:mx-3 pb-20 ssm:pt-5">
              <p className="lg:text-[80px] md:text-[50px] sm:text-[50px] ssm:text-[30px]">
                AR/VR Design
                <sup className="text-[17px] relative lg:-top-12 md:-top-12 sm:-top-10">
                  (04)
                </sup>
              </p>
              <div className="lg:w-[500px] sm:w-full text-gray-500 content-center">
                Good brand design the visual representation and identity of a
                brand that communicates its values, personality, and purpose to
                its target audience
              </div>
            </div>
          </div>
        </article>
        <article className="ssm:mx-3">
          <div className="sm:mx-3 lg:mx-10 my-20">
            <div className="lg:flex md:inline-block sm:inline-block justify-between">
              <div className="lg:w-[500px] ssm:my-10">
                <li>Featured Work</li>
                <p className="lg:text-[40px] ssm:text-[30px] md:text-[40px] sm:text-[30px] mb-2 leading-tight sm:my-10 md:my-10 lg:my-0">
                  We create business value from strategy to perfect execution
                </p>
                <button className="text-[17px] border bg-white w-[130px] h-[40px] hover:bg-black hover:text-white">
                  View Details
                </button>
              </div>
              <div className="transition-transform duration-500 ease-in-out hover:scale-105">
                <img
                  src="/658472fa9fe7f79bf921b64e_Rectangle 8.webp"
                  alt="Seven Studios"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                    e.curentTarget.enerror = null;
                  }}
                  className="sm:w-full lg:w-[800px] "
                />
                <button className="w-full flex justify-between border-t border-l border-r h-10 items-center mt-2">
                  <p className="text-[20px] ml-2">Seven Studio</p>
                  <p className="text-[17px] mr-2 text-gray-500">Web design</p>
                </button>
              </div>
            </div>
          </div>
          <div>
            <div className="lg:mx-10 sm:mx-3 lg:flex md:inline-block sm:grid sm:gap-10 ssm:grid ssm:gap-5 justify-between lg:my-20">
              <div className="transition-transform duration-500 ease-in-out hover:scale-105 sm:my-10">
                <img
                  src="/public/658473293ec27e448602dce7_Rectangle 9.webp"
                  alt="Sunny"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                    e.curentTarget.enerror = null;
                  }}
                  className="lg:w-[700px] md:w-[500px] sm:full "
                />
                <button className="w-full flex justify-between border-t border-l border-r h-10 items-center mt-2">
                  <p className="text-[20px] ml-2">Sunny</p>
                  <p className="text-[17px] mr-2 text-gray-500">Branding</p>
                </button>
              </div>
              <div className="transition-transform duration-500 ease-in-out hover:scale-105">
                <img
                  src="/6584733feaee898abba10427_Rectangle 10.webp"
                  alt="Sunny"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                    e.curentTarget.enerror = null;
                  }}
                  className="lg:w-[700px] md:w-[500px] sm:full "
                />
                <button className="w-full flex justify-between border-t border-l border-r h-10 items-center mt-2">
                  <p className="text-[20px] ml-2">Noah</p>
                  <p className="text-[17px] mr-2 text-gray-500">Branding</p>
                </button>
              </div>
            </div>
          </div>
        </article>
        <article className=" bg-gray-100 ssm:px-3 ssm:py-20">
          <div>
            <div className="lg:h-[300px] content-center lg:mx-10 lg:my-20 sm:my-20">
              <div id="scroll-container" className=" whitespace-nowrap">
                <p
                  id="scroll-text"
                  className="inline-block lg:text-[230px] ssm:my-10 md:text-[100px] sm:text-[90px] ssm:text-[90px] font-meduim ml-[550px]"
                >
                  Trusted by the best
                </p>
              </div>
            </div>
            <div className="lg:mx-10 sm:mx-3 sm:pb-20">
              <div className="lg:flex md:inline-block sm:inline-block justify-between">
                <div className="sm:mb-10 ssm:my-5">
                  <li>Featured Partner</li>
                </div>
                <div className="lg:flex md:flex-wrap sm:grid sm:grid-cols-3 ssm:grid ssm:grid-cols-2 gap-2 ssm:my-10">
                  <div className="flex items-center gap-2 border p-1 lg:w-fit sm:w-fit ssm:w-fit ssm:px-3 sm:pr-3 rounded-[50px] bg-white">
                    <img
                      src="../../public/65844df68b3a53a86724ba3e_logo 6.png"
                      alt="JBA Agency"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                        e.curentTarget.enerror = null;
                      }}
                      className="w-[40px]"
                    />
                    <p className="lg:text-[15px] ">JBA Agency</p>
                  </div>
                  <div className="flex items-center gap-2 border p-1 lg:w-fit sm:w-fit sm:pr-3 ssm:w-fit ssm:px-3 rounded-[50px] bg-white">
                    <img
                      src="../../public/65844df626ba8bc52abe1269_logo 3.png"
                      alt="JBA Agency"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                        e.curentTarget.enerror = null;
                      }}
                      className="w-[40px]"
                    />
                    <p className="text-20px">Sun Ent</p>
                  </div>
                  <div className="flex items-center gap-2 border p-1 lg:w-fit sm:w-fit sm:pr-3 rounded-[50px] ssm:w-fit ssm:px-3 bg-white">
                    <img
                      src="../../public/65844df625537a92e2253465_logo 2.png"
                      alt="JBA Agency"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                        e.curentTarget.enerror = null;
                      }}
                      className="w-[40px]"
                    />
                    <p className="text-20px">Liquid Group</p>
                  </div>
                  <div className="flex items-center gap-2 border p-1 lg:w-fit sm:w-fit sm:pr-3 rounded-[50px] ssm:w-fit ssm:px-3 bg-white">
                    <img
                      src="../../public/65844df60348e6f4ef8a0fb8_logo 1.png"
                      alt="JBA Agency"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                        e.curentTarget.enerror = null;
                      }}
                      className="w-[40px]"
                    />
                    <p className="text-20px">Mono</p>
                  </div>
                  <div className="flex items-center gap-2 border p-1 lg:w-fit sm:w-fit sm:pr-3 rounded-[50px] ssm:w-fit ssm:px-3 bg-white">
                    <img
                      src="../../public/65844df6356e9a37758b2d7a_logo 4.png"
                      alt="JBA Agency"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                        e.curentTarget.enerror = null;
                      }}
                      className="w-[40px]"
                    />
                    <p className="text-20px">Reddot</p>
                  </div>
                  <div className="flex items-center gap-2 border p-1 lg:w-fit sm:w-fit sm:pr-3 ssm:w-fit ssm:px-3 rounded-[50px] bg-white">
                    <img
                      src="../../public/65844df678f0abc36c942197_logo 5.png"
                      alt="JBA Agency"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                        e.curentTarget.enerror = null;
                      }}
                      className="w-[40px]"
                    />
                    <p className="text-20px">Webflow</p>
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <div>
              <div className="sm:mx-3 lg:mx-10 lg:flex lg:justify-between lg:gap">
                <div>
                  <div className="sm:my-5">
                    <li className="mt-3">What people say</li>
                  </div>
                  <div className="ssm:leading-7 my-5 ">
                    <p className="sm:text-[30px] ssm:mb-5 ssm:text-[20px] lg:text-[45px] sm:leading-tight sm:my-10">
                      Working with Save Agency was an absolute delight! They
                      listened to our requirements and turned our vision into a
                      stunning reality. The attention to detail and creativity
                      in their designs truly set them apart. We couldn't be
                      happier with the outcome
                    </p>
                    <div className="flex gap-3 sm:my-10">
                      <img
                        src="../../public/658454f8272db29b183ba20f_Testimonial Logo 1.png"
                        alt="Chandler Riggs"
                        onError={(e) => {
                          e.currentTarget.style.display = "none";
                          e.curentTarget.enerror = null;
                        }}
                        className="w-[45px]"
                      />
                      <div className="leading-tight">
                        <p>Chandler Riggs</p>
                        <p className="text-gray-500">CEO, Xebex</p>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="leading-7 my-5">
                    <p className="sm:text-[30px] sm:leading-tight sm:my-10 ssm:mb-5 ssm:text-[20px]">
                      Save Design Agency has completely transformed our brand
                      identity. Their creative team understood our vision and
                      delivered a visually stunning and cohesive design that
                      perfectly represents our company's values. We couldn't be
                      happier with the results
                    </p>
                    <div className="flex gap-3 sm:my-10">
                      <img
                        src="../../public/658454f86a180961c9b17a76_Testimonial Logo 2.png"
                        alt="Will Still"
                        onError={(e) => {
                          e.currentTarget.style.display = "none";
                          e.curentTarget.enerror = null;
                        }}
                        className="w-[45px]"
                      />
                      <div className="leading-tight">
                        <p>Will Still</p>
                        <p className="text-gray-500">Head of Design, Mbitous</p>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className=" leading-7 my-5">
                    <p className="sm:text-[30px] ssm:mb-5 ssm:text-[20px] sm:leading-tight sm:my-10">
                      Working with Save Design Agency was a breeze. Their team
                      was professional, responsive, and attentive to our needs.
                      They took the time to understand our target audience and
                      delivered a design that exceeded our expectations. We
                      highly recommend their services!
                    </p>
                    <div className="flex gap-3 sm:my-10">
                      <img
                        src="../../public/658454f73090ee5eab704de7_Testimonial Logo 3.png"
                        alt="Sunny Park"
                        onError={(e) => {
                          e.currentTarget.style.display = "none";
                          e.curentTarget.enerror = null;
                        }}
                        className="w-[45px]"
                      />
                      <div className="leading-tight">
                        <p>Sunny Park</p>
                        <p className="text-gray-500">
                          Senior Designer, Lunatic
                        </p>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className=" leading-7 my-5">
                    <p className="sm:text-[30px] ssm:mb-5 ssm:text-[20px] sm:leading-tight sm:my-10">
                      Their designers have a keen eye for detail and created a
                      user-friendly interface that truly reflects our brand. We
                      are already seeing an increase in traffic and engagement.
                    </p>
                    <div className="flex gap-3 sm:my-10">
                      <img
                        src="../../public/658bef221229fc44f99799c7_Testimonial Logo 4.png"
                        alt="Chandler Riggs"
                        onError={(e) => {
                          e.currentTarget.style.display = "none";
                          e.curentTarget.enerror = null;
                        }}
                        className="w-[45px]"
                      />
                      <div className="leading-tight">
                        <p>Leo Nguyen</p>
                        <p className="text-gray-500">CTO, Entertainment</p>
                      </div>
                    </div>
                  </div>
                  <hr />
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

export default HomePage;
