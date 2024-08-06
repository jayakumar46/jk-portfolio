import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
const items = [
  {
    id: 1,
    title: "React JS",
    img: "https://images.pexels.com/photos/20827831/pexels-photo-20827831/free-photo-of-person-fingers-holding-dandelion-on-meadow.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla eum iste dicta suscipit molestias officia impedit blanditiis dolorum repudiandae id!",
  },
  {
    id: 2,
    title: "Vennila JS",
    img: "https://images.pexels.com/photos/19194587/pexels-photo-19194587/free-photo-of-camera-book-and-eyeglasses-on-grass.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla eum iste dicta suscipit molestias officia impedit blanditiis dolorum repudiandae id!",
  },
  {
    id: 3,
    title: "Next JS",
    img: "https://images.pexels.com/photos/623919/pexels-photo-623919.jpeg?auto=compress&cs=tinysrgb&w=600",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla eum iste dicta suscipit molestias officia impedit blanditiis dolorum repudiandae id!",
  },
  {
    id: 4,
    title: "React Ecommerce",
    img: "https://images.pexels.com/photos/3805983/pexels-photo-3805983.jpeg?auto=compress&cs=tinysrgb&w=600",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla eum iste dicta suscipit molestias officia impedit blanditiis dolorum repudiandae id!",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    // offset:["start start" , "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);
  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>See Demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
