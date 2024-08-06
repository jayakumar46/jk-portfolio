import React from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
    const ref = useRef();
    const isInview = useInView(ref,{margin:"-100px"}) 

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
    //   animate="animate"
    // whileInView="animate"
    ref={ref}
    animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I focus on helping your brand grow <br />
          and move forward
        </p>
        <hr />
      </motion.div>
       <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <motion.b whileHover={{color:"orange"}}>Unique</motion.b> Ideas
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{color:"orange"}}>For Your</motion.b> Business.
          </h1>
          <button>WHAT WE DO?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h1>Branding</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem
            incidunt assumenda sequi maiores nesciunt expedita voluptate
            quibusdam odit aliquid alias!
          </p>
          <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            Go
          </motion.button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h1>Branding</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem
            incidunt assumenda sequi maiores nesciunt expedita voluptate
            quibusdam odit aliquid alias!
          </p>
          <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            Go
          </motion.button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h1>Branding</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem
            incidunt assumenda sequi maiores nesciunt expedita voluptate
            quibusdam odit aliquid alias!
          </p>
          <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            Go
          </motion.button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h1>Branding</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem
            incidunt assumenda sequi maiores nesciunt expedita voluptate
            quibusdam odit aliquid alias!
          </p>
          <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            Go
          </motion.button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
