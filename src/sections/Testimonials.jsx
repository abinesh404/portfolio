import { testimonials } from "../constants";
import TitleHeader from "../components/TitleHeader";
import GlowCard from "../components/GlowCard";

const Testimonials = () => {
  const education = testimonials.slice(0, 2);
  const certifications = testimonials.slice(2);

  return (
    <section id="education" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="My Educational Background"
          sub="🎓 Academic Journey"
        />

        <div className="lg:columns-2 md:columns-2 columns-1 mt-16">
          {education.map((testimonial, index) => (
            <GlowCard card={testimonial} key={`edu-${index}`} index={index}>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full flex justify-center items-center bg-black-600 overflow-hidden shrink-0 border border-black-400 p-2">
                  <img src={testimonial.imgPath} alt="" className="w-full h-full object-contain" />
                </div>
                <div>
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-white-50">{testimonial.mentions}</p>
                </div>
              </div>
            </GlowCard>
          ))}
        </div>

        <div className="flex items-center gap-5 my-10">
          <div className="flex-grow h-[1px] bg-black-400" />
          <h3 className="text-xl font-bold text-white-50 uppercase tracking-widest">Certifications</h3>
          <div className="flex-grow h-[1px] bg-black-400" />
        </div>

        <div className="lg:columns-3 md:columns-2 columns-1">
          {certifications.map((testimonial, index) => (
            <GlowCard card={testimonial} key={`cert-${index}`} index={index + 2}>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full flex justify-center items-center bg-black-600 overflow-hidden shrink-0 border border-black-400 p-2">
                  <img src={testimonial.imgPath} alt="" className="w-full h-full object-contain" />
                </div>
                <div>
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-white-50 text-sm">{testimonial.mentions}</p>
                </div>
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
