import {
  Box,
  Button,
  Container,
  Text,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import Head from "next/head";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

export default function Home() {
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue("primary.light", "primary.dark");

  return (
    <Container
      h="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      maxW='container.sm'
    >
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box>
        <Button onClick={toggleColorMode}>
          {colorMode === "light" ? <MoonIcon /> : <SunIcon color="icon"/>}
        </Button>
        <Box
          bg={bg}
          w="100%"
          p={4}
          display="flex"
          mt="4"
          alignItems="center"
          cursor="pointer"
          borderLeft="6px solid"
          borderColor="secondary"
          borderRadius="5px"
          boxShadow='dark-lg'
        >
          <Text variant="primary" fontSize="24px" fontWeight="bold" mr="1.5rem">
            Chakra-UI Color mode in Next.Js
          </Text>
          <Button variant="primary">
            😀 open
          </Button>
        </Box>
      </Box>
    </Container>
  );
}