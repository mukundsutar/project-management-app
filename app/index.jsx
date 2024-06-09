import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import { router } from "expo-router";
import { FAB } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { ApplicationProvider } from "@ui-kitten/components";
import * as eva from "@eva-design/eva";

export default function Home() {
    return (
        <SafeAreaView>
            <ApplicationProvider {...eva} theme={eva.light}>
                <View className="h-[84vh] justify-center items-center">
                    <Text>Home</Text>

                    <FAB
                        icon="plus"
                        style={styles.fab}
                        onPress={() => router.navigate("/process")}
                    />
                </View>
            </ApplicationProvider>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    fab: {
        position: "absolute",
        margin: 16,
        right: 25,
        bottom: -10,
    },
});
