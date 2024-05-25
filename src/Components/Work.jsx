import Navbar from "./Navbar";
import Footer from "./Footer";
export default function Work() {
  return (
    <>
      <section>
        <div>
          <Navbar />
          <article className="lg:my-20 sm:my-5 ssm:my-5 lg:px-10 sm:px-3 ssm:px-3 ">
            <div>
              <div>
                <p className="lg:text-[80px] sm:text-[60px] sm:mb-20 ssm:mb-20 ssm:text-[35px]">
                  Work
                </p>
              </div>
              <div className="lg:flex sm:inline-block lg:justify-between">
                <div>
                  <li>Case Studies</li>
                </div>
                <div>
                  <p className="lg:text-[40px] lg:w-[850px] sm:text-[30px] ssm:text-[24px] ssm:my-10 ssm:leading-7 sm:leading-tight sm:w-full sm:mt-5">
                    We use holistic design approach to tell brand stories,
                    resonate with values, and create memorable impressions
                  </p>
                </div>
              </div>
            </div>
          </article>
        </div>
        <article className="sm:mb-10 ssm:mb-10">
          <div>
            <div className="lg:mx-10 sm:mx-3 ssm:mx-3 ssm:space-y-8 lg:grid lg:grid-cols-2 lg:gap-10 md:inline-block sm:inline-block justify-between lg:my-20 ">
              <div className="transition-transform duration-500 ease-in-out hover:scale-105 sm:mb-10">
                <img
                  src="../../public/658472fa9fe7f79bf921b64e_Rectangle 8.webp"
                  alt="Sunny"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                    e.curentTarget.enerror = null;
                  }}
                  className="lg:w-[700px] md:w-[500px] sm:w-full ssm:w-full"
                />
                <button className="w-full flex justify-between border-t border-l border-r h-10 items-center mt-2">
                  <p className="text-[20px] ml-2">Seven Studio</p>
                  <p className="lg:text-[17px] mr-2 text-gray-500">
                    Web Design
                  </p>
                </button>
              </div>
              <div className="transition-transform duration-500 ease-in-out hover:scale-105 sm:mb-10">
                <img
                  src="../../public/658473293ec27e448602dce7_Rectangle 9.webp"
                  alt="Sunny"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                    e.curentTarget.enerror = null;
                  }}
                  className="lg:w-[700px] md:w-[500px] sm:full "
                />
                <button className="w-full flex justify-between border-t border-l border-r h-10 items-center mt-2">
                  <p className="text-[20px] ml-2">Sunny</p>
                  <p className="lg:text-[17px] mr-2 text-gray-500">Branding</p>
                </button>
              </div>

              <div className="transition-transform duration-500 ease-in-out hover:scale-105 sm:mb-10">
                <img
                  src="../../public/6584733feaee898abba10427_Rectangle 10.webp"
                  alt="Sunny"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                    e.curentTarget.enerror = null;
                  }}
                  className="lg:w-[700px] md:w-[500px] sm:full "
                />
                <button className="w-full flex justify-between border-t border-l border-r h-10 items-center mt-2">
                  <p className="text-[20px] ml-2">Noah</p>
                  <p className="lg:text-[17px] mr-2 text-gray-500">Branding</p>
                </button>
              </div>
              <div className="transition-transform duration-500 ease-in-out hover:scale-105 sm:mb-5">
                <img
                  src="../../public/658af3fa4ad6601ebdb65c07_Thumb 4.webp"
                  alt="Sunny"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                    e.curentTarget.enerror = null;
                  }}
                  className="lg:w-[700px] md:w-[500px] sm:full "
                />
                <button className="w-full flex justify-between border-t border-l border-r h-10 items-center mt-2">
                  <p className="text-[20px] ml-2">Ronan</p>
                  <p className="lg:text-[17px] mr-2 text-gray-500">
                    Web Design
                  </p>
                </button>
              </div>
            </div>
          </div>
        </article>
        <footer className="ssm:mt-10">
          <Footer />
        </footer>
      </section>
    </>
  );
}
