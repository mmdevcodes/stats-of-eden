import { Container, MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import { Analytics } from '@vercel/analytics/react';
import { PagesProgressBar as ProgressBar } from 'next-nprogress-bar';
import { type AppType } from 'next/app';
import Head from 'next/head';
import Footer from '~/components/Footer/Footer';
import Header from '~/components/Header/Header';
import { api } from '~/utils/api';
import { theme } from '../theme';

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <MantineProvider theme={theme} defaultColorScheme="dark">
      <Head>
        <title>Stats of Eden</title>
        <meta
          name="description"
          content="Stats of Eden is a website that provides statistics for the game Duelists of Eden"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <Container my="md">
          <Component {...pageProps} />
        </Container>
      </main>
      <Footer />
      <Analytics />
      <ProgressBar
        height="3px"
        color="light-dark(var(--mantine-primary-color-9), var(--mantine-primary-color-3))"
        options={{ showSpinner: true }}
        shallowRouting
      />
    </MantineProvider>
  );
};

export default api.withTRPC(MyApp);