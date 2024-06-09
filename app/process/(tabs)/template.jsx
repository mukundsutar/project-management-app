import { View, StyleSheet, RefreshControl } from "react-native";
import React, { useEffect, useState } from "react";
import { FAB } from "react-native-paper";
import { router } from "expo-router";
import { Divider, List, ListItem } from "@ui-kitten/components";
import { useCallback } from "react";
import { fetchTable } from "../../../lib/queryLogic";

export default function TemplateComponent({ route }) {
    const { name: processName } = route.params;

    const [refreshing, setRefreshing] = useState(false);
    const [tasks, setTask] = useState([]);

    const onRefresh = useCallback(() => {
        setRefreshing(true);

        fetchSchedule();

        setTimeout(() => {
            setRefreshing(false);
        }, 1000);
    }, []);

    useEffect(() => {
        fetchSchedule();
    }, []);

    async function fetchSchedule() {
        try {
            const data = await fetchTable("taskList", processName);

            setTask(data);
        } catch (error) {
            console.error("Error fetching data:", error.message);
        }
    }

    const renderItem = ({ item, index }) => (
        <ListItem title={item.title} description={item.task} />
    );

    return (
        <View className="h-full w-full ">
            <List
                style={styles.container}
                data={tasks}
                ItemSeparatorComponent={Divider}
                renderItem={renderItem}
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                    />
                }
            />
            <FAB
                icon="plus"
                style={styles.fab}
                onPress={() => router.navigate("/newtask")}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    fab: {
        position: "absolute",
        margin: 16,
        right: 0,
        bottom: 0,
    },
    container: {
        // maxHeight: "100%",
    },
});
