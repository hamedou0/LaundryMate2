import * as React from "react";
import { Box, Center, Image, Flex, Badge, Text } from "@chakra-ui/react";
import { MdStar } from "react-icons/md";

function Example() {
  return (
    <Flex h="100vh" alignItems="center" justifyContent="flex-start" p="5" mt="-70px">
  <Box maxW="520px" borderWidth="1px">
    <Image borderRadius="md" src="https://www.uab.edu/students/housing/media/widgetkit/BLAZER-HALL-05d8e4df846f5dade307fd056a948534.jpg" />
    <Flex align="left" mt={2}>
      <Badge colorScheme="green">UAB</Badge>
            <Text
                ml={2}
                textTransform="uppercase"
                fontSize="sm"
                fontWeight="bold"
                color="green"
      >
        
      </Text>
    </Flex>
    <Text mt={2} fontSize="xl" fontWeight="semibold" lineHeight="short">
    Supercharge Your Laundry Routine with LaundryMate

    </Text>
    <Text mt={2}>Real-Time Machine Availability Updates

    </Text>
    <Flex mt={2} align="left">
      
      <Text ml={1} fontSize="sm">
        
      </Text>
    </Flex>
      </Box>
    </Flex>

  );
}

export default Example; 