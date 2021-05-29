import { Image } from "@chakra-ui/image";
import { Text } from "@chakra-ui/layout";
import { Stack } from "@chakra-ui/layout";
import { Heading } from "@chakra-ui/layout";
import { Flex } from "@chakra-ui/layout";
import { Box } from "@chakra-ui/layout";
import { Tag } from "@chakra-ui/tag";

const Post = ({ image, title, description, tags = [] }) => {
  return (
    <Box p={4} borderWidth="1px" borderRadius="lg" shadow="md">
      <Flex>
        <Image borderRadius="lg" w={"44"} src={image} />
        <Box ml={2}>
          <Heading size="sm">{title}</Heading>
          <Text mt={2} noOfLines={3}>
            {description}
          </Text>
        </Box>
      </Flex>
      <Flex mt={4}>
        {tags.map((tag) => (
          <Tag mr={1} size="sm" colorScheme="red">
            {tag}
          </Tag>
        ))}
      </Flex>
    </Box>
  );
};

export default () => {
  return (
    <Box mt={12} mb={12}>
      <Heading mb={4}>Recent Posts</Heading>
      <Stack spacing={4} _hover={{ cursor: "pointer" }}>
        <Post
          title=" Commodo excepteur nostrud labore id qui non."
          description="Consectetur labore Lorem tempor ex do commodo ad qui est elit sit
          aliquip sit. Quis officia exercitation eiusmod velit amet fugiat
          laborum et. Consectetur labore Lorem tempor ex do commodo ad qui est
          elit sit aliquip sit. Quis officia exercitation eiusmod velit amet
          fugiat laborum et."
          image="https://images.unsplash.com/photo-1559705421-4ae9bf6fabb5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
          tags={["node.js", "js", "webdev"]}
        />
        <Post
          title=" Commodo excepteur nostrud labore id qui non."
          description="Consectetur labore Lorem tempor ex do commodo ad qui est elit sit
          aliquip sit. Quis officia exercitation eiusmod velit amet fugiat
          laborum et. Consectetur labore Lorem tempor ex do commodo ad qui est
          elit sit aliquip sit. Quis officia exercitation eiusmod velit amet
          fugiat laborum et."
          image="https://images.unsplash.com/photo-1559705421-4ae9bf6fabb5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
          tags={["django", "py", "python"]}
        />
        <Post
          title=" Commodo excepteur nostrud labore id qui non."
          description="Consectetur labore Lorem tempor ex do commodo ad qui est elit sit
          aliquip sit. Quis officia exercitation eiusmod velit amet fugiat
          laborum et. Consectetur labore Lorem tempor ex do commodo ad qui est
          elit sit aliquip sit. Quis officia exercitation eiusmod velit amet
          fugiat laborum et."
          image="https://images.unsplash.com/photo-1559705421-4ae9bf6fabb5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
          tags={["ruby", "react", "java"]}
        />
      </Stack>
    </Box>
  );
};
