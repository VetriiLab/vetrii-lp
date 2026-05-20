'use client'

import { Box, Container, Heading, Text, Flex, SimpleGrid, Button, Badge, Stack } from '@chakra-ui/react'
import Image from 'next/image'

const PARTNERS = [
  { name: 'DETRAN', sub: 'Paraná', src: '/assets/images/logo_detran_250x71.png', w: 125, h: 36 },
  { name: 'TECPAR', sub: 'Instituto de Tecnologia do Paraná', src: '/assets/images/logo_tecpar_232x80.png', w: 116, h: 40 },
]

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

            <Stack gap={4}>
              <Text fontSize="10px" fontWeight="800" color="rgba(255, 255, 255, 0.3)" textTransform="uppercase" letterSpacing="0.15em">
                Conformidade com
              </Text>
              <Flex gap={3} justify={{ base: "center", lg: "flex-start" }}>
                {['LGPD', 'SENATRAN', 'ESG'].map(pill => (
                  <Badge
                    key={pill}
                    bg="rgba(255, 255, 255, 0.03)"
                    color="rgba(255, 255, 255, 0.5)"
                    borderWidth="1px"
                    borderColor="rgba(255, 255, 255, 0.08)"
                    px={4}
                    py={1.5}
                    fontSize="10px"
                    borderRadius="none"
                    textTransform="none"
                    fontWeight="700"
                  >
                    {pill}
                  </Badge>
                ))}
              </Flex>
            </Stack>
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

      {/* Partners Footer Section */}
      <Box
        position="absolute"
        bottom={0}
        left={0}
        right={0}
        bg="white"
        py={8}
        borderTopWidth="1px"
        borderColor="border"
      >
        <Container maxW="1440px" mx="auto" px={{ base: 6, md: 10 }}>
          <Flex direction={{ base: "column", md: "row" }} align="center" gap={{ base: 6, md: 16 }}>
            <Text
              fontSize="10px"
              fontWeight="800"
              color="gray.400"
              textTransform="uppercase"
              letterSpacing="0.2em"
              whiteSpace="nowrap"
            >
              Parceiros institucionais
            </Text>
            <Flex gap={{ base: 8, md: 12 }} align="center" wrap="wrap" justify="center">
              {PARTNERS.map((p, i) => (
                <Image
                  key={i}
                  src={p.src}
                  alt={p.name}
                  width={p.w}
                  height={p.h}
                  style={{ opacity: 0.6, filter: 'grayscale(100%)', height: 'auto' }}
                />
              ))}
            </Flex>
          </Flex>
        </Container>
      </Box>
    </Box>
  )
}
