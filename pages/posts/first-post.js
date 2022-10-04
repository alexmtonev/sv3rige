import Head from 'next/head';
import Link from 'next/link';

export default function FirstPost() {
    return (
    <>
        <Head>
            <title>My react app</title>
        </Head>
        <h1>First Post</h1>
        <h2>
          <Link href="/">Back to home</Link>
        </h2>
      </>
    );
}