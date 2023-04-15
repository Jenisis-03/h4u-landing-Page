import { Flex, Box, Text, Image, Badge, useColorModeValue, Center, Heading } from '@chakra-ui/react';

interface BlogPost {
  title: string;
  image: string;
  tags: string[];
  date: string;
  excerpt: string;
}

const posts: BlogPost[] = [
  {
    title: 'Blog Post 1',
    image: 'https://source.unsplash.com/random/400x300',
    tags: ['tag1', 'tag2'],
    date: 'April 12, 2023',
    excerpt:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    title: 'Blog Post 2',
    image: 'https://source.unsplash.com/random/400x301',
    tags: ['tag1', 'tag3'],
    date: 'April 11, 2023',
    excerpt:
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    title: 'Blog Post 3',
    image: 'https://source.unsplash.com/random/400x302',
    tags: ['tag2', 'tag3'],
    date: 'April 10, 2023',
    excerpt:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  },
  {
    title: 'Blog Post 4',
    image: 'https://source.unsplash.com/random/400x303',
    tags: ['tag1', 'tag2', 'tag3'],
    date: 'April 9, 2023',
    excerpt:
      'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
];

const Blog = () => {
  return (
    <Center>
      <Heading as="h1" size="xl" mb="4">
        
      </Heading>
      <Flex flexWrap="wrap" justifyContent="center">
        {posts.map((post) => (
          <Box
            key={post.title}
            maxW="sm"
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            mx="2"
            my="4"
            boxShadow="md"
            _hover={{
              transform: 'translateY(-4px)',
              transition: 'transform .3s ease',
              cursor: 'pointer',
            }}
          >
            <Image src={post.image} alt={post.title} />
            <Flex p="6" alignItems="baseline">
              {post.tags.map((tag) => (
                <Badge key={tag} borderRadius="full" px="2" colorScheme="teal" mr="2">
                  {tag}
                </Badge>
              ))}
            </Flex>
            <Text mt="2" fontWeight="bold" lineHeight="tight" isTruncated>
              {post.title}
            </Text>
            <Text mt="2" color="gray.500" fontSize="sm">
              {post.date}
            </Text>
            <Text mt="2">{post.excerpt}</Text>
          </Box>
        ))}
      </Flex>
    </Center>
  );
};

export default Blog;
