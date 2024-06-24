import React, { useState } from "react";
import { Container, VStack, Heading, Text, Box, Image, Link } from "@chakra-ui/react";
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";
import AddBlogPost from "../components/AddBlogPost";

const Index = () => {
  const [posts, setPosts] = useState([
    {
      title: "Understanding React Hooks",
      content: "A deep dive into the world of React Hooks and how they can simplify your code.",
      date: "2023-01-01T00:00:00.000Z"
    },
    {
      title: "JavaScript ES2021 Features",
      content: "An overview of the latest features introduced in JavaScript ES2021.",
      date: "2023-01-02T00:00:00.000Z"
    }
  ]);

  const addPost = (newPost) => {
    setPosts([newPost, ...posts]);
  };

  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={8} align="stretch">
        <Box textAlign="center">
          <Heading as="h1" size="2xl" mb={4}>Welcome to My Blog</Heading>
          <Text fontSize="lg">Sharing my thoughts and experiences on web development, technology, and life.</Text>
        </Box>
        <Box>
          <Image borderRadius="md" src="/images/blog-banner.jpg" alt="Blog Banner" />
        </Box>
        <Box mb={8}>
          <Heading as="h2" size="lg" mb={4}>Add New Post</Heading>
          <AddBlogPost onAddPost={addPost} />
        </Box>
        <Box>
          <Heading as="h2" size="lg" mb={4}>Recent Posts</Heading>
          <VStack spacing={4} align="stretch">
            {posts.map((post, index) => (
              <Box key={index} p={5} shadow="md" borderWidth="1px" borderRadius="md">
                <Heading fontSize="xl">{post.title}</Heading>
                <Text mt={4}>{post.content}</Text>
                <Text mt={2} fontSize="sm" color="gray.500">
                  {new Date(post.date).toLocaleDateString()}
                </Text>
              </Box>
            ))}
          </VStack>
        </Box>
        <Box textAlign="center">
          <Heading as="h2" size="lg" mb={4}>Follow Me</Heading>
          <VStack spacing={4}>
            <Link href="https://twitter.com" isExternal>
              <FaTwitter size="24px" />
            </Link>
            <Link href="https://github.com" isExternal>
              <FaGithub size="24px" />
            </Link>
            <Link href="https://linkedin.com" isExternal>
              <FaLinkedin size="24px" />
            </Link>
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;