import * as React from 'react';
import {
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  useColorModeValue,
  Flex,
  Text,
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';

const Faq = () => {
  const bg = useColorModeValue('gray.50', 'gray.700');
  const hoverBg = useColorModeValue('gray.100', 'gray.600');
  const color = useColorModeValue('gray.800', 'gray.200');

  return (
    <>
      <Box
        p={4}
        shadow="md"
        borderWidth="1px"
        borderRadius="md"
        width="50%"
        margin="0 auto"
        mt={8}
      >
        <Accordion allowToggle>
          <AccordionItem>
            <h2>
              <AccordionButton
                bg={bg}
                _hover={{ bg: hoverBg }}
                _expanded={{ bg: hoverBg }}
                borderRadius="md"
                color={color}
                p={4}
              >
                <Box flex="1" textAlign="left">
                  FAQ
                </Box>

                <ChevronDownIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} bg={bg} borderRadius="md">
              Answer 1
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Box>
      
    </>
  );
};

export default Faq;