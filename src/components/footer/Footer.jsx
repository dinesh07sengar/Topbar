import { Box, Button, Flex,  Image, Input, Text } from '@chakra-ui/react'
import React from 'react'
import {AiFillInstagram} from "react-icons/ai"
import {BsFacebook} from 'react-icons/bs'
import {SiGmail} from "react-icons/si"
import {FaUserCircle} from "react-icons/fa"
import {HiShoppingBag} from "react-icons/hi"

export const Footer = () => {
  return (
    <Box bg={"#1A202C"} color={"white"}>
        <Flex p={"8"} pl={"0"} py={"10"} justifyContent={"space-around"}>
            <Box >
                <Box ><Image src="https://hypefly-assets.s3.ap-south-1.amazonaws.com/media/defaults/store_logo.webp" alt ="logo" w={"50%"} bg={"white"} mx={"auto"}/></Box>
                <Flex my={"3"} justifyContent={"space-around"} w={"54%"} mx={"auto"}><AiFillInstagram/><BsFacebook/><SiGmail/></Flex>
                <Text color="#3E8FDB" fontSize={"xl"}>BUSINESS INQUIRIES</Text>
                <Text fontSize={"xl"}>contact@hypefly.co.in</Text>

            </Box>
            <Box>
                <Text color="#3E8FDB" fontSize={"2xl"}>PAGES</Text>
            <Text my={"1"}>Home</Text>
            <Text my={"1"}>Sneakers</Text>
            <Text my={"1"}>Streetwear</Text>
            <Text my={"1"}>About</Text>
            <Text my={"1"}>Blog</Text>
            </Box>
            <Box > <Text color="#3E8FDB" fontSize={"2xl"}>POLICIES</Text>
            <Text my={"1"}>Return Policy</Text>
            <Text my={"1"}>Seller Policy</Text>
            <Text my={"1"}>Privacy Policy</Text>
            <Text my={"1"}>Shipping Policy</Text>
            </Box>
            <Box>
                <Box> <Text textAlign={"left"} color="#3E8FDB">BLOG</Text>
                <Flex  gap={"2"}><Input placeholder=' Your email address' border={"none"} bg={"#181E29"} />
                <Button my={"auto"} bg={"#050609"}  color={"white"} fontSize={"xl"}><SiGmail/></Button></Flex>
                </Box>
                <Box my={"8"} >
                    <Text  textAlign={"left"} color="#3E8FDB">ACCOUNT</Text>
                    <Flex fontSize={"xl"} my={"3"} w={"30%"} justifyContent={"space-around"}><FaUserCircle/><HiShoppingBag/></Flex>
                </Box>
               
            </Box>
        </Flex>
    </Box>
  )
}
