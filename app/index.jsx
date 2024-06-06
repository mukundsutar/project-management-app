import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import { router } from "expo-router";
import { FAB } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home() {
    return (
        <SafeAreaView>
            <View className="h-[84vh] justify-center items-center">
                <Text>Home</Text>

                <FAB
                    icon="plus"
                    style={styles.fab}
                    onPress={() => router.navigate("/newtask")}
                />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    fab: {
        position: "absolute",
        margin: 16,
        right: 30,
        bottom: -50,
    },
});
