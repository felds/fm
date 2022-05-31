import { motion } from "framer-motion";
import Link from "next/link";

const homeAnimation = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 2 },
};

export default function Home() {
  return (
    <motion.div key="home" {...homeAnimation}>
      <h1>Hello, World</h1>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut consectetur
        perferendis quae esse. Quam, alias. Sunt odit, quam ratione vero, at
        officiis ex exercitationem voluptatibus cupiditate officia aut sed
        error?
      </p>

      <Link href="/about">
        <a>Go to about &rarr;</a>
      </Link>
    </motion.div>
  );
}
