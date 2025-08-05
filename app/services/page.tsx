"use client";

import Link from "next/link";
import { motion } from "motion/react";
import Container from "@/components/Container";
import { ArrowDownRight } from "lucide-react";

const services = [
  {
    num: "01",
    title: "Web Development",
    desciption:
      "Highly skilled and detail-oriented Web Developer with expertise in building modern, responsive, and user-friendly web applications. Proficient in front-end technologies such as HTML, CSS, JavaScript, Tailwind CSS, and frameworks like React.js and Next.js. Experienced in leveraging shadcn for building accessible and customizable UI components. Passionate about creating seamless user experiences and optimizing web performance.",
    href: "",
  },
  {
    num: "02",
    title: "Frontend",
    desciption:
      "Creative and detail-oriented Frontend Developer with a strong foundation in building modern, responsive, and user-centric web applications. Proficient in HTML, CSS, JavaScript, and modern frameworks like React.js and Next.js. Skilled in using Tailwind CSS for rapid UI development and shadcn for building accessible and customizable components. Passionate about creating seamless user experiences, optimizing performance, and writing clean, maintainable code.",
    href: "",
  },
  {
    num: "03",
    title: "APIs Integration",
    desciption:
      "Experienced Web Developer proficient in API integration, HTML, CSS, JavaScript, Tailwind CSS, React.js, and Next.js. Skilled in building responsive, user-friendly web applications and leveraging shadcn for accessible, customizable UI components. Passionate about optimizing performance and delivering seamless user experiences.",
    href: "",
  },
  {
    num: "04",
    title: "Version Control",
    desciption:
      "Experienced Web Developer with expertise in version control and API integration. Proficient in HTML, CSS, JavaScript, Tailwind CSS, React.js, and Next.js. Skilled in merging code changes using Git, resolving conflicts, and ensuring smooth collaboration. Experienced in leveraging shadcn for building accessible, customizable UI components while optimizing web performance. Passionate about creating seamless user experiences and maintaining code integrity",
    href: "",
  },
];
const servicesPage = () => {
  return (
    <div className="bg-bodyColor text-white/80">
      <Container className="min-h-[80px flex flex-col justify-center py-12 xl:py-0] ">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
            }}
            className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
          >
            {services.map((service, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-1 flex-col justify-center gap-6 group"
                >
                  <div className="w-full flex justify-between items-center">
                    <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                      {service.num}
                    </div>
                    <Link
                      href={service.href}
                      className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-hoverColor transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                    >
                      <ArrowDownRight className="text-primary text-3xl" />
                    </Link>
                  </div>
                  <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-lightSky transition-all duration-500">
                    {service.title}
                  </h2>
                  <p className="text-white/60">{service.desciption}</p>
                  <div className="border-b border-white/20 w-full"></div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </Container>
    </div>
  );
};

export default servicesPage;
