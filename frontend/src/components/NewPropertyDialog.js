import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  useToast
} from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { addProperty, updateProperty } from "../services/property";

const INITIAL_STATE = {
  name: '',
    price: 0,
    description: '',
    rooms: 2,
    baths: 1,
    area: 100,
    isFurnished: false,
    imageLink: 'https://ap.rdcpix.com/f712f91213d2c051635e0b2cc5d04794l-m1011133383rd-w1280_h960.webp',
    addressLine1: "",
    addressLine2: null,
    city: "",
    state: "",
    zipCode: ""
}

// eslint-disable-next-line react/prop-types
const NewPropertyDialog = ({ closeModal, reloadItems, editProperty }) => {
  const toast = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [propertyDetails, setPropertyDetails] = useState(INITIAL_STATE);
  const { isOpen, onOpen, onClose } = useDisclosure()

  const handleCloseModal = () => {
    onClose();
    closeModal();
  }

  const handleInputChange = (e) => {
    setPropertyDetails({...propertyDetails, [e.target.name]: e.target.value})
  }

  const handleFormSubmition = (e) => {
    e.preventDefault();
    setIsLoading(true);
    const {addressLine1, addressLine2, city, state, zipCode, address } = propertyDetails;
    const { id } = editProperty || {};
    const payload = {
      ...propertyDetails,
      address: {
        addressLine1,
        addressLine2,
        city,
        state,
        zipCode
      }
    }
    // this is for updating a record
    if(id) {
      payload.address['id'] = address.id;
      updateProperty(payload).then(() => {
        toast({
          title: 'Yuupii',
          description: "Successfully done",
          status: 'success',
          duration: 2000,
          isClosable: true,
          position: 'top-right'
        });
  
        handleCloseModal();
        reloadItems();
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

      return;
    }
    // this is for adding new record
    addProperty(payload).then(() => {
      toast({
        title: 'Yuupii',
        description: "Successfully done",
        status: 'success',
        duration: 2000,
        isClosable: true,
        position: 'top-right'
      });

      handleCloseModal();
      reloadItems();
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

  useEffect(() => {
    onOpen();
    if(editProperty.id) {
      // eslint-disable-next-line react/prop-types
      const { address } = editProperty;
      setPropertyDetails({
        ...editProperty,
        addressLine1: address.addressLine1,
        addressLine2: address.addressLine2,
        city: address.city,
        state: address.state,
        zipCode: address.zipCode,
      });
    }
  }, [])

  return (
    <>
      <Modal
        closeOnOverlayClick={false}
        isOpen={isOpen}
        onClose={handleCloseModal}
        size={'xl'}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>New Property</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input
                type="text"
                placeholder="Mension"
                name="name"
                isRequired
                value={propertyDetails.name}
                onChange={handleInputChange}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Description</FormLabel>
              <Input
                type="text"
                placeholder="Property Description"
                name="description"
                isRequired
                value={propertyDetails.description}
                onChange={handleInputChange}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Price</FormLabel>
              <Input
                type="number"
                name="price"
                isRequired
                value={propertyDetails.price}
                onChange={handleInputChange}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Rooms</FormLabel>
              <Input
                type="number"
                name="rooms"
                isRequired
                value={propertyDetails.rooms}
                onChange={handleInputChange}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Baths</FormLabel>
              <Input
                type="number"
                name="baths"
                isRequired
                value={propertyDetails.baths}
                onChange={handleInputChange}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Image</FormLabel>
              <Input
                type="text"
                placeholder="https://test.com/imagelink"
                name="imageLink"
                isRequired
                value={propertyDetails.imageLink}
                onChange={handleInputChange}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Street</FormLabel>
              <Input
                type="text"
                name="addressLine1"
                isRequired
                value={propertyDetails.addressLine1}
                onChange={handleInputChange}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>State</FormLabel>
              <Input
                type="text"
                name="state"
                isRequired
                value={propertyDetails.state}
                onChange={handleInputChange}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>City</FormLabel>
              <Input
                type="text"
                name="city"
                isRequired
                value={propertyDetails.city}
                onChange={handleInputChange}
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Zip code</FormLabel>
              <Input
                type="text"
                name="zipCode"
                isRequired
                value={propertyDetails.zipCode}
                onChange={handleInputChange}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme='blue'
              mr={3}
              onClick={handleFormSubmition}
              isLoading={isLoading}
            >
              Save
            </Button>
            <Button onClick={handleCloseModal}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}


export default NewPropertyDialog;