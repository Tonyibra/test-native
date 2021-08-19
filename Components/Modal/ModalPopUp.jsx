import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Modal from "react-native-modalbox";
import { Forms } from "../Forms/Forms";
export const ModalPopUp = ({ isOpen, setIsOpen }) => {
  return (
    <Modal
      style={styles.modal}
      position="center"
      backdrop={true}
      isOpen={isOpen}
      onClosed={() => setIsOpen(false)}
    >
      <View style={styles.modalTitle}>
        <Forms title="Link has been successfully sent" />
      </View>
      <View style={styles.modalText}>
        <Text>Please check your email</Text>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    justifyContent: "center",
    borderRadius: 30,
    height: 206,
    width: "80%",
  },
  modalText: {
    alignItems: "center",
  },
  modalTitle: {
    paddingHorizontal: 50,
  },
});
