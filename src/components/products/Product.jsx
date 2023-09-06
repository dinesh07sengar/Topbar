import React from 'react'

import { Box, Button, Flex, Grid, GridItem, Heading, Image, Spacer, Text } from '@chakra-ui/react'
import { MdOutlineFavoriteBorder } from "react-icons/md"

export const Product = ({data,label}) => {
  console.log(data)

  return (
    <div>
      <Box  py={"14"}><Heading fontWeight="semibold">{label}</Heading></Box>
      <Grid templateColumns={['repeat(1, 1fr)','repeat(2, 1fr)','repeat(3, 1fr)','repeat(4, 1fr)']} gap={"15px"} w={"90%"}  mx={"auto"}>
        {data?.map((ele) => {
          return <GridItem  px={["10%","0","10%","10%"]}  >
            <Flex w={["200px","200px","100%","100%"]}   m={"auto"}>
              <Box my={"auto"}><MdOutlineFavoriteBorder /></Box>

              <Spacer />
              {label==="SNEAKERS"?<Box bg={"red"} color={"white"} px="1" m={"auto"} ><Text fontWeight={"semibold"} fontSize="18px" p={"0"}  m={"0"}>SALE</Text></Box>
:""}

            </Flex>
             <Image src={ele.first_img} alt='gd' w={["200px","200px","300px","330px"]} m={"auto"}/>
            {/* <Image src={ele.first_img} alt='gd' w={"90%"} /> */}
            <Text my={"4"} mx={"2"}>{ele.title}</Text>
            <Flex justifyContent={"center"} mb={"4"}><Text fontWeight={"semibold"} fontSize={"smaller"} color={"#718096"}> from Rs{ele.price}</Text> &nbsp;&nbsp; <Text color={"red"} textDecoration={"line-through"} fontWeight={"semibold"} fontSize={"smaller"}>Rs {ele.desc}</Text></Flex>
            

          </GridItem>
        })}

      </Grid>
      <Box><Button border={"1px solid black"} borderRadius={"0"}>VIEW ALL</Button></Box>

    </div>
  )
}
