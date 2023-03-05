import React from "react";

import { TbBrandGithub, TbBrandBlogger } from "react-icons/tb";
import { FiTwitter } from "react-icons/fi";

import { motion } from "framer-motion";
import { fadeIn } from "./varients";
import { TypeAnimation } from "react-type-animation";
import { mont_regular, mont_thin, raj, raj_bold } from "@/styles/fonts";
import Image from "next/image";

function Hero() {
  return (
    <div>
      <section id="hero" className="section">
        <div className="container mx-auto">
          <div className="flex flex-col-reverse gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
            <div className="flex-1 text-center lg:text-left">
              <motion.div
                variants={fadeIn("down", 0.5)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: true }}
                style={{ fontFamily: raj.style.fontFamily }}
                className="uppercase tracking-wider text-[36px] lg:text-[50px]"
              >
                <h1>Hi There!</h1>
              </motion.div>
              <motion.div
                variants={fadeIn("up", 0.5)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: true }}
                style={{ fontFamily: raj_bold.style.fontFamily }}
                className="mb-2 text-[36px] lg:text-[60px] leading-[1]"
              >
                <span>I am a </span>
                <TypeAnimation
                  sequence={[
                    "Developer",
                    2000,
                    "Designer",
                    2000,
                    "Learner",
                    2000,
                    "Troubleshooter",
                    2000,
                  ]}
                  speed={50}
                  className="gradText"
                  wrapper="span"
                  repeat={Infinity}
                />
              </motion.div>
              <motion.p
                variants={fadeIn("up", 1.6)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: true }}
                className="mx-auto mb-8 max-w-lg lg:mx-0 text-justify"
                style={{ fontFamily: mont_thin.style.fontFamily }}
              >
                I am a skilled web developer with a passion for creating
                innovative and user-friendly web applications.
              </motion.p>
              <div className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0">
                <motion.div
                  variants={fadeIn("up", 1.9)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: true }}
                >
                  <TbBrandGithub />
                </motion.div>
                <motion.div
                  variants={fadeIn("up", 2)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: true }}
                >
                  <FiTwitter />
                </motion.div>
                <motion.div
                  variants={fadeIn("up", 2.1)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: true }}
                >
                  <TbBrandBlogger />
                </motion.div>
              </div>
            </div>
            <motion.div
              initial={{
                x: 70,
                opacity: 0,
              }}
              animate={{
                x: 0,
                opacity: 1,
              }}
              transition={{
                duration: 3,
              }}
            >
              <Image
                className="animate-updown"
                src={"/header-img.svg"}
                alt="img"
                width={560}
                height={560}
              />
            </motion.div>
          </div>
        </div>
      </section>
      <div className=" bg-gradient-to-l from-violet-600 to-pink-600 mx-2 rounded-2xl backdrop-blur-3xl h-[8px]"></div>
    </div>
  );
}

export default Hero;
