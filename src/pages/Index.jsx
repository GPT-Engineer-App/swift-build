import { Box, Button, Container, Heading, Link, Text, VStack, Flex, HStack, Icon } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { FaSpellCheck, FaTextHeight, FaExchangeAlt } from "react-icons/fa";

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
          <Text fontSize="lg" mb={6}>
            Our text enhancer chrome extension lets you use different features to improve your work speed such as Improve text, Spell Fix, find best fitting word, continue the text.
          </Text>
          <Box bg="gray.100" p={6} borderRadius="md" boxShadow="md">
            <Heading as="h4" size="md" mb={4}>
              Example Text
            </Heading>
            <Text fontSize="md" mb={4} color="red.500">
              aricifual inttlelince is really exiting it, the calbites of a nuroalnetwork iks beond what a normal alogthgimc systrem can do in many domains its reallly faciasating. Esspcaly in the fild or writhijng and text comprehansion whte the transformers modles really chine. It can alomost peorfuclty preductive words and undetsand text.
            </Text>
            <Box bg="yellow.100" p={4} borderRadius="md" boxShadow="md">
              <Heading as="h5" size="sm" mb={2}>
                Celerity-Ai: Spell Fix
              </Heading>
              <Text fontSize="md" color="green.600">
                Artificial Intelligence is really exciting. The capabilities of a neural network are beyond what a normal algorithmic system can do in many domains. It's really fascinating. Especially in the field of writing and text comprehension where the transformer models really shine. It can almost perfectly predict words and understand text.
              </Text>
            </Box>
          </Box>
          <Box mt={10}>
            <Heading as="h4" size="md" mb={4}>
              Some of our text operations
            </Heading>
            <Text fontSize="md" mb={6}>
              All of the following operations can be done by highlighting and right-clicking, or using a keyboard shortcut. They can all increase productivity massively if used correctly. (You can customize all the keyboard shortcuts.)
            </Text>
            <VStack spacing={5} align="start">
              <HStack>
                <Icon as={FaSpellCheck} boxSize={6} color="blue.500" />
                <Text fontSize="md">
                  <strong>Fix all spelling:</strong> Highlight the text and right-click to choose spell fix and fix all of the spelling mistakes at once. (Ctrl+Alt+S)
                </Text>
              </HStack>
              <HStack>
                <Icon as={FaTextHeight} boxSize={6} color="blue.500" />
                <Text fontSize="md">
                  <strong>Improve Text:</strong> Improve your text and fix not only spelling but also grammar, structure and improve vocabulary (Ctrl+Q)
                </Text>
              </HStack>
              <HStack>
                <Icon as={FaExchangeAlt} boxSize={6} color="blue.500" />
                <Text fontSize="md">
                  <strong>Replace Best Fit:</strong> Allows you to replace something with x and find the best matching word for x. Can be used to find synonyms. (Shift+Ctrl+F)
                </Text>
              </HStack>
            </VStack>
          </Box>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;