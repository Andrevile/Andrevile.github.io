import { allPosts, Post } from 'contentlayer/generated';
import { GetStaticProps } from 'next';

export const getStaticPaths = async () => {
  return {
    paths: allPosts.map((p) => ({ params: { slug: p._raw.flattenedPath.split('/') } })),
    fallback: false,
  };
};

export const getStaticProps = (async ({ params }) => {
  let post = null;
  if (!params) {
    return { props: { post: null } };
  }

  const { slug } = params;

  if (Array.isArray(slug)) {
    post = allPosts.find((post) => post._raw.flattenedPath === slug.join('/'));
  }

  if (typeof slug === 'string') {
    post = allPosts.find((post) => post._raw.flattenedPath === slug);
  }

  return {
    props: {
      post,
    },
  };
}) satisfies GetStaticProps<{ post?: Post | null }>;

export default function PostPage() {
  // console.log(slug);

  return <div></div>;
}
