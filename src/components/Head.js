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
      <Image mb={4} src={`/assets/logo-${colorMode}.png`} w={12} />
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
      <Text>Passionate Developer.</Text>

      <Stack spacing={8} mt={6}>
        <Text>
          Esse voluptate sit aute ipsum ullamco nulla consectetur veniam aute
          laborum. Minim consectetur culpa quis esse adipisicing id ullamco
          nulla. Non voluptate voluptate minim est incididunt eu eu dolor fugiat
          do. Occaecat ut labore proident ipsum culpa. Veniam consectetur enim
          ea nisi cillum nisi ad ea et. Do amet deserunt commodo officia
          exercitation enim. Laborum consequat sint anim ullamco sunt aliqua
          amet ullamco qui fugiat tempor.
        </Text>
      </Stack>
    </Box>
  );
};
