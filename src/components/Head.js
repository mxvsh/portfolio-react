import { useColorMode } from "@chakra-ui/color-mode";
import { Image } from "@chakra-ui/image";
import { Flex, Heading, HStack, Spacer, Stack, Text } from "@chakra-ui/layout";
import { Box } from "@chakra-ui/layout";
import { Switch } from "@chakra-ui/switch";
import { FiMoon, FiSun } from "react-icons/fi";

export default () => {
  const { colorMode, setColorMode } = useColorMode();
  return (
    <Box>
      <Image mb={4} src={`/assets/logo-light.png`} w={12} />
      <Flex alignItems="center">
        <Heading>XenCodes</Heading>
        <Spacer />
        <Flex>
          <HStack>
            <FiSun />
            <Switch
              defaultChecked={colorMode === "dark"}
              _focus={{ border: "0 !important" }}
              colorScheme="red"
              onChange={(e) => {
                setColorMode(e.target.checked ? "dark" : "light");
              }}
            />
            <FiMoon />
          </HStack>
        </Flex>
      </Flex>
      <Text>Passionate Developer</Text>

      <Stack spacing={8} mt={4}>
        <Text>
          I've been passionate about everything that relates to something called
          CPU since I was a kid. I love to know deeper inside of a processing
          unit, how it works, and I've always imagined what goes on beneath
          these tiny things. But that is something that's always been a mystry
          to me.
        </Text>
        <Text>
          But now, I've now become something called a developer, I've built
          several programs or so called softwares and tools, and developed
          dozens of websites. But the most I love to enjoy working on is my
          favorite "web development". I'm both front and back -end developer,
          with experience in React, Express, Nest, Mongo and more. And I've a
          love-hate relationship with JavaScript.
        </Text>
      </Stack>
    </Box>
  );
};
