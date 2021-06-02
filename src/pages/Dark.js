import { Button } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import { Text } from "@chakra-ui/layout";
import { Heading } from "@chakra-ui/layout";
import { Box } from "@chakra-ui/layout";
import { FiHeart, FiYoutube } from "react-icons/fi";

export default function Dark() {
  return (
    <Box h="100vh" bg="#16151A">
      <Box p={{ base: 12, md: 24 }} textColor="#7585FF">
        <Image src="/assets/dark-side.png" w={"80"} />

        <Box mt={12}>
          <Button
            size="sm"
            leftIcon={<FiYoutube />}
            bg="#7585FF"
            textColor="white"
            _hover={{ bg: "#7585FF" }}
            as="a"
            href="https://www.youtube.com/playlist?list=PL2guVjsa6dz_gAXYjciDxUblDymB4IQyk"
          >
            View on YouTube
          </Button>
        </Box>
        <Text mt={6} fontFamily="Poppins" d="flex" alignItems="center">
          <FiHeart /> <Box ml={2}>Thanks for visiting, please share.</Box>
        </Text>
      </Box>
    </Box>
  );
}
