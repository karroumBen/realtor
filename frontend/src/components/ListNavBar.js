import React, { useState } from 'react';
import {
  Box,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  Button,
  Select,
  IconButton,
  Icon,
  Text,
  useColorModeValue,
  FormControl,
} from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { useSelector } from 'react-redux';

const ListNavBar = ({ title, handleModel, paginate }) => {
  const auth = useSelector(state => state.auth);
  const [itemsPerPage, setItemsPerPage] = useState(5);

  const setPagination = (e) => {
    setItemsPerPage(e.target.value);
    paginate(+e.target.value);
  }

  const search = () => {

  }

  const nextPage = () => {

  }
  const previousPage = () => {

  }
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
            <IconButton
              ml="4"
              size="sm"
              aria-label="Previous Page"
              icon={<ChevronLeftIcon />}
              onClick={nextPage}
            />

              
            <FormControl>
              <Select
                mx="2"
                size="sm"
                value={itemsPerPage}
                onChange={setPagination}
              >
                <option value={5}>5</option>
                <option value={15}>15</option>
                <option value={25}>25</option>
              </Select>
            </FormControl>

            <IconButton
              ml="4"
              size="sm"
              aria-label="Next Page"
              icon={<ChevronRightIcon />}
              onClick={previousPage}
            />

          </Flex>
          {
            auth.isSeller && 
            <Button
              px={6}
              ml={10}
              colorScheme="green"
              size={"md"}
              onClick={handleModel}
            >
              Create new
            </Button>
          }
        </Flex>
      </Box>
    </Flex>
  );
};

export default ListNavBar;
