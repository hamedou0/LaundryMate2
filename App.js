import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
  Column,
} from '@chakra-ui/react';
import { Card, CardBody,} from '@chakra-ui/react';
import {  CSSReset,  Heading } from "@chakra-ui/react";
import { Logo } from './Logo';
import Example from "./Example";

function App() {
  return (
    <ChakraProvider theme={theme}>
     
    <div>
    <Card>
  <CardBody>
    <Text>LaundryMate</Text>
  </CardBody>
</Card>

    </div>
     
     
     <div>
     
     <Example/> 
     
     

     </div>

      
    </ChakraProvider>
  );
}

export default App;



