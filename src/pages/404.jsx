import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

export default function NotFound() {
    const router = useRouter();

    useEffect(() => router.push('/'), []);

    return (
        <Head>
            <title>Page not found</title>
        </Head>
    );
}
