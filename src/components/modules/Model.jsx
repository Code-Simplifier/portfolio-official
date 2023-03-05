import React, { useState } from "react";
import { motion } from "framer-motion";
import { mont_thin, fira_regular, raj_bold } from "@/styles/fonts";
import { fadeIn } from "../varients";
import { RxCross2 } from "react-icons/rx";

function Model({ desc, title, children }) {
  const [close, setClose] = useState(false);
  return (
    !close && (
      <motion.div
        variants={fadeIn("down", 0.6)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="model-clamp bg-gray-800 p-2 rounded-lg"
      >
        <div
          style={{ fontFamily: raj_bold.style.fontFamily }}
          className="text-3xl gradText mt-2 flex justify-between"
        >
          <h1>{title}</h1>
          <RxCross2 onClick={() => setClose(true)} color="grey" />
        </div>
        <div
          style={{ fontFamily: mont_thin.style.fontFamily }}
          className="text-justify py-3"
        >
          {desc}
        </div>
        {children}
      </motion.div>
    )
  );
}

export default Model;
