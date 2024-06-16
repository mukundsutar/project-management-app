import { View, Text } from "react-native";
import React from "react";
import { Slot, Stack } from "expo-router";

export default function Layout() {
    return (
        <Stack>
            <Stack.Screen
                name="modal"
                options={{
                    // Set the presentation mode to modal for our modal route.
                    presentation: "modal",
                    headerShown: false,
                }}
            />
        </Stack>
    );
}
