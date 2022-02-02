import getLocalMdx from '@utils/getLocalMdx';
import { Box, Heading } from '@chakra-ui/react';
import { MDXRemote } from 'next-mdx-remote';

export default function BlogPost({ post, frontMatter }) {
  return (
    <Box p={8}>
      <Heading as="h1" pb="1rem">
        {frontMatter.title}
      </Heading>
      <MDXRemote {...post.mdx} />
    </Box>
  );
}

export async function getStaticPaths() {
  const posts = await getLocalMdx('./posts');
  const paths = posts.map(({ slug }) => ({
    params: {
      slug: slug.split('/'),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const posts = await getLocalMdx('./posts');
  const postSlug = slug.join('/');
  const [post] = posts.filter((post) => post.slug === postSlug);

  if (!post) {
    console.warn(`No content found for slug ${postSlug}`);
  }

  return {
    props: {
      post,
      frontMatter: { ...post.data },
    },
  };
}