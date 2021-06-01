import { Container } from "@chakra-ui/layout";
import { Box } from "@chakra-ui/layout";
import Socials from "../components/Socials";
import Head from "../components/Head";
import Posts from "../components/Posts";

export default function Home() {
  return (
    <Box>
      <Box mt={{ base: 12, md: 28 }}>
        <Container>
          <Head />
          <Socials />
          <Posts />
        </Container>
      </Box>
    </Box>
  );
}
