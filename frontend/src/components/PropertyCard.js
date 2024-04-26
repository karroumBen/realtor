import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
  Button,
} from '@chakra-ui/react'
import { useNavigate } from 'react-router';

const PropertyCard = ({ property, openForEdit }) => {

  const {
    id,
    name,
    price,
    description,
    rooms,
    baths,
    area,
    isFurnished,
    imageLink = 'https://ap.rdcpix.com/f712f91213d2c051635e0b2cc5d04794l-m1011133383rd-w1280_h960.webp'
  } = property;
  const navigate = useNavigate();

  const displayDetails = () => {
    navigate(`/property/${property.id}`, { state: property });
  }
  const handleEdition = () => {
    openForEdit(property);
  }

  return (
    <Center>
      <Box
        role={'group'}
        p={4}
        maxW={'250px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'xl'}
        rounded={'lg'}
        pos={'relative'}
        zIndex={0}>
        <Box
          rounded={'lg'}
          pos={'relative'}
          _after={{
            transition: 'all .3s ease',
            content: '""',
            w: 'full',
            h: 'full',
            pos: 'absolute',
            top: 3,
            left: 0,
            backgroundImage: `url(${imageLink})`,
            filter: 'blur(10px)',
            zIndex: -1,
          }}
          _groupHover={{
            _after: {
              filter: 'blur(20px)',
            },
          }}>
          <Image
            rounded={'lg'}
            height={180}
            width={282}
            objectFit={'cover'}
            src={imageLink}
            alt="#"
          />
        </Box>
        <Stack pt={2} align={'center'}>
          <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
          
          </Text>
          <Heading fontSize={'xl'} fontFamily={'body'} fontWeight={500}>
            {name}
          </Heading>
          <Stack direction={'row'} align={'center'}>
            <Text fontWeight={800} fontSize={'xl'}>
              ${price}
            </Text>
          </Stack>

          <Stack mt={4} direction={'row'} spacing={4}>
          <Button
            onClick={displayDetails}
            flex={6}
            fontSize={'sm'}
            rounded={'md'}
            _focus={{
              bg: 'gray.200',
            }}>
            View
          </Button>

          <Button
            flex={6}
            fontSize={'sm'}
            rounded={'md'}
            bg={'teal.400'}
            color={'white'}
            boxShadow={
              '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
            }
            _hover={{
              bg: 'teal.500',
            }}
            _focus={{
              bg: 'teal.500',
            }}
            onClick={handleEdition}
            >
            Edit
          </Button>
        </Stack>
        </Stack>
      </Box>
    </Center>
  )
}

export default PropertyCard;