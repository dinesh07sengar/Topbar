
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import style from "./Slideshow.module.css"
import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";

const slides = [
  {
    id: 1,
    image: "https://hypefly-assets.s3.ap-south-1.amazonaws.com/media/carousel_images/UNC_TOE_AJ1_1.jpg",
    title: "Memory"
  },
  {
    id: 2,
    image: "https://hypefly-assets.s3.ap-south-1.amazonaws.com/media/carousel_images/SEND_THE_LOVE.jpg",
    title: "It's a Race"
  },
  {
    id: 3,
    image: "https://hypefly-assets.s3.ap-south-1.amazonaws.com/media/carousel_images/58_SHOP_NOW.jpg",
    title: "If i write you"
  },
  {
    id: 4,
    image: "https://hypefly-assets.s3.ap-south-1.amazonaws.com/media/carousel_images/YEEZY_MANIA_1.jpg",
    title: "What We Do When..."
  },
  {
    id: 5,
    image: "https://hypefly-assets.s3.ap-south-1.amazonaws.com/media/carousel_images/PANDA_DUNK_ALL_TIME.jpg",
    title: "Don't Be Stupid"
  }
];


const Slideshow = () => {
  let [animation, setAnimation] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimation((prevAnimation) => {
        if (prevAnimation === 4) {
          return 0;
        }
        return prevAnimation + 1;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);


  return (
    <Box className={style.slideshow} h={["35vh","40vh","50vh","70vh"]}>
      {slides.map((slide, index) => (
        <motion.div
          key={slide.id}
          className={style.slide}
          initial={{ x: index === 0 ? 0 : "100%" }}
          animate={{ x: `${-animation*100}%` }}
          transition={{ duration: 0.5 }}
        >
          <img src={slide.image} alt={slide.title} />
        </motion.div>
      ))}

     
      <Box  w={"15%"}  mt="4px" gap={"6px"} zIndex={"1"} position={"absolute"} display={"flex"} flexDirection={"row"}  bottom={"5"} left={"45%"}>
        {slides.map((ele, i) => {
          return <Box borderRadius={"10%"} w={"20px"} border={animation===i?"4px solid white":"4px solid black"} ></Box>
        })}
      </Box>
    </Box>
  );
};

export default Slideshow;
//bhgj