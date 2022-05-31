import { motion } from "framer-motion";
import Link from "next/link";

const aboutAnimation = {
  initial: { scale: 0 },
  animate: { scale: 1 },
  exit: { scale: 0 },
  transition: { duration: 1 },
};

export default function Home() {
  return (
    <motion.div key="about" {...aboutAnimation}>
      <h1>About me</h1>

      <Link href="/">
        <a>&larr; Back to home</a>
      </Link>
    </motion.div>
  );
}
