import "react-native-gesture-handler";
import React from "react";
import { Drawer } from "expo-router/drawer";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { ApplicationProvider } from "@ui-kitten/components";
import * as eva from "@eva-design/eva";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button } from "react-native";
import { Text } from "react-native";
import { Stack } from "expo-router";

export default function DrawerLayout() {
    return (
        <>
            <ApplicationProvider {...eva} theme={eva.light}>
                <GestureHandlerRootView style={{ flex: 1 }}>
                    <Drawer
                        initialRouteName="schedule"
                        screenOptions={{
                            drawerHideStatusBarOnOpen: true,
                        }}
                    >
                        <Drawer.Screen
                            name="index"
                            options={{
                                drawerLabel: "Home",
                                title: "Welcome to Home!",
                            }}
                        />
                        <Drawer.Screen
                            name="schedule"
                            options={{
                                drawerLabel: "Schedule",
                                title: "Plan Schedule",
                            }}
                        />
                        <Drawer.Screen
                            name="process"
                            options={{
                                drawerLabel: "Process",
                                title: "Entire Process",
                            }}
                        />
                        <Drawer.Screen
                            name="newtask"
                            options={{
                                drawerLabel: "Add a new Task",
                                title: "New Task",
                            }}
                        />
                        <Drawer.Screen
                            name="profile"
                            options={{
                                drawerLabel: "Profile",
                                title: "Welcome to Profile!",
                            }}
                        />
                    </Drawer>
                </GestureHandlerRootView>
            </ApplicationProvider>
        </>
    );
}
