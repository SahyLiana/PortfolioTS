// import React from "react";
import { useEffect, useState } from "react";
import "./cursor.scss";
import { motion } from "framer-motion";

function Cursor() {
  const [position, setPosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const mouseMove = (e: any) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  console.log(position);
  return (
    <motion.div
      className="cursor"
      animate={{ x: position.x, y: position.y + 5 }}
    ></motion.div>
  );
}

export default Cursor;
