import { Box, Flex, Link, Button, Spacer, Image } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Box bg="white" px={4} py={2} boxShadow="md">
      <Flex alignItems="center">
        <Image src="/logo.png" alt="Celerity-AI Logo" boxSize="50px" />
        <Spacer />
        <Flex alignItems="center">
          <Link as={RouterLink} to="/product" mx={2}>
            Product
          </Link>
          <Link as={RouterLink} to="/pricing" mx={2}>
            Pricing
          </Link>
          <Link as={RouterLink} to="/tutorial" mx={2}>
            Tutorial
          </Link>
          <Link as={RouterLink} to="/account" mx={2}>
            User Account Management
          </Link>
          <Button colorScheme="orange" mx={2}>
            Manage Subscription
          </Button>
          <Link as={RouterLink} to="/logout" mx={2}>
            Log out
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;