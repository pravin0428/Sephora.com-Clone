import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button
  } from "@chakra-ui/react";
  
  function ModalComponent({ isOpen, setIsOpe }) {
    //  console.log(datax)
    // const { onClose } = useDisclosure()
    const isClose = () => {
      setIsOpe(false);
    };
  
    return (
      <>
        <Button onClick={isOpen}>Open Modal</Button>
  
        <Modal isOpen={isOpen} onClose={isClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader> title is here</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <div>hey its my first modal comp</div>
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={isClose}>
                Close
              </Button>
              <Button variant="ghost">Secondary Action</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    );
  }
  
  export default ModalComponent;