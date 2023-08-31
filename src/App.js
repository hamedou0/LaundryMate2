import React from 'react';
import NavBar from './NavBar.js';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';

function App() {
  return (
    <>
    <NavBar />
    <ChakraProvider theme={theme}>
      
    </ChakraProvider>
    </>
  );
}

export default App;