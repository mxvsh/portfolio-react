import { Text } from "@chakra-ui/layout";
import { Heading } from "@chakra-ui/layout";
import { Box } from "@chakra-ui/layout";

export default function Dark() {
  return (
    <Box h="100vh" bg="black">
      <Box p={{ base: 12, md: 24 }} textColor="gray.200">
        <Heading size="2xl">It's Currently Dark Here</Heading>
        <Text mt={4} fontSize="xl">
          Come back later
        </Text>
      </Box>
    </Box>
  );
}
