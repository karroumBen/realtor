import { useState } from 'react'
import {
  ChakraProvider,
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
  useToast,
} from '@chakra-ui/react'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import { register } from '../../services/auth'
import { useNavigate } from 'react-router'

const Register = () => {
  const navigate = useNavigate();
  const toast = useToast();
  const [userDetails, setUserDetails] = useState({
    firstName: '',
    lastName: '',
    username: '',
    password: '',
  })
  const [showPassword, setShowPassword] = useState(false)


  const handleInputChange = (e) => {
    setUserDetails({...userDetails, [e.target.name]: e.target.value})
  }
  const handleFormSubmition = (e) => {
    e.preventDefault();
    const { firstName, lastName } = userDetails;
    userDetails.name = firstName + lastName;

    register(userDetails).then(() => {
      toast({
        title: 'Yuupii',
        description: "Successfully done",
        status: 'success',
        duration: 2000,
        isClosable: true,
        position: 'top-right'
      })
      navigate('/login');
    }).catch(() => {
      toast({
        title: 'Ooopsie!',
        description: "Something went wrong, please do not freak out",
        status: 'error',
        duration: 2000,
        isClosable: true,
        position: 'top-right'
      })
    })
  }

  return (
    <ChakraProvider>
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'} textAlign={'center'}>
              Sign up
            </Heading>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <HStack>
                <Box>
                  <FormControl id="firstName" isRequired>
                    <FormLabel>First Name</FormLabel>
                    <Input
                      type="text"
                      placeholder="John"
                      name="firstName"
                      isRequired
                      value={userDetails.firstName}
                      onChange={handleInputChange}
                    />
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id="lastName">
                    <FormLabel>Last Name</FormLabel>
                    <Input
                      type="text"
                      placeholder="Doe"
                      name="lastName"
                      value={userDetails.lastName}
                      onChange={handleInputChange} />
                  </FormControl>
                </Box>
              </HStack>

              <FormControl id="username" isRequired>
                <FormLabel>Email address</FormLabel>
                <Input
                  type="email"
                  name="username"
                  isRequired
                  value={userDetails.username}
                  onChange={handleInputChange}/>
              </FormControl>

              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input
                    isRequired
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Password"
                    name="password"
                    value={userDetails.password}
                    onChange={handleInputChange}
                  />

                  <InputRightElement h={'full'}>
                    <Button
                      variant={'ghost'}
                      onClick={() => setShowPassword((showPassword) => !showPassword)}>
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>

              <Stack spacing={10} pt={2}>
                <Button
                  onClick={handleFormSubmition}
                  loadingText="Submitting"
                  size="lg"
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}>
                  Sign up
                </Button>
              </Stack>
              <Stack pt={6}>
                <Text align={'center'}>
                  Already a user? <Link href='/login' color={'blue.400'}>Login</Link>
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </ChakraProvider>
  )
}

export default Register;