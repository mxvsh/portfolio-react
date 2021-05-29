import { Box, Flex, Text } from "@chakra-ui/layout";
import { FiInstagram, FiTwitter } from "react-icons/fi";

export default () => {
  const Socials = [
    {
      name: "Twitter",
      icon: <FiTwitter />,
      color: "twitter.500",
      link: "https://twitter.com/xencodes",
    },
    {
      name: "Instagram",
      icon: <FiInstagram />,
      color: "red.400",
      link: "https://instagram.com/xen.codes",
    },
  ];

  return (
    <Box mt={8}>
      <Flex>
        Follow me on{" "}
        {Socials.map((social, index) => (
          <>
            {index !== 0 && index != Socials.length - 1 ? (
              <Text mr={2}>,</Text>
            ) : (
              <Text mx={2}>and</Text>
            )}
            <Flex
              alignItems="center"
              textColor={social.color}
              as="a"
              href={social.link}
              target="_blank"
            >
              {social.icon} <Text ml={1}>{social.name}</Text>
            </Flex>
          </>
        ))}
        <Text mx={1}>!</Text>
      </Flex>
    </Box>
  );
};
