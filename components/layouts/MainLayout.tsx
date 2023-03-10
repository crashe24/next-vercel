import Head from 'next/head';
import React, { ReactNode } from 'react';
import NavBar from '../NavBar';
import styles from './MainLayout.module.css';
import { FC } from 'react';

interface Props {
  children: ReactNode
}

const MainLayout: FC<Props> = ({children}) => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <main className={styles.main}>
        {children}
      </main>
    </>
  );
}

export default MainLayout;
