import { allPosts, Post } from 'contentlayer/generated';
import { GetStaticProps } from 'next';
import { useMDXComponent } from 'next-contentlayer/hooks';

import PostLayout from '@/libs/components/layout/PostLayout';

export const getStaticPaths = async () => {
  return {
    paths: allPosts.map((p) => ({ params: { slug: p._raw.flattenedPath.split('/') } })),
    fallback: false,
  };
};

export const getStaticProps = (async ({ params }) => {
  let post = null;
  if (!params) {
    return { props: { post } };
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

export default function PostPage({ post }: { post: Post }) {
  const MDXComponent = useMDXComponent(post?.body.code || '');
  console.log('test');
  return (
    <PostLayout>
      <MDXComponent />
    </PostLayout>
  );
}
