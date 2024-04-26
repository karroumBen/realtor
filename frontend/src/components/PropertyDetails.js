import {
  Box,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  Button,
  useToast,
} from '@chakra-ui/react'
import { useLocation, useNavigate } from 'react-router-dom';
import { deleteProperty } from '../services/property';
import { useState } from 'react';

const PropertyDetails = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const toast = useToast();
  const { state } = useLocation();
  const {
    id,
    name,
    price,
    description,
    // rooms,
    // baths,
    // area,
    // isFurnished,
    address,
    imageLink } = state;

    const handleDeletion = () => {
      deleteProperty(id).then(() => {
        toast({
          title: 'Yuupii',
          description: "Successfully done",
          status: 'success',
          duration: 2000,
          isClosable: true,
          position: 'top-right'
        });
        navigate('/properties');
      }).catch(() => {
        toast({
          title: 'Ooopsie!',
          description: "Something went wrong, We got your back",
          status: 'error',
          duration: 2000,
          isClosable: true,
          position: 'top-right'
        })
      })
      .finally(() => {
        setIsLoading(false);
      });
    }

  return (
    <Container maxW={'7xl'}>
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 18, md: 24 }}>
        <Flex>
          <Image
            rounded={'md'}
            alt={'product image'}
            src={imageLink}
            fit={'cover'}
            align={'center'}
            w={'100%'}
            h={{ base: '100%', sm: '400px', lg: '500px' }}
          />
        </Flex>
        <Stack spacing={{ base: 6, md: 10 }}>
          <Box as={'header'}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>
              {name}
            </Heading>
            <Text
              color={useColorModeValue('gray.900', 'gray.400')}
              fontWeight={300}
              fontSize={'2xl'}>
              ${price} USD
            </Text>
          </Box>

          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={'column'}
            divider={
              <StackDivider borderColor={useColorModeValue('gray.200', 'gray.600')} />
            }>
            <VStack spacing={{ base: 4, sm: 6 }}>
              <Text
                color={useColorModeValue('gray.500', 'gray.400')}
                fontSize={'2xl'}
                fontWeight={'300'}>
                { description }
              </Text>
              <Text fontSize={'lg'}>
                {address.addressLine1}, {address.city}, {address.state} {address.zipCode}
              </Text>

              <Button
                flex={4}
                padding={4}
                fontSize={'md'}
                rounded={'md'}
                bg={'red.400'}
                color={'white'}
                boxShadow={
                  '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
                }
                _hover={{
                  bg: 'red.500',
                }}
                _focus={{
                  bg: 'red.500',
                }}
                onClick={handleDeletion}
                isLoading={isLoading}
                >
                Remove Property
              </Button>
            </VStack>
          </Stack>

          
        </Stack>
      </SimpleGrid>
    </Container>
  )
}

export default PropertyDetails;