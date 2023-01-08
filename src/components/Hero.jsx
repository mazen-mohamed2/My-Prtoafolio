import { content } from "../Content";
const Hero = () => {
  const { hero } = content;

  return (
    <section id="home" className="overflow-hidden">
      <div className="min-h-screen relative flex md:flex-row flex-col-reverse md:items-end justify-center items-center">
        <div
          data-aos="slide-left"
          data-aos-delay="1200"
          className="absolute h-full md:w-4/12 w-8/12 top-0 right-0 bg-primaryLinear bottom-0 -z-10"
        >
          <h1 className="md:rotate-90 md:absolute md:top-[35%] md:right-[-15%] md:font-normal  text-[#EAF2FA]">
            {hero.firstName}{" "}
            <span className="text-dark_primary">{hero.LastName}</span>
          </h1>
        </div>

        {/* first col */}
        <div className=" absolute pb-16 px-6 pt-5 lg:left-36" data-aos="fade-down">
          <h2>{hero.title}</h2>
          <br />
          <div className="flex justify-end">
          <a href="https://drive.google.com/file/d/1Me1YjNIwBCWo9MITemRwKyEocLhhqeto/view?usp=drivesdk" target="_blank">  <button className="btn">{hero.btnText}</button></a>
          </div>
          <div className="flex flex-col gap-10 mt-10">
            {hero.hero_content.map((content, i) => (
              <div
                key={i}
                data-aos="fade-down"
                data-aos-delay={i * 300}
                className={`flex items-center w-80 gap-5
            ${i === 1 && " flex-row-reverse text-right"}  `}
              >
                <h3>{content.count}</h3>
                <p>{content.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* sec col */}
       
      </div>
    </section>
  );
};

export default Hero;
