'use client'

import { Box, Container, Heading, Text, Flex, SimpleGrid, Button, Stack } from '@chakra-ui/react'
import Image from 'next/image'

export default function Hero() {
  return (
    <Box
      as="section"
      id="home"
      position="relative"
      pt={{ base: "140px", md: "180px" }}
      pb={{ base: 24, md: 40 }}
      overflow="hidden"
      bg="navy"
    >
      {/* Video Background */}
      <Box position="absolute" inset={0} zIndex={0}>
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.3 }}
        >
          <source src="/assets/videos/bg.mp4" type="video/mp4" />
        </video>
        <Box
          position="absolute"
          inset={0}
          bgGradient="to-b"
          gradientFrom="rgba(9, 15, 28, 0.4)"
          gradientTo="navy"
        />
      </Box>

      <Container maxW="1440px" mx="auto" position="relative" zIndex={1} px={{ base: 6, md: 10 }} py={{ base: 6, md: 20 }}>
        <SimpleGrid columns={{ base: 1, lg: 2 }} gap={{ base: 16, lg: 24 }} alignItems="center">
          {/* Content Left */}
          <Stack gap={8} textAlign={{ base: "center", lg: "left" }} align={{ base: "center", lg: "flex-start" }}>
            <Stack gap={4}>
              <Flex align="center" gap={3} justify={{ base: "center", lg: "flex-start" }}>
                <Box h="1.5px" w={10} bg="primary" />
                <Text color="primary" fontSize="xs" fontWeight="800" letterSpacing="0.2em" textTransform="uppercase">
                  Passaporte Veicular Digital
                </Text>
              </Flex>

              <Heading
                as="h1"
                size={{ base: "4xl", md: "5xl" }}
                color="white"
                lineHeight="1.1"
                fontWeight="800"
                letterSpacing="-0.02em"
              >
                Tokenização e rastreabilidade <br />
                <Text as="span" opacity={0.6} fontStyle="italic" fontWeight="400">do veículo em blockchain.</Text>
              </Heading>

              <Text fontSize={{ base: "lg", md: "xl" }} color="rgba(255, 255, 255, 0.6)" maxW="xl" lineHeight="tall">
                A Vetrii transforma veículos e seus componentes em ativos digitais rastreavéis, por meio de
                <Text as="span" color="white" fontWeight="semibold"> passaportes digitais inteligentes</Text> que armazenam todo o histórico do ativo — da fabricação ao fim de sua vida útil.
              </Text>
            </Stack>

            <Flex direction={{ base: "column", sm: "row" }} gap={4} w={{ base: "full", sm: "auto" }}>
              <Button
                as="a"
                // @ts-expect-error Chakra Button `as="a"` does not expose href in types
                href="#contato"
                bg="primary"
                color="white"
                size="xl"
                h="60px"
                px={10}
                borderRadius="none"
                fontSize="xs"
                fontWeight="800"
                textTransform="uppercase"
                letterSpacing="0.05em"
                _hover={{ bg: "primary", opacity: 0.9 }}
                _active={{ transform: "scale(0.98)" }}
              >
                Solicitar demonstração executiva
              </Button>
              <Button
                as="a"
                // @ts-expect-error Chakra Button `as="a"` does not expose href in types
                href="#solucoes"
                variant="outline"
                borderColor="rgba(255, 255, 255, 0.2)"
                color="white"
                size="xl"
                h="60px"
                px={10}
                borderRadius="none"
                fontSize="xs"
                fontWeight="800"
                textTransform="uppercase"
                letterSpacing="0.05em"
                _hover={{ bg: "rgba(255, 255, 255, 0.05)", borderColor: "white" }}
              >
                Soluções por segmento
              </Button>
            </Flex>

          </Stack>

          {/* Images Right - Dashboard + Mobile Passport */}
          <Box position="relative" w="full" px={{ base: 4, md: 0 }}>
            {/* Dashboard Background */}
            <Box
              borderRadius="24px"
              overflow="hidden"
              borderWidth="1px"
              borderColor="rgba(255, 255, 255, 0.08)"
              bg="rgba(255, 255, 255, 0.01)"
              position="relative"
            >
              <Image
                src="/assets/images/dashboard.jpeg"
                alt="Vetrii Dashboard"
                width={1400}
                height={800}
                style={{ width: '100%', height: 'auto', display: 'block' }}
                priority
              />
            </Box>

            {/* Passport Overlaid */}
            <Box
              position="absolute"
              bottom={{ base: "-8%", md: "-10%", lg: "-12%" }}
              right={{ base: "2%", md: "-2%", lg: "-5%" }}
              w={{ base: "140px", sm: "180px", md: "240px", lg: "280px" }}
              borderRadius="24px"
              overflow="hidden"
              borderWidth="1px"
              borderColor="rgba(255, 255, 255, 0.12)"
              bg="navy"
            >
              <Image
                src="/assets/images/passaporte-digital.jpeg"
                alt="Passaporte Digital Mobile"
                width={400}
                height={800}
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </Box>
          </Box>
        </SimpleGrid>
      </Container>

      {/* Partners Footer Section — hidden */}
    </Box>
  )
}
