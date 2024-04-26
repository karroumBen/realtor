import {
  Box,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  Button,
  Icon,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';

const ListNavBar = ({ title, handleModel, search }) => {
  return (
    <Flex
      mb={'15px'}
      as="nav"
      align="center"
      justify="space-between"
      padding="1rem"
      boxShadow="sm"
      bg={useColorModeValue('white', 'gray.800')}
      color={useColorModeValue('gray.600', 'white')}
    >
      <Text flex={1} fontSize="xl">{title}</Text>

      <Box display="flex" alignItems="center" flex={2}>
        <Flex align="center" justify="space-between" flex={1}>
          <InputGroup display="flex" gap={'10px'}>
            <InputLeftElement
              pointerEvents="none"
              children={<Icon name="search" color="gray.300" />}
            />
            <Input
              type="text"
              placeholder="Search..."
              size="md"
            />
            <Button
              size="md"
              onClick={search}
            >
              Search
            </Button>
          </InputGroup>


          <Flex display="flex" gap={'10px'} justify="space-between">

            </Flex>
              <Button
                px={6}
                ml={10}
                colorScheme="green"
                size={"md"}
                onClick={handleModel}
              >
                Create new
              </Button>
          </Flex>
      </Box>
    </Flex>
  );
};

export default ListNavBar;
