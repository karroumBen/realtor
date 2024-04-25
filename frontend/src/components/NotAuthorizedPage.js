import { Box, Heading, Text, Button } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

export default function NotFound() {
  const navigate = useNavigate();
  const navigateBackHome = () => {
    navigate('/');
  }
  return (
    <Box textAlign="center" py={10} px={6}>
      <Heading
        display="inline-block"
        as="h2"
        size="2xl"
        bgGradient="linear(to-r, teal.400, teal.600)"
        backgroundClip="text">
        403
      </Heading>
      <Text fontSize="18px" mt={3} mb={2}>
        Unauthorized page
      </Text>
      <Text color={'gray.500'} mb={6}>
        You do not have access to this page;
      </Text>

      <Button
        colorScheme="teal"
        bgGradient="linear(to-r, teal.400, teal.500, teal.600)"
        color="white"
        variant="solid"
        onClick={navigateBackHome}
      >
        Go to Home
      </Button>
    </Box>
  )
}