import { fira_regular, mont_thin, raj, raj_bold } from "@/styles/fonts";
import React, { useState } from "react";
import { fadeIn } from "./varients";
import { motion } from "framer-motion";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";
import {
  SiChakraui,
  SiFirebase,
  SiTailwindcss,
  SiAmazonaws,
  SiMongodb,
  SiNextdotjs,
  SiFlask,
  SiNetlify,
  SiVercel,
  SiJupyter,
  SiPandas,
} from "react-icons/si";

import Image from "next/image";
import Model from "./modules/Model";
import Popup from "reactjs-popup";

function Skills() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      {open && (
        <Model
          desc={
            "Here is a list of all the tools and technologies I am familiar with and frequently use while building UIs!"
          }
          title={"UI/UX Design"}
          setOpen={setOpen}
        >
          <div
            style={{ fontFamily: mont_thin.style.fontFamily }}
            className="m-2 tracking-tighter"
          >
            <div className="mb-2">
              <div className="mb-1">
                <span>HTML</span>
              </div>
              <div className="h-[10px] w-full bg-slate-500/30 rounded-md relative">
                <motion.span
                  style={{ fontFamily: fira_regular.style.fontFamily }}
                  className="progress-bar w-[80%]"
                ></motion.span>
              </div>
            </div>
            <div className="mb-2">
              <div className="mb-1">
                <span>CSS</span>
              </div>
              <div className="h-[10px] w-full bg-slate-500/30 rounded-md relative">
                <motion.span
                  style={{ fontFamily: fira_regular.style.fontFamily }}
                  className="progress-bar w-[90%]"
                ></motion.span>
              </div>
            </div>
            <div className="mb-2">
              <div className="mb-1">
                <span>Chakra UI</span>
              </div>
              <div className="h-[10px] w-full bg-slate-500/30 rounded-md relative">
                <motion.span
                  style={{ fontFamily: fira_regular.style.fontFamily }}
                  className="progress-bar w-[73%]"
                ></motion.span>
              </div>
            </div>
            <div className="mb-2">
              <div className="mb-1">
                <span>Tailwind</span>
              </div>
              <div className="h-[10px] w-full bg-slate-500/30 rounded-md relative">
                <motion.span
                  style={{ fontFamily: fira_regular.style.fontFamily }}
                  className="progress-bar w-[88%]"
                ></motion.span>
              </div>
            </div>
          </div>
        </Model>
      )}

      <div id="skills" className="flex flex-col justify-center items-center">
        <motion.h2
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          style={{ fontFamily: raj.style.fontFamily }}
          className="uppercase gradText text-[50px] mt-3"
        >
          Skills
        </motion.h2>
        <motion.div
          style={{ fontFamily: mont_thin.style.fontFamily }}
          className="tracking-wide text-center w-screen lg:text-xl"
          variants={fadeIn("up", 0.6)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          I am a Freelance Frontend Developer with fine knowledge of Backend
          Programming.
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-3 place-items-center gap-6 mt-3">
          {/* frontend */}
          <motion.div
            variants={fadeIn("up", 0.9)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="p-2 w-[80%] lg:w-[410px] rounded-md border border-slate-600"
          >
            {/* title */}
            <div
              style={{ fontFamily: raj_bold.style.fontFamily }}
              className="gradText text-3xl m-2 pb-2 flex justify-between border-b border-slate-500"
            >
              UI/UX Design
              <div>
                <Image src={"/design.png"} width={40} height={40} />
              </div>
            </div>
            {/* content */}
            <div
              style={{ fontFamily: mont_thin.style.fontFamily }}
              className="text-justify m-2 py-3"
            >
              Here is a list of all the tools and technologies I am familiar
              with and frequently use while building UIs!
            </div>
            <Popup
              trigger={
                <div className="flex justify-center bg-gradient-to-l from-pink-600 to-purple-600 p-2 rounded-md">
                  <BsFillArrowRightCircleFill size={25} />
                </div>
              }
              modal
            >
              {(close) => (
                <div>
                  <motion.div
                    variants={fadeIn("down", 0.3)}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    className="model-clamp bg-gray-800 text-white p-2 rounded-lg"
                  >
                    <div
                      style={{ fontFamily: raj_bold.style.fontFamily }}
                      className="text-3xl gradText mt-2 flex justify-between"
                    >
                      <h1>UI/UX Design</h1>
                      <RxCross2 onClick={close} color="grey" />
                    </div>
                    <div
                      style={{ fontFamily: mont_thin.style.fontFamily }}
                      className="text-justify py-3"
                    >
                      Here is a list of all the tools and technologies I am
                      familiar with and frequently use while building UIs!
                    </div>
                    <div
                      style={{ fontFamily: mont_thin.style.fontFamily }}
                      className="m-2 tracking-tighter"
                    >
                      <div className="mb-2 flex items-center justify-center">
                        <div
                          className="mb-1 p-2 text-sm"
                          style={{ fontFamily: fira_regular.style.fontFamily }}
                        >
                          <Tooltip anchorSelect="#html" content="HTML" />
                          <Image
                            src={"/html-5.png"}
                            id="html"
                            height={30}
                            width={30}
                          />
                        </div>
                        <div className="h-[10px] w-full bg-slate-500/30 rounded-md relative">
                          <motion.span
                            style={{
                              fontFamily: fira_regular.style.fontFamily,
                            }}
                            className="progress-bar w-[85%]"
                          ></motion.span>
                        </div>
                      </div>
                      <div className="mb-2 flex items-center justify-center">
                        <div
                          className="mb-1 p-2 text-sm"
                          style={{ fontFamily: fira_regular.style.fontFamily }}
                        >
                          <Tooltip anchorSelect="#css" content="CSS" />
                          <Image
                            src={"/css-3.png"}
                            id="css"
                            height={30}
                            width={30}
                          />
                        </div>
                        <div className="h-[10px] w-full bg-slate-500/30 rounded-md relative">
                          <motion.span
                            style={{
                              fontFamily: fira_regular.style.fontFamily,
                            }}
                            className="progress-bar w-[95%]"
                          ></motion.span>
                        </div>
                      </div>
                      <div className="mb-2 flex items-center justify-center">
                        <div
                          className="mb-1 p-2 text-sm"
                          style={{ fontFamily: fira_regular.style.fontFamily }}
                        >
                          <Tooltip anchorSelect="#chak" content="Chakra UI" />
                          <SiChakraui size={30} id="chak" color="lime" />
                        </div>
                        <div className="h-[10px] w-full bg-slate-500/30 rounded-md relative">
                          <motion.span
                            style={{
                              fontFamily: fira_regular.style.fontFamily,
                            }}
                            className="progress-bar w-[80%]"
                          ></motion.span>
                        </div>
                      </div>
                      <div className="mb-2 flex items-center justify-center">
                        <div
                          className="mb-1 p-2 text-sm"
                          style={{ fontFamily: fira_regular.style.fontFamily }}
                        >
                          <Tooltip
                            anchorSelect="#tail"
                            content="Tailwind CSS"
                          />
                          <SiTailwindcss size={30} id="tail" color="cyan" />
                        </div>
                        <div className="h-[10px] w-full bg-slate-500/30 rounded-md relative">
                          <motion.span
                            style={{
                              fontFamily: fira_regular.style.fontFamily,
                            }}
                            className="progress-bar w-[90%]"
                          ></motion.span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              )}
            </Popup>
          </motion.div>

          {/* backend */}
          <motion.div
            variants={fadeIn("up", 1.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="p-2 w-[80%] lg:w-[410px] rounded-md border border-slate-600"
          >
            {/* title */}
            <div
              style={{ fontFamily: raj_bold.style.fontFamily }}
              className="gradText text-3xl m-2 pb-2 flex justify-between border-b border-slate-500"
            >
              Backend Management
              <div>
                <Image src={"/backend.png"} width={40} height={40} />
              </div>
            </div>
            {/* content */}
            <div
              style={{ fontFamily: mont_thin.style.fontFamily }}
              className="text-justify m-2 py-3"
            >
              Here is a list of all the tools and technologies I am familiar
              with and frequently use while building UIs!
            </div>
            <Popup
              trigger={
                <div className="flex justify-center bg-gradient-to-l from-pink-600 to-purple-600 p-2 rounded-md">
                  <BsFillArrowRightCircleFill size={25} />
                </div>
              }
              modal
            >
              {(close) => (
                <div>
                  <motion.div
                    variants={fadeIn("down", 0.3)}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    className="model-clamp bg-gray-800 text-white p-2 rounded-lg"
                  >
                    <div
                      style={{ fontFamily: raj_bold.style.fontFamily }}
                      className="text-3xl gradText mt-2 flex justify-between"
                    >
                      <h1>Backend Management</h1>
                      <RxCross2 onClick={close} color="grey" />
                    </div>
                    <div
                      style={{ fontFamily: mont_thin.style.fontFamily }}
                      className="text-justify py-3"
                    >
                      Here is a list of all the tools and technologies I am
                      familiar with and frequently use while building UIs!
                    </div>
                    <div
                      style={{ fontFamily: mont_thin.style.fontFamily }}
                      className="m-2 tracking-tighter"
                    >
                      <div className="mb-2 flex items-center justify-center">
                        <div
                          className="mb-1 p-2 text-sm"
                          style={{ fontFamily: fira_regular.style.fontFamily }}
                        >
                          <Tooltip anchorSelect="#aws" content="AWS Amplify" />
                          <SiAmazonaws size={30} id="aws" color="orange" />
                        </div>
                        <div className="h-[10px] w-full bg-slate-500/30 rounded-md relative">
                          <motion.span
                            style={{
                              fontFamily: fira_regular.style.fontFamily,
                            }}
                            className="progress-bar w-[70%]"
                          ></motion.span>
                        </div>
                      </div>
                      <div className="mb-2 flex items-center justify-center">
                        <div
                          className="mb-1 p-2 text-sm"
                          style={{ fontFamily: fira_regular.style.fontFamily }}
                        >
                          <Tooltip anchorSelect="#fire" content="Firbase" />
                          <SiFirebase size={30} id="fire" color="yellow" />
                        </div>
                        <div className="h-[10px] w-full bg-slate-500/30 rounded-md relative">
                          <motion.span
                            style={{
                              fontFamily: fira_regular.style.fontFamily,
                            }}
                            className="progress-bar w-[95%]"
                          ></motion.span>
                        </div>
                      </div>
                      <div className="mb-2 flex items-center justify-center">
                        <div
                          className="mb-1 p-2 text-sm"
                          style={{ fontFamily: fira_regular.style.fontFamily }}
                        >
                          <Tooltip anchorSelect="#mongo" content="MongoDB" />
                          <SiMongodb size={30} id="mongo" color="lime" />
                        </div>
                        <div className="h-[10px] w-full bg-slate-500/30 rounded-md relative">
                          <motion.span
                            style={{
                              fontFamily: fira_regular.style.fontFamily,
                            }}
                            className="progress-bar w-[58%]"
                          ></motion.span>
                        </div>
                      </div>
                      <div className="mb-2 flex items-center justify-center">
                        <div
                          className="mb-1 p-2 text-sm"
                          style={{ fontFamily: fira_regular.style.fontFamily }}
                        >
                          <Tooltip anchorSelect="#mysql" content="MySQL" />
                          <Image
                            src={"/mysql.png"}
                            id="mysql"
                            width={30}
                            height={30}
                          />
                        </div>
                        <div className="h-[10px] w-full bg-slate-500/30 rounded-md relative">
                          <motion.span
                            style={{
                              fontFamily: fira_regular.style.fontFamily,
                            }}
                            className="progress-bar w-[78%]"
                          ></motion.span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              )}
            </Popup>
          </motion.div>

          {/* libraries */}
          <motion.div
            variants={fadeIn("up", 1.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="p-2 w-[80%] lg:w-[410px] rounded-md border border-slate-600"
          >
            {/* title */}
            <div
              style={{ fontFamily: raj_bold.style.fontFamily }}
              className="gradText text-3xl m-2 pb-2 flex justify-between border-b border-slate-500"
            >
              Libraries
              <div>
                <Image src={"/analysis.png"} width={40} height={40} />
              </div>
            </div>
            {/* content */}
            <div
              style={{ fontFamily: mont_thin.style.fontFamily }}
              className="text-justify m-2 py-3"
            >
              Here is a list of all the tools and technologies I am familiar
              with and frequently use while building UIs!
            </div>
            <Popup
              trigger={
                <div className="flex justify-center bg-gradient-to-l from-pink-600 to-purple-600 p-2 rounded-md">
                  <BsFillArrowRightCircleFill size={25} />
                </div>
              }
              modal
            >
              {(close) => (
                <div>
                  <motion.div
                    variants={fadeIn("down", 0.3)}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    className="model-clamp bg-gray-800 text-white p-2 rounded-lg"
                  >
                    <div
                      style={{ fontFamily: raj_bold.style.fontFamily }}
                      className="text-3xl gradText mt-2 flex justify-between"
                    >
                      <h1>Libraries</h1>
                      <RxCross2 onClick={close} color="grey" />
                    </div>
                    <div
                      style={{ fontFamily: mont_thin.style.fontFamily }}
                      className="text-justify py-3"
                    >
                      Here is a list of all the tools and technologies I am
                      familiar with and frequently use while building UIs!
                    </div>
                    <div
                      style={{ fontFamily: mont_thin.style.fontFamily }}
                      className="m-2 tracking-tighter"
                    >
                      <div className="mb-2 flex items-center justify-center">
                        <div
                          className="mb-1 p-2 text-sm"
                          style={{ fontFamily: fira_regular.style.fontFamily }}
                        >
                          <Tooltip anchorSelect="#react" content="ReactJS" />
                          <Image
                            src={"/physics.png"}
                            id="react"
                            width={30}
                            height={30}
                          />
                        </div>
                        <div className="h-[10px] w-full bg-slate-500/30 rounded-md relative">
                          <motion.span
                            style={{
                              fontFamily: fira_regular.style.fontFamily,
                            }}
                            className="progress-bar w-[85%]"
                          ></motion.span>
                        </div>
                      </div>
                      <div className="mb-2 flex items-center justify-center">
                        <div
                          className="mb-1 p-2 text-sm"
                          style={{ fontFamily: fira_regular.style.fontFamily }}
                        >
                          <Tooltip anchorSelect="#flask" content="Flask" />
                          <SiFlask size={30} id="flask" color="white" />
                        </div>
                        <div className="h-[10px] w-full bg-slate-500/30 rounded-md relative">
                          <motion.span
                            style={{
                              fontFamily: fira_regular.style.fontFamily,
                            }}
                            className="progress-bar w-[75%]"
                          ></motion.span>
                        </div>
                      </div>
                      <div className="mb-2 flex items-center justify-center">
                        <div
                          className="mb-1 p-2 text-sm"
                          style={{ fontFamily: fira_regular.style.fontFamily }}
                        >
                          <Tooltip anchorSelect="#next" content="NextJS" />
                          <SiNextdotjs size={30} id="next" color="black" />
                        </div>
                        <div className="h-[10px] w-full bg-slate-500/30 rounded-md relative">
                          <motion.span
                            style={{
                              fontFamily: fira_regular.style.fontFamily,
                            }}
                            className="progress-bar w-[93%]"
                          ></motion.span>
                        </div>
                      </div>
                      <div className="mb-2 flex items-center justify-center">
                        <div
                          className="mb-1 p-2 text-sm"
                          style={{ fontFamily: fira_regular.style.fontFamily }}
                        >
                          <Tooltip anchorSelect="#rne" content="React Native" />
                          <Image
                            src={"/atom.png"}
                            id="rne"
                            width={30}
                            height={30}
                          />
                        </div>
                        <div className="h-[10px] w-full bg-slate-500/30 rounded-md relative">
                          <motion.span
                            style={{
                              fontFamily: fira_regular.style.fontFamily,
                            }}
                            className="progress-bar w-[80%]"
                          ></motion.span>
                        </div>
                      </div>
                      <div className="mb-2 flex items-center justify-center">
                        <div
                          className="mb-1 p-2 text-sm"
                          style={{ fontFamily: fira_regular.style.fontFamily }}
                        >
                          <Tooltip anchorSelect="#dj" content="Django" />
                          <Image
                            src={"/django.png"}
                            id="dj"
                            width={30}
                            height={30}
                          />
                        </div>
                        <div className="h-[10px] w-full bg-slate-500/30 rounded-md relative">
                          <motion.span
                            style={{
                              fontFamily: fira_regular.style.fontFamily,
                            }}
                            className="progress-bar w-[60%]"
                          ></motion.span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              )}
            </Popup>
          </motion.div>

          {/* languages */}
          <motion.div
            variants={fadeIn("up", 1.5)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="p-2 w-[80%] lg:w-[410px] rounded-md border border-slate-600"
          >
            {/* title */}
            <div
              style={{ fontFamily: raj_bold.style.fontFamily }}
              className="gradText text-3xl m-2 pb-2 flex justify-between border-b border-slate-500"
            >
              Languages
              <div>
                <Image src={"/mobile.png"} width={40} height={40} />
              </div>
            </div>
            {/* content */}
            <div
              style={{ fontFamily: mont_thin.style.fontFamily }}
              className="text-justify m-2 py-3"
            >
              Here is a list of all the tools and technologies I am familiar
              with and frequently use while building UIs!
            </div>
            <Popup
              trigger={
                <div className="flex justify-center bg-gradient-to-l from-pink-600 to-purple-600 p-2 rounded-md">
                  <BsFillArrowRightCircleFill size={25} />
                </div>
              }
              modal
            >
              {(close) => (
                <div>
                  <motion.div
                    variants={fadeIn("down", 0.3)}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    className="model-clamp bg-gray-800 text-white p-2 rounded-lg"
                  >
                    <div
                      style={{ fontFamily: raj_bold.style.fontFamily }}
                      className="text-3xl gradText mt-2 flex justify-between"
                    >
                      <h1>Languages</h1>
                      <RxCross2 onClick={close} color="grey" />
                    </div>
                    <div
                      style={{ fontFamily: mont_thin.style.fontFamily }}
                      className="text-justify py-3"
                    >
                      Here is a list of all the tools and technologies I am
                      familiar with and frequently use while building UIs!
                    </div>
                    <div
                      style={{ fontFamily: mont_thin.style.fontFamily }}
                      className="m-2 tracking-tighter"
                    >
                      <div className="mb-2 flex items-center justify-center">
                        <div
                          className="mb-1 p-2 text-sm"
                          style={{ fontFamily: fira_regular.style.fontFamily }}
                        >
                          <Tooltip anchorSelect="#py" content="Python" />
                          <Image
                            src={"/python.png"}
                            id="py"
                            width={30}
                            height={30}
                          />
                        </div>
                        <div className="h-[10px] w-full bg-slate-500/30 rounded-md relative">
                          <motion.span
                            style={{
                              fontFamily: fira_regular.style.fontFamily,
                            }}
                            className="progress-bar w-[85%]"
                          ></motion.span>
                        </div>
                      </div>
                      <div className="mb-2 flex items-center justify-center">
                        <div
                          className="mb-1 p-2 text-sm"
                          style={{ fontFamily: fira_regular.style.fontFamily }}
                        >
                          <Tooltip anchorSelect="#php" content="PHP" />

                          <Image
                            src={"/php.png"}
                            id="php"
                            width={30}
                            height={30}
                          />
                        </div>
                        <div className="h-[10px] w-full bg-slate-500/30 rounded-md relative">
                          <motion.span
                            style={{
                              fontFamily: fira_regular.style.fontFamily,
                            }}
                            className="progress-bar w-[61%]"
                          ></motion.span>
                        </div>
                      </div>
                      <div className="mb-2 flex items-center justify-center">
                        <div
                          className="mb-1 p-2 text-sm"
                          style={{ fontFamily: fira_regular.style.fontFamily }}
                        >
                          <Tooltip anchorSelect="#js" content="Javascript" />
                          <Image
                            src={"/java-script.png"}
                            id="js"
                            width={30}
                            height={30}
                          />
                        </div>
                        <div className="h-[10px] w-full bg-slate-500/30 rounded-md relative">
                          <motion.span
                            style={{
                              fontFamily: fira_regular.style.fontFamily,
                            }}
                            className="progress-bar w-[80%]"
                          ></motion.span>
                        </div>
                      </div>
                      <div className="mb-2 flex items-center justify-center">
                        <div
                          className="mb-1 p-2 text-sm"
                          style={{ fontFamily: fira_regular.style.fontFamily }}
                        >
                          <Tooltip anchorSelect="#html" content="HTML" />
                          <Image
                            src={"/html-5.png"}
                            id="html"
                            height={30}
                            width={30}
                          />
                        </div>
                        <div className="h-[10px] w-full bg-slate-500/30 rounded-md relative">
                          <motion.span
                            style={{
                              fontFamily: fira_regular.style.fontFamily,
                            }}
                            className="progress-bar w-[85%]"
                          ></motion.span>
                        </div>
                      </div>
                      <div className="mb-2 flex items-center justify-center">
                        <div
                          className="mb-1 p-2 text-sm"
                          style={{ fontFamily: fira_regular.style.fontFamily }}
                        >
                          <Tooltip anchorSelect="#css" content="CSS" />
                          <Image
                            src={"/css-3.png"}
                            id="css"
                            height={30}
                            width={30}
                          />
                        </div>
                        <div className="h-[10px] w-full bg-slate-500/30 rounded-md relative">
                          <motion.span
                            style={{
                              fontFamily: fira_regular.style.fontFamily,
                            }}
                            className="progress-bar w-[95%]"
                          ></motion.span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              )}
            </Popup>
          </motion.div>

          {/* tools */}
          <motion.div
            variants={fadeIn("up", 1.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="p-2 w-[80%] lg:w-[410px] rounded-md border border-slate-600"
          >
            {/* title */}
            <div
              style={{ fontFamily: raj_bold.style.fontFamily }}
              className="gradText text-3xl m-2 pb-2 flex justify-between border-b border-slate-500"
            >
              Tools
              <div>
                <Image src={"/analysis.png"} width={40} height={40} />
              </div>
            </div>
            {/* content */}
            <div
              style={{ fontFamily: mont_thin.style.fontFamily }}
              className="text-justify m-2 py-3"
            >
              Here is a list of all the tools and technologies I am familiar
              with and frequently use while building UIs!
            </div>
            <Popup
              trigger={
                <div className="flex justify-center bg-gradient-to-l from-pink-600 to-purple-600 p-2 rounded-md">
                  <BsFillArrowRightCircleFill size={25} />
                </div>
              }
              modal
            >
              {(close) => (
                <div>
                  <motion.div
                    variants={fadeIn("down", 0.3)}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    className="model-clamp bg-gray-800 text-white p-2 rounded-lg"
                  >
                    <div
                      style={{ fontFamily: raj_bold.style.fontFamily }}
                      className="text-3xl gradText mt-2 flex justify-between"
                    >
                      <h1>Tools</h1>
                      <RxCross2 onClick={close} color="grey" />
                    </div>
                    <div
                      style={{ fontFamily: mont_thin.style.fontFamily }}
                      className="text-justify py-3"
                    >
                      Here is a list of all the tools and technologies I am
                      familiar with and frequently use while building UIs!
                    </div>
                    <div
                      style={{ fontFamily: mont_thin.style.fontFamily }}
                      className="m-2 tracking-tighter"
                    >
                      <div className="mb-2 flex items-center justify-center">
                        <div
                          className="mb-1 p-2 text-sm"
                          style={{ fontFamily: fira_regular.style.fontFamily }}
                        >
                          <Tooltip anchorSelect="#git" content="Git" />
                          <Image
                            src={"/git.png"}
                            id="git"
                            width={30}
                            height={30}
                          />
                        </div>
                        <div className="h-[10px] w-full bg-slate-500/30 rounded-md relative">
                          <motion.span
                            style={{
                              fontFamily: fira_regular.style.fontFamily,
                            }}
                            className="progress-bar w-[80%]"
                          ></motion.span>
                        </div>
                      </div>
                      <div className="mb-2 flex items-center justify-center">
                        <div
                          className="mb-1 p-2 text-sm"
                          style={{ fontFamily: fira_regular.style.fontFamily }}
                        >
                          <Tooltip anchorSelect="#figma" content="Figma" />
                          <Image
                            src={"/figma.png"}
                            id="figma"
                            height={30}
                            width={30}
                          />
                        </div>
                        <div className="h-[10px] w-full bg-slate-500/30 rounded-md relative">
                          <motion.span
                            style={{
                              fontFamily: fira_regular.style.fontFamily,
                            }}
                            className="progress-bar w-[70%]"
                          ></motion.span>
                        </div>
                      </div>
                      <div className="mb-2 flex items-center justify-center">
                        <div
                          className="mb-1 p-2 text-sm"
                          style={{ fontFamily: fira_regular.style.fontFamily }}
                        >
                          <Tooltip anchorSelect="#net" content="Netlify" />
                          <SiNetlify size={30} id="net" color="cyan" />
                        </div>
                        <div className="h-[10px] w-full bg-slate-500/30 rounded-md relative">
                          <motion.span
                            style={{
                              fontFamily: fira_regular.style.fontFamily,
                            }}
                            className="progress-bar w-[90%]"
                          ></motion.span>
                        </div>
                      </div>
                      <div className="mb-2 flex items-center justify-center">
                        <div
                          className="mb-1 p-2 text-sm"
                          style={{ fontFamily: fira_regular.style.fontFamily }}
                        >
                          <Tooltip anchorSelect="#github" content="Github" />
                          <Image
                            src={"/github.png"}
                            id="github"
                            width={30}
                            height={30}
                          />
                        </div>
                        <div className="h-[10px] w-full bg-slate-500/30 rounded-md relative">
                          <motion.span
                            style={{
                              fontFamily: fira_regular.style.fontFamily,
                            }}
                            className="progress-bar w-[85%]"
                          ></motion.span>
                        </div>
                      </div>
                      <div className="mb-2 flex items-center justify-center">
                        <div
                          className="mb-1 p-2 text-sm"
                          style={{ fontFamily: fira_regular.style.fontFamily }}
                        >
                          <Tooltip anchorSelect="#ver" content="Vercel" />
                          <SiVercel size={30} id="ver" />
                        </div>
                        <div className="h-[10px] w-full bg-slate-500/30 rounded-md relative">
                          <motion.span
                            style={{
                              fontFamily: fira_regular.style.fontFamily,
                            }}
                            className="progress-bar w-[94%]"
                          ></motion.span>
                        </div>
                      </div>
                      <div className="mb-2 flex items-center justify-center">
                        <div
                          className="mb-1 p-2 text-sm"
                          style={{ fontFamily: fira_regular.style.fontFamily }}
                        >
                          <Tooltip anchorSelect="#jup" content="Jupyter" />
                          <SiJupyter size={30} id="jup" color="orange" />
                        </div>
                        <div className="h-[10px] w-full bg-slate-500/30 rounded-md relative">
                          <motion.span
                            style={{
                              fontFamily: fira_regular.style.fontFamily,
                            }}
                            className="progress-bar w-[70%]"
                          ></motion.span>
                        </div>
                      </div>
                      <div className="mb-2 flex items-center justify-center">
                        <div
                          className="mb-1 p-2 text-sm"
                          style={{ fontFamily: fira_regular.style.fontFamily }}
                        >
                          <Tooltip anchorSelect="#pan" content="Pandas" />
                          <SiPandas size={30} id="pan" color="skyBlue" />
                        </div>
                        <div className="h-[10px] w-full bg-slate-500/30 rounded-md relative">
                          <motion.span
                            style={{
                              fontFamily: fira_regular.style.fontFamily,
                            }}
                            className="progress-bar w-[82%]"
                          ></motion.span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              )}
            </Popup>
          </motion.div>

          <motion.div
            variants={fadeIn("up", 1.5)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="p-2 w-[80%] lg:w-[410px] rounded-md border border-slate-600"
          >
            {/* title */}
            <div
              style={{ fontFamily: raj_bold.style.fontFamily }}
              className="gradText text-3xl m-2 pb-2 flex justify-between border-b border-slate-500"
            >
              Languages
              <div>
                <Image src={"/mobile.png"} width={40} height={40} />
              </div>
            </div>
            {/* content */}
            <div
              style={{ fontFamily: mont_thin.style.fontFamily }}
              className="text-justify m-2 py-3"
            >
              Here is a list of all the tools and technologies I am familiar
              with and frequently use while building UIs!
            </div>
            <Popup
              trigger={
                <div className="flex justify-center bg-gradient-to-l from-pink-600 to-purple-600 p-2 rounded-md">
                  <BsFillArrowRightCircleFill size={25} />
                </div>
              }
              modal
            >
              {(close) => (
                <div>
                  <motion.div
                    variants={fadeIn("down", 0.3)}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    className="model-clamp bg-gray-800 text-white p-2 rounded-lg"
                  >
                    <div
                      style={{ fontFamily: raj_bold.style.fontFamily }}
                      className="text-3xl gradText mt-2 flex justify-between"
                    >
                      <h1>Languages</h1>
                      <RxCross2 onClick={close} color="grey" />
                    </div>
                    <div
                      style={{ fontFamily: mont_thin.style.fontFamily }}
                      className="text-justify py-3"
                    >
                      Here is a list of all the tools and technologies I am
                      familiar with and frequently use while building UIs!
                    </div>
                    <div
                      style={{ fontFamily: mont_thin.style.fontFamily }}
                      className="m-2 tracking-tighter"
                    >
                      <div className="mb-2">
                        <div className="mb-1">
                          <span>Python</span>
                        </div>
                        <div className="h-[10px] w-full bg-slate-500/30 rounded-md relative">
                          <motion.span
                            style={{
                              fontFamily: fira_regular.style.fontFamily,
                            }}
                            className="progress-bar w-[85%]"
                          ></motion.span>
                        </div>
                      </div>
                      <div className="mb-2">
                        <div className="mb-1">
                          <span>PHP</span>
                        </div>
                        <div className="h-[10px] w-full bg-slate-500/30 rounded-md relative">
                          <motion.span
                            style={{
                              fontFamily: fira_regular.style.fontFamily,
                            }}
                            className="progress-bar w-[61%]"
                          ></motion.span>
                        </div>
                      </div>
                      <div className="mb-2">
                        <div className="mb-1">
                          <span>Javascript</span>
                        </div>
                        <div className="h-[10px] w-full bg-slate-500/30 rounded-md relative">
                          <motion.span
                            style={{
                              fontFamily: fira_regular.style.fontFamily,
                            }}
                            className="progress-bar w-[80%]"
                          ></motion.span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              )}
            </Popup>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
