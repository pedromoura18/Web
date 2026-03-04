import { Button, HStack, VStack } from "@chakra-ui/react";
import NextLink from "next/link"
import { Link as ChakraLink } from "@chakra-ui/react"
import { Image as ChakraImage } from "@chakra-ui/react"
import NextImage from "next/image"
import { LuCar } from "react-icons/lu";
import { Icon } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import car from "../../public/assets/car.jpeg"



export default function Home() {
  return (
      <>
      <HStack as ="header" position={"fixed"} left={0} right={0} top={0} zIndex={50}>
        <HStack as={"nav"} alignItems={'center'} justify={"space-between"} px={6} py={4}/>
        <ChakraLink alignItems={"center" } gap={2} asChild>
         <NextLink href="/">
          <Icon w={7} h={7}>
            <LuCar />
          </Icon>

          <Text fontSize="xl" fontWeight ={"bold"}>autoShine</Text>
         </NextLink>
        </ChakraLink>
    
      <HStack>
        <ChakraLink alignItems={"center" } gap={8} asChild>
          <NextLink href={"/"}>
            Inicio
          </NextLink>
        </ChakraLink>

        <ChakraLink alignItems={"center" } gap={2} asChild>
          <NextLink href={"/"}>
            Serviços
          </NextLink>
        </ChakraLink>

        <ChakraLink alignItems={"center" } gap={2} asChild>
          <NextLink href={"/"}>
            Agendar
          </NextLink>
        </ChakraLink>

          <Button variant={"outline"} rounded={"lg"}>Acessar</Button>
        </HStack>
      </HStack>

       <VStack as ="main" gap={0}>
        <VStack as ="section">
          <ChakraImage w={"100vw"} h={'100vh'} asChild>
            <NextImage src={car} alt="teste" />
          </ChakraImage>
        </VStack>  
      </VStack>   
      </>
  );
}
