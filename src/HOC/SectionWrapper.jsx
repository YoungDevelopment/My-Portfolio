import { motion } from "framer-motion";

export default function SectionWrapper(Component, idName) {
  function HOC() {
    return (
      <motion.section>
        <Component />
      </motion.section>
    );
  }
}
