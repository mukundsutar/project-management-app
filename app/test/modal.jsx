import { router } from "expo-router";
import React, { useEffect, useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";
import { Button } from "react-native-paper";

export default function Test() {
    const isPresented = router.canGoBack();
    return (
        <Modal
            animationType="slide"
            // transparent={true}
            visible={true}
            onRequestClose={() => {
                router.back();
            }}
        >
            {/* modal window relative to page */}
            <View className="h-full w-full justify-center items-center">
                {/* modal elements */}
                <View className="justify-center items-center">
                    <Text className="text-2xl mb-5">Hello World!</Text>
                    {!isPresented && <Link href="../">Dismiss</Link>}

                    <Pressable
                        onPress={() => {
                            router.canGoBack();
                        }}
                    >
                        <Button mode="elevated" className="text-red-600">
                            Hide Modal
                        </Button>
                    </Pressable>
                </View>
            </View>
        </Modal>
    );
}
