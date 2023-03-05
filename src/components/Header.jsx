import React from "react";
import { mont_regular, mont_bold, raj } from "@/styles/fonts";
import { AnimatedText } from "./modules/AnimatedText";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

function Header() {
  return (
    <header
      id="home"
      style={{ fontFamily: mont_regular.style.fontFamily }}
      className="pt-4"
    >
      <div className="container mx-auto flex justify-between">
        <div
          style={{ fontFamily: mont_regular.style.fontFamily }}
          className="text-white uppercase text-2xl tracking-widest"
        >
          <div className="gradText">singh</div>
          <div style={{ fontFamily: mont_bold.style.fontFamily }}>
            <AnimatedText text={"gurshabad"} />
          </div>
        </div>
        <motion.button
          initial={{
            x: 50,
            opacity: 0,
          }}
          animate={{
            x: 0,
            opacity: 1,
          }}
          transition={{ duration: 1 }}
          className="bg-gradient-to-r h-fit p-2 self-center px-4 rounded-lg from-violet-600 to-pink-600 border-purple-400"
        >
          <Link to="contact" smooth={true}>
            Contact Me
          </Link>
        </motion.button>
      </div>
    </header>
  );
}

export default Header;
