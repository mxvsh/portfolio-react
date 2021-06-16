import {
  Avatar,
  Box,
  Center,
  Flex,
  GridItem,
  Heading,
  HStack,
  Image,
  Progress,
  SimpleGrid,
  Spacer,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";

import {
  FiCalendar,
  FiMail,
  FiNavigation,
  FiTwitter,
  FiUser,
} from "react-icons/fi";
import { AiOutlineGithub, AiOutlineInstagram } from "react-icons/ai";

export default () => {
  const Header = () => (
    <Box p={3} borderWidth="1px">
      <Heading>Resume</Heading>
    </Box>
  );

  const ProfileItem = ({ title, icon, value }) => (
    <Box>
      <Flex alignItems="center">
        <Box mr={2}>{icon}</Box>
        <Heading fontSize="md">{title}</Heading>
        <Spacer />
        <Text>{value}</Text>
      </Flex>
    </Box>
  );

  const ExperienceItem = ({ title, value, color }) => (
    <Box>
      <Heading fontSize="lg">{title}</Heading>
      <Progress mt={2} colorScheme={color || "green"} size="sm" value={value} />
    </Box>
  );

  return (
    <Box>
      <SimpleGrid
        columns={{ base: 1, lg: 10 }}
        p={4}
        spacing={{ base: 0, lg: 4 }}
      >
        <GridItem colSpan={3}>
          <VStack>
            <Image borderRadius="full" w={24} src="/assets/profile.jpeg" />
            <Heading fontSize={24}>Xen</Heading>
            <Text fontSize={18} mt={2}>
              Passionate Developer
            </Text>
          </VStack>
          <Stack spacing={4} p={4} bg="gray.200" borderRadius="lg" mt={6}>
            <Heading fontSize="lg">About();</Heading>
            <Text mb={6}>
              <b>Hello, I am a passionate developer from India.</b> I love to
              code and it's my hobby. I've been coding for the past 5 years,
              <br />I started with HTML, CSS and JS then move on to PHP. I've
              worked with PHP for almost 2 years, then I switched to Node.js as
              it was popular.
            </Text>
            <ProfileItem
              title="Full name"
              value="Monawwar Abdullah"
              icon={<FiUser />}
            />
            <ProfileItem
              title="Email"
              value="xencodes@icloud.com"
              icon={<FiMail />}
            />
            <ProfileItem
              title="Location"
              value="India"
              icon={<FiNavigation />}
            />
            <ProfileItem title="Age" value="20 years" icon={<FiCalendar />} />
          </Stack>
          <Stack spacing={4} p={4} bg="#ffe1c3" borderRadius="lg" mt={6}>
            <Heading fontSize="lg">Socials();</Heading>
            <ProfileItem
              title="Twitter"
              value="@xencodes"
              icon={<FiTwitter />}
            />

            <ProfileItem
              title="Instagram"
              value="@xen.codes"
              icon={<AiOutlineInstagram />}
            />
            <ProfileItem
              title="GitHub"
              value="@xencodes"
              icon={<AiOutlineGithub />}
            />
          </Stack>
        </GridItem>
        <GridItem colSpan={7} mt={4}>
          <SimpleGrid columns={2} spacing={3}>
            <GridItem>
              <Box p={4} borderRadius="lg" borderWidth="1px">
                <Heading>Frontend</Heading>
                <Stack mt={4} spacing={4}>
                  <ExperienceItem title="React JS" value={98} />
                  <ExperienceItem title="Angular JS" value={50} />
                  <ExperienceItem title="Vue JS" value={50} />
                </Stack>
              </Box>
            </GridItem>
            <GridItem>
              <Box p={4} borderRadius="lg" borderWidth="1px">
                <Heading>Backend</Heading>
                <Stack mt={4} spacing={4}>
                  <ExperienceItem color="red" title="Express JS" value={90} />
                  <ExperienceItem color="red" title="Strapi" value={90} />
                  <ExperienceItem color="red" title="Nest.JS" value={60} />
                </Stack>
              </Box>
            </GridItem>
            <GridItem colSpan={2}>
              <Box p={4} borderRadius="lg" borderWidth="1px">
                <Heading>Other Skills</Heading>
                <Stack mt={4} spacing={4}>
                  <ExperienceItem
                    color="purple"
                    title="React Native"
                    value={85}
                  />
                  <ExperienceItem color="purple" title="Database" value={60} />
                  <ExperienceItem
                    color="purple"
                    title="Desigining"
                    value={85}
                  />
                  <ExperienceItem
                    color="purple"
                    title="Networking"
                    value={20}
                  />
                  <ExperienceItem
                    color="purple"
                    title="Networking"
                    value={20}
                  />
                </Stack>
              </Box>
            </GridItem>
          </SimpleGrid>
        </GridItem>
      </SimpleGrid>
    </Box>
  );
};
