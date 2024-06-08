import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Button, Chip, TextInput } from "react-native-paper";
import { router } from "expo-router";
import { supabase } from "../../lib/supabase";
import {
    IndexPath,
    Layout,
    Select,
    SelectGroup,
    SelectItem,
} from "@ui-kitten/components";

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
    const [multiSelectedIndex, setMultiSelectedIndex] = useState([
        new IndexPath(0, 0),
        new IndexPath(1, 1),
    ]);

    async function insertTask() {
        const { error } = await supabase
            .from("taskList")
            .insert({ title, task });

        setTimeout(() => {
            router.navigate({ pathname: "/schedule", param: { id: 1 } });
        }, 200);
    }

    const handlePress = (key) => {
        setChipData((prevState) => ({
            ...prevState,
            [key]: !prevState[key],
        }));

        console.log(chipData[key]);
    };

    const chipStyle = { fontSize: 16, padding: 3 };

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

            <View className="w-full">
                <Layout style={styles.container} level="1">
                    <Select
                        style={styles.select}
                        multiSelect={true}
                        placeholder="Multi"
                        selectedIndex={multiSelectedIndex}
                        onSelect={(index) => setMultiSelectedIndex(index)}
                    >
                        <SelectGroup title="Designer">
                            <SelectItem title="Mukund" />
                            <SelectItem title="Alice Johnson" />
                            <SelectItem title="Bob Smith" />
                        </SelectGroup>
                        <SelectGroup title="Workers">
                            <SelectItem title="Carol White" />
                            <SelectItem title="David Brown" />
                            <SelectItem title="Eve Black" />
                        </SelectGroup>
                    </Select>
                </Layout>
            </View>

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

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    select: {
        flex: 1,
        margin: 2,
    },
});
