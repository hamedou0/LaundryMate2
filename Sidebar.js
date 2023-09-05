import * as React from "react";
import { Box, Center, Image, Flex, Badge, Text } from "@chakra-ui/react";
import { Card, CardHeader, CardBody, CardFooter,Heading, Stack, StackDivider } from '@chakra-ui/react'






export default function SideBar() {
    return (
        <Card>
        
      
        <CardBody width={700} >
          <Stack divider={<StackDivider />} spacing='4'>
            <Box>
              
              <Text pt='-3' fontSize='xl' Fon>
                Gold Hall Washer 34 Has Opened Up!
              </Text>
            </Box>
            <Box>
              
              <Text pt='-3' fontSize='xl'>
                Blazer Hall Dryer 12 Has Opened Up!
              </Text>
            </Box>
            <Box>           
              <Text pt='-3' fontSize='xl'>
               Blount Hall Washer 5 Is In Use.
              </Text>
            </Box>
          </Stack>
        </CardBody>
      </Card>
    );
  }
  
  