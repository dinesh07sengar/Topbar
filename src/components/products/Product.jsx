import React from 'react'

import { Box, Button, Flex, Grid, GridItem, Heading, Image, SimpleGrid, Spacer, Text } from '@chakra-ui/react'
import { MdOutlineFavoriteBorder } from "react-icons/md"

export const Product = ({data,label}) => {
  console.log(data)

  return (
    <div>
      <Box  py={"14"}><Heading fontWeight="semibold">{label}</Heading></Box>
      <SimpleGrid columns={["1","2","3","4"]}  w={"90%"}  mx={"auto"} spacingX={["10%","40%","8%","5%"]} spacingY={"10"} >
        {data?.map((ele) => {
          return <GridItem    >
            <Flex  w={["50%","70%","70%","70%"]}   m={"auto"}>
              <Box my={"auto"}><MdOutlineFavoriteBorder /></Box>

              <Spacer />
              {label==="SNEAKERS"?<Box bg={"red"} color={"white"} px="1" m={"auto"} ><Text fontWeight={"semibold"} fontSize={["13px","14px","15px"]} p={"0"}  m={"0"}>SALE</Text></Box>
:""}

            </Flex>
             <Image src={ele.first_img} alt='gd' w={["50%","70%","70%","70%"]} m={"auto"}/>
            {/* <Image src={ele.first_img} alt='gd' w={"90%"} /> */}
            <Text my={"4"} mx={["20%","10%","13%","13%"]}>{ele.title}</Text>
            <Flex justifyContent={"center"} mb={"4"}><Text fontWeight={"semibold"} fontSize={"smaller"} color={"#718096"}> from Rs{ele.price}</Text> &nbsp;&nbsp; <Text color={"red"} textDecoration={"line-through"} fontWeight={"semibold"} fontSize={"smaller"}>Rs {ele.desc}</Text></Flex>
            

          </GridItem>
        })}

      </SimpleGrid>
      <Box><Button border={"1px solid black"} borderRadius={"0"}>VIEW ALL</Button></Box>

    </div>
  )
}
