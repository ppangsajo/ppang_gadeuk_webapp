import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Main,
  Header,
  Center,
  P,
  Nav,
  Button,
} from '../styles/MainScreenStyles';
import Card from '../components/MainScreenCards';
import PageHeader from '../components/PageHeader';

function MainScreen() {
  useEffect(() => {
    document.body.className = 'body-MainScreen';
    return () => {
      document.body.className = '';
    };
  }, []);

  return (
    <Main>
      <PageHeader />
      <Center>
        <P>ppang gadeuk</P>
        <Card />
      </Center>
    </Main>
  );
}

export default MainScreen;
