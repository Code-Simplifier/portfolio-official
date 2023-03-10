import { motion } from "framer-motion";

const Backdrop = ({ children, onClick }) => {
  return (
    <motion.div
      onClick={onClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="absolute top-0 left-0 h-full w-full bg-black opacity-60 flex justify-center items-center"
    >
      {children}
    </motion.div>
  );
};

export default Backdrop;
