"use client";
import { motion, AnimatePresence } from "motion/react";
import { usePathname } from "next/navigation";
interface Props {
  children: React.ReactNode;
  className?: string;
}
const PageTransition = ({ children }: Props) => {
  const pathname = usePathname();
  return (
    <AnimatePresence>
      <div key={pathname}>
        <motion.div
          className="h-screen w-screen fixed bg-bodyColor top-0 pointer-events-none"
          initial={{ opacity: 1 }}
          animate={{
            opacity: 0,
            transition: { delay: 1, duration: 0.4, ease: "easeInOut" },
          }}
        ></motion.div>
        {children}
      </div>
    </AnimatePresence>
  );
};

export default PageTransition;
