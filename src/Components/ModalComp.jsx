import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from "@chakra-ui/react";
import Login from "../Routes/Login";
function ModalComponent({ isOpen, setIsOpe }) {
 
  const isClose = () => {
    setIsOpe(false);
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={isClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>LOGIN FORM</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Login />
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={isClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default ModalComponent;
