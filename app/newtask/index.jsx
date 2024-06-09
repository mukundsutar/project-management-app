import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import {
    ActivityIndicator,
    Button,
    Chip,
    MD2Colors,
    TextInput,
} from "react-native-paper";
import { router } from "expo-router";
import { supabase } from "../../lib/supabase";

export default function NewTask() {
    const [title, setTitle] = useState("");
    const [task, setTask] = useState("");
    const [chipData, setChipData] = useState({
        requirement: false,
        material: false,
        prototype: false,
        production: false,
        rework: false,
        delivery: false,
    });
    const [isLoading, setIsLoading] = useState(false);

    async function insertTask() {
        setIsLoading(true);

        var insertArray = [];
        for (const key in chipData) {
            if (chipData[key] == true) {
                insertArray.push(key);
            }
        }

        const { error } = await supabase.from("taskList").insert({
            title,
            task,
            category: insertArray,
        });

        setTimeout(() => {
            setIsLoading(false);
            router.navigate({ pathname: "/schedule", param: { id: 1 } });
        }, 200);
    }

    function handlePress(key) {
        setChipData((prevState) => ({
            ...prevState,
            [key]: !prevState[key],
        }));
    }

    const chipStyle = { fontSize: 16, padding: 3 };

    return (
        <View className="h-full w-full p-5 items-center space-y-6">
            <TextInput
                label="Title"
                value={title}
                onChangeText={(title) => {
                    setTitle(title);
                }}
                className="w-full"
            />

            <TextInput
                label="Task"
                value={task}
                onChangeText={(task) => setTask(task)}
                className="w-full"
            />

            <View className="w-full flex-row flex-wrap justify-start items-center space-x-4 space-y-4">
                <Chip
                    onPress={() => handlePress("requirement")}
                    selected={chipData.requirement}
                    elevated={true}
                    textStyle={chipStyle}
                >
                    Requirement
                </Chip>
                <Chip
                    onPress={() => handlePress("material")}
                    selected={chipData.material}
                    elevated={true}
                    textStyle={chipStyle}
                >
                    Material
                </Chip>
                <Chip
                    onPress={() => handlePress("prototype")}
                    selected={chipData.prototype}
                    elevated={true}
                    textStyle={chipStyle}
                >
                    Prototype
                </Chip>

                <Chip
                    onPress={() => handlePress("production")}
                    selected={chipData.production}
                    elevated={true}
                    textStyle={chipStyle}
                >
                    Production
                </Chip>
                <Chip
                    onPress={() => handlePress("rework")}
                    selected={chipData.rework}
                    elevated={true}
                    textStyle={chipStyle}
                >
                    Rework
                </Chip>
                <Chip
                    onPress={() => handlePress("delivery")}
                    selected={chipData.delivery}
                    elevated={true}
                    textStyle={chipStyle}
                >
                    Delivery
                </Chip>
            </View>

            <ActivityIndicator
                animating={isLoading}
                size={"small"}
                color={MD2Colors.red800}
            />

            <Button
                icon="pen-plus"
                mode="contained"
                onPress={() => insertTask()}
            >
                Add Task
            </Button>
        </View>
    );
}
