import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeIn } from "./varients";
import Image from "next/image";
import { mont_thin, raj, raj_bold } from "@/styles/fonts";
import { AnimatedText } from "./modules/AnimatedText";

function About() {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <section ref={ref} id="about" className="section">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 place-items-center gap-10">
          <div className="flex justify-center">
            <motion.img
              variants={fadeIn("down", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true }}
              src="/about2.jpeg"
              alt="img"
              className="h-[440px] rounded-xl mb-4"
            ></motion.img>
          </div>
          <div style={{ fontFamily: mont_thin.style.fontFamily }}>
            <motion.h2
              variants={fadeIn("up", 0.1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              style={{ fontFamily: raj.style.fontFamily }}
              className="uppercase gradText text-[50px] text-center"
            >
              <AnimatedText text="About Me" />
            </motion.h2>
            <motion.h3
              variants={fadeIn("up", 0.7)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="text-justify"
            >
              I am a freelance professional who provides customized solutions
              for clients across a range of softwares. With expertise in
              frontend development, I offer tailored services that meet the
              unique needs of each client.
            </motion.h3>
            <br />
            <motion.p
              variants={fadeIn("up", 0.9)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="text-justify"
            >
              I am well-versed in both front-end and back-end development, with
              a particular emphasis on building scalable and responsive websites
              using modern technologies.
            </motion.p>
            <br />
            <div className="mt-4">
              <div className="flex justify-around">
                <motion.div
                  variants={fadeIn("up", 1)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="text-xl lg:text-3xl gradText text-center"
                  style={{ fontFamily: raj_bold.style.fontFamily }}
                >
                  {inView ? (
                    <CountUp start={0} end={10} duration={2} delay={1} />
                  ) : null}
                  +
                  <br />
                  Projects
                </motion.div>
                <motion.div
                  variants={fadeIn("up", 1.2)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="text-xl lg:text-3xl gradText text-center"
                  style={{ fontFamily: raj_bold.style.fontFamily }}
                >
                  {inView ? (
                    <CountUp start={0} end={15} duration={2} delay={1} />
                  ) : null}
                  + <br />
                  Repositories
                </motion.div>
                <motion.div
                  variants={fadeIn("up", 1.4)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="text-xl lg:text-3xl gradText text-center"
                  style={{ fontFamily: raj_bold.style.fontFamily }}
                >
                  {inView ? (
                    <CountUp start={0} end={5} duration={2} delay={1} />
                  ) : null}
                  + <br />
                  Languages
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
