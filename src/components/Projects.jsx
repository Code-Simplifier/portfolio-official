import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "./varients";
import { fira_regular, raj, raj_bold } from "@/styles/fonts";
import Image from "next/image";
import { SiGithub } from "react-icons/si";
import { AiFillEye } from "react-icons/ai";

function Projects() {
  return (
    <div
      id="projects"
      className="flex flex-col justify-center items-center mt-[190px]"
    >
      <motion.h2
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        style={{ fontFamily: raj.style.fontFamily }}
        className="uppercase gradText text-[50px] mt-3"
      >
        projects
      </motion.h2>
    </div>
  );
}

export default Projects;
