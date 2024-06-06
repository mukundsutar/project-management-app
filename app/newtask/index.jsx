import { View, Text } from "react-native";
import React, { useState } from "react";
import { Button, TextInput } from "react-native-paper";
import { router } from "expo-router";
import { supabase } from "../../lib/supabase";

export default function NewTask() {
    const [title, setTitle] = useState("");
    const [task, setTask] = useState("");

    async function insertTask() {
        const { error } = await supabase
            .from("taskList")
            .insert({ title, task });

        console.log(error); //null

        setTimeout(() => {
            router.navigate("/schedule");
        }, 200);
    }

    return (
        <View className="h-full w-full p-5 items-center space-y-6">
            <TextInput
                label="Title"
                value={title}
                onChangeText={(title) => setTitle(title)}
                className="w-full"
            />
            <TextInput
                label="Task"
                value={task}
                onChangeText={(task) => setTask(task)}
                className="w-full"
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