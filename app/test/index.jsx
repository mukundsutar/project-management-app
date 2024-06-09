import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";
import { Button } from "react-native-paper";

export default function Test() {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <View className="h-full w-full justify-center items-center">
            <Modal
                animationType="slide"
                // transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setModalVisible(!modalVisible);
                }}
            >
                {/* modal window relative to page */}
                <View className="h-full w-full justify-center items-center">
                    {/* modal elements */}
                    <View className="justify-center items-center">
                        <Text className="text-2xl mb-5">Hello World!</Text>
                        <Pressable
                            onPress={() => setModalVisible(!modalVisible)}
                        >
                            <Button mode="elevated" className="text-red-600">
                                Hide Modal
                            </Button>
                        </Pressable>
                    </View>
                </View>
            </Modal>
            <Pressable onPress={() => setModalVisible(true)}>
                <Button mode="contained" className="text-green-700">
                    Show Modal
                </Button>
            </Pressable>
        </View>
    );
}
