import { Button, Flex, Heading, HStack, Strong, VStack } from "@chakra-ui/react";
import NextLink from "next/link"
import { Link as ChakraLink } from "@chakra-ui/react"
import { Image as ChakraImage } from "@chakra-ui/react"
import NextImage from "next/image"
import { LuCar, LuSparkles, LuStar } from "react-icons/lu";
import { Icon } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import car from "../../public/assets/car.jpeg"
import { ColorModeButton } from "@/components/ui/color-mode";
import { Tag } from "@/components/ui/tag";




export default function Home() {

  return (
      <>
      <HStack as ="header" position={"fixed"} left={0} right={0} top={0} zIndex={50} bg={"blackAlpha.800"}>
        <HStack as={"nav"} justify={"space-between"} px={8} py={4} w={"full"} alignItems={'center'}>
        <ChakraLink alignItems={"center" } gap={2} asChild>
         <NextLink href="/">
          <Icon w={7} h={7}>
            <LuCar />
          </Icon>

          <Text fontSize="xl" fontWeight ={"bold"}>autoShine</Text>
         </NextLink>
        </ChakraLink>
    
      <HStack alignItems={"center"} gap={8}>
        <ChakraLink alignItems={"center" } gap={2} asChild>
          <NextLink href={"/"}>
            Inicio
          </NextLink>
        </ChakraLink>

        <ChakraLink alignItems={"center"} gap={2} asChild>
          <NextLink href={"#serviços"}>
            Serviços
          </NextLink>
        </ChakraLink>

        <ChakraLink alignItems={"center" } gap={2} asChild>
          <NextLink href={"/agendar"}>
            Agendar
          </NextLink>
        </ChakraLink>

        <ColorModeButton/>

          <Button variant={"outline"} rounded={"lg"}>Acessar</Button>
        </HStack>
       </HStack> 
      </HStack>

       <VStack as ="main" gap={0}>
        <VStack as ="section" position={"relative"} w={"100vw"} h={'100vh'}align={"start"} justify={"center"}>

          <Flex position={"absolute"} zIndex={1} w={"100vw"} h={"100vh"} bgColor={"blackalpha.400/90"}/>

          <ChakraImage zIndex={0} position={"absolute"} w={"100vw"} h={'100vh'} asChild>
            <NextImage src={car} alt="AutoShine" />
          </ChakraImage>


          <VStack zIndex={2} maxW={"2xl"} align={'start'} position={"relative"} px={6} gap={0}>
          <Tag startElement={<LuSparkles />} rounded={"lg"} px={4} py={2} fontSize={"sm"} fontWeight={"medium"}>Excelencia em Estética Automotiva</Tag>

          <Heading as={"h1"} fontSize={{lg: "7xl", md:"5xl"}} fontWeight={"bold"} lineHeight={"normal"} letterSpacing={"tight"}>Seu carro merece o <strong>melhor</strong> cuidado </Heading>

          <Text maxW={"lg"} fontSize={"lg"} fontWeight={"medium"} mb={6}>Transformamos seu veiculo com serviços premium de estética automotiva 
            Agende online e garante o brilho que seu carro merece. 
          </Text>

          <HStack>
            <Button>Agendar Agora</Button>
            <Button>Agendar Serviços</Button>

          </HStack>


        </VStack>  
        </VStack>
      </VStack>   
      </>
  );
}
