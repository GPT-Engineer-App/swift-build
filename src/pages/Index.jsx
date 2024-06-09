import { Box, Button, Container, Heading, Link, Text, VStack } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Index = () => {
  return (
    <Container maxW="container.xl" py={10}>
      <VStack spacing={10} align="start">
        <Box>
          <Heading as="h1" size="2xl" mb={4}>
            Celerity-AI
          </Heading>
          <Text fontSize="xl" mb={6}>
            We make you more productive with the help of AI. Speed up your workflow and stop wasting time on meaningless tasks when writing.
          </Text>
          <Button colorScheme="orange" size="lg" mb={4}>
            Manage Subscription
          </Button>
          <Link as={RouterLink} to="/chrome-extension" fontSize="lg" color="blue.500">
            Link to the chrome extension
          </Link>
        </Box>
        <Box>
          <Heading as="h2" size="lg" color="purple.600" mb={2}>
            TEXT ENHANCER
          </Heading>
          <Heading as="h3" size="md" mb={4}>
            Improve, check and speed up writing
          </Heading>
          <Text fontSize="lg">
            Our text enhancer chrome extension lets you use different features to improve your work speed such as Improve text, Spell Fix, find best fitting word, continue the text.
          </Text>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;