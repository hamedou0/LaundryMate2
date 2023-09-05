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
  Container,
  Flex,
} from '@chakra-ui/react';
import { Card, CardBody,} from '@chakra-ui/react';
import {  CSSReset,  Heading } from "@chakra-ui/react";
import { Logo } from './Logo';
import Example from "./Example";
import Sidebar from "./Sidebar";

function App() {
  return (
    <ChakraProvider theme={theme}>
     <Flex justifyContent='flex-start' p={4} >
        <div>
            <Card bg='blue.400'>
              <CardBody>
                <Text>LaundryMate</Text>
              </CardBody>
          </Card>
        </div>
    </Flex>
    <Flex>
        <div>
          <Example/>
         </div>
       <div>
          <Sidebar/>
        </div> 
    </Flex>
      
    </ChakraProvider>
  );
}

export default App;



