import Navbar from "./Navbar";
import Footer from "./Footer";
import "../App.css";

export default function About() {
  return (
    <>
      <section className="">
        <header className="">
          <Navbar />
          <div className="lg:mx-10 sm:mx-3 ssm:mx-3">
            <p className="lg:text-[90px] sm:text-[45px] ssm:text-[35px] lg:mt-20 sm:mt-5 ssm:mt-5">
              About
            </p>
            <div className="my-10 lg:flex justify-between">
              <li className="sm:py-5 ssm:py-6">The Vision</li>
              <div>
                <p className="lg:text-[40px] ssm:text-[24px] sm:text-[30px] sm:leading-none ssm:leading-7 lg:w-[900px] leading-tight">
                  We are an international production and creative agency. We
                  create ideas and turn them into digital products for better
                  brand communication with customers.
                </p>
              </div>
            </div>
          </div>
          <div className="lg:mx-10 sm:mx-3 ssm:mx-3">
            <img src="/6583f7931e891cc8ba8b5f94_About Image.png" alt="About" />
          </div>
        </header>
        <article className="lg:mx-10 py-[100px] sm:mx-3 ssm:mx-3 ">
          <div>
            <div className="lg:flex justify-between lg:py-[50px] ssm:mb-5">
              <li className="ssm:mb-5">Our value</li>

              <div className="lg:w-[900px] sm:w-full">
                <p className="lg:text-[40px] sm:text-[30px] ssm:text-[24px] ssm:leading-7 lg:leading-none sm:py-5">
                  Good design begins with honesty, asks tough questions, comes
                  from collaboration and from trusting your intuition
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
                    products, services, and experiences that are more inclusive,
                    user-centered, and meaningful.
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
                    products, services, and experiences that are more inclusive,
                    user-centered, and meaningful.
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
                    With rapidly evolving technologies and changing consumer
                    preferences, companies that prioritize design will have a
                    competitive edge in the market.
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
                Design is not just what it looks like and how it feels like.
                Design is how it works
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
                <div className="ssm:mb-5 ssm:hidden lg:block">
                  <li>Our Philosophy</li>
                  <p className="lg:text-[40px] ssm:text-[20px] sm:text-[30px] sm:my-5 lg:w-[600px] lg:leading-tight sm:30px sm:leading-tight">
                    Design is not just what it looks like and how it feels like.
                    Design is how it works
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
        <article className="lg:mx-10 sm:mx-3 lg:pt-[100px] sm:my-[100px] ssm:my-[50px] ssm:px-3 relative">
          <div className="lg:grid lg:grid-cols-2 lg:grid-rows-2 lg:justify-between relative ">
            <div className="lg:sticky lg:top-10">
              <li>Our People </li>
              <div className="lg:my-10 ssm:my-5 sm:my-5">
                <p className="lg:text-[40px] lg:w-[500px] leading-none sm:text-[30px] ssm:text-[25px]">
                  In order to generate innovative soluions, dedication alone is
                  not enough
                </p>
                <button className="text-[17px] border bg-white w-[130px] h-[40px] hover:bg-black hover:text-white lg:my-10 ssm:my-5 sm:my-5">
                  Join our team
                </button>
              </div>
            </div>
            <div className="">
              <div className="lg:grid lg:grid-cols-2 lg:gap-5 sm:grid sm:grid-cols-2 ssm:inline-block ssm:space-y-5 ssm:mb-20 sm:gap-5">
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

                <div className="lg:relative lg:bottom-5">
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
      </section>
    </>
  );
}
