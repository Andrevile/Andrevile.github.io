import { allPosts } from 'contentlayer/generated';
import Head from 'next/head';
import Link from 'next/link';

import RootLayout from '@/libs/components/layout/RootLayout';

export default function MainPage() {
  return (
    <>
      <Head>
        <title>Andrevile Blog</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <RootLayout>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {allPosts.map((post) => (
            <Link href={`/posts/${post._raw.flattenedPath}`} key={post._id}>
              {post.title}
            </Link>

            // < key={post._id}>{post.title}</h2>
          ))}
        </div>
        {/* <div className="h-24 bg-blue-200">dfsafa</div>
        <div className="h-24 bg-blue-200">dfsafa</div>
        <div className="h-24 bg-blue-200">dfsafa</div>
        <div className="h-24 bg-blue-200">dfsafa</div>
        <div className="h-24 bg-blue-200">dfsafa</div> */}
        {/* <div className="h-24 bg-blue-200">dfsafa</div>
        <div className="h-24 bg-blue-200">dfsafa</div>
        <div className="h-24 bg-blue-200">dfsafa</div>
        <div className="h-24 bg-blue-200">dfsafa</div>
        <div className="h-24 bg-blue-200">dfsafa</div>
        <div className="h-24 bg-blue-200">dfsafa</div>
        <div className="h-24 bg-blue-200">dfsafa</div>
        <div className="h-24 bg-blue-200">dfsafa</div>
        <div className="h-24 bg-blue-200">dfsafa</div>
        <div className="h-24 bg-blue-200">dfsafa</div>
        <div className="h-24 bg-blue-200">dfsafa</div>
        <div className="h-24 bg-blue-200">dfsafa</div>
        <div className="h-24 bg-blue-200">dfsafa</div>
        <div className="h-24 bg-blue-200">dfsafa</div> */}
        <div className="h-24 bg-red-200">dfsafa</div>
      </RootLayout>
    </>
  );
}
