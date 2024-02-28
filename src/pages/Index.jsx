import { Box, Container, VStack, Heading, Text, SimpleGrid, Image, Button, Icon, Link, FormControl, FormLabel, Input, Textarea, useColorModeValue } from "@chakra-ui/react";
import { FaDownload, FaEnvelope, FaTwitter, FaGithub } from "react-icons/fa";

const Index = () => {
  const bgColor = useColorModeValue("purple.100", "gray.700");
  const color = useColorModeValue("gray.800", "white");
  const borderColor = useColorModeValue("purple.500", "purple.200");

  return (
    <Box bg={bgColor} color={color}>
      <Container maxW="container.xl" py={10}>
        {/* Hero Section */}
        <VStack spacing={4} textAlign="center">
          <Heading as="h1" size="2xl">
            SquawkSquad
          </Heading>
          <Text fontSize="lg">Crafting Minecraft Mods and Applications with Excellence</Text>
          <Button colorScheme="purple" leftIcon={<FaDownload />} size="lg" mt={3}>
            Download Mods
          </Button>
        </VStack>

        {/* Mods Showcase Section */}
        <Box py={20}>
          <Heading as="h2" size="xl" mb={10} textAlign="center">
            Featured Mods
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
            {/* Repeat this for multiple mods */}
            <VStack bg="white" boxShadow="md" padding={5} borderRadius="md" borderColor={borderColor} borderWidth={1}>
              <Image src="https://images.unsplash.com/photo-1587573089734-09cb69c0f2b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtaW5lY3JhZnQlMjBtb2R8ZW58MHx8fHwxNzA5MTU1NDQwfDA&ixlib=rb-4.0.3&q=80&w=1080" borderRadius="md" />
              <Heading as="h3" size="md">
                Mod Name
              </Heading>
              <Text>Brief description of the mod, what it adds or changes in the game.</Text>
            </VStack>
            {/* End of a single mod showcase */}
          </SimpleGrid>
        </Box>

        {/* Services Section */}
        <Box py={20}>
          <Heading as="h2" size="xl" mb={10} textAlign="center">
            Our Services
          </Heading>
          <Text textAlign="center" mb={10}>
            We offer a wide range of services to enhance your Minecraft experience.
          </Text>
          {/* List Services here */}
        </Box>

        {/* Contact Section */}
        <Box py={20} bg="black" color="white" borderRadius="md">
          <VStack spacing={5}>
            <Heading as="h3" size="lg">
              Get in Touch
            </Heading>
            <Text>Interested in our services or have a question? Send us a message!</Text>
            <FormControl id="email" isRequired>
              <FormLabel>Email Address</FormLabel>
              <Input type="email" />
            </FormControl>
            <FormControl id="message" isRequired>
              <FormLabel>Message</FormLabel>
              <Textarea />
            </FormControl>
            <Button colorScheme="purple" leftIcon={<FaEnvelope />}>
              Send Message
            </Button>
          </VStack>
        </Box>

        {/* Footer */}
        <Box py={5} textAlign="center">
          <Text>Follow us on social media</Text>
          <Link href="https://twitter.com/squawksquad" isExternal>
            <Icon as={FaTwitter} w={6} h={6} m={2} />
          </Link>
          <Link href="https://github.com/squawksquad" isExternal>
            <Icon as={FaGithub} w={6} h={6} m={2} />
          </Link>
        </Box>
      </Container>
    </Box>
  );
};

export default Index;
