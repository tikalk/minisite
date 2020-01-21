import React from 'react';
import Head from 'next/head';
import * as Styled from './styled-components';
import Nav from '../components/nav';

interface IMainProps {}

const Main: React.FunctionComponent<IMainProps> = ({ children }) => {
    return (
        <Styled.Container>
            <Head>
                <title>Home</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Nav />
            {children}
        </Styled.Container>
    );
};

export default Main;
