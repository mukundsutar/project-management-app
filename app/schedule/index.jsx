import { View, StyleSheet, RefreshControl } from "react-native";
import React, { useEffect, useState } from "react";
import { FAB, Icon } from "react-native-paper";
import { router } from "expo-router";
import {
    Button,
    ButtonGroup,
    Divider,
    List,
    ListItem,
} from "@ui-kitten/components";
import { useCallback } from "react";
import { fetchTable } from "../../lib/queryLogic";
import { supabase } from "../../lib/supabase";

const DeleteIcon = (props) => <Icon source="delete" color="white" size={20}/>;
const EditIcon = (props) => <Icon source="pencil" color="white" size={20}/>;

export default function Schedule() {
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
            const data = await fetchTable("taskList");
            setTask(data);
        } catch (error) {
            console.error("Error fetching data:", error.message);
        }
    }

    const renderItem = ({ item, index }) => (
        <ListItem
            title={item.title}
            description={item.task}
            accessoryRight={() => (
                <ButtonGroup>
                    <Button accessoryLeft={EditIcon} />
                    <Button
                        accessoryLeft={DeleteIcon}
                        onPress={async () => {
                            const response = await supabase
                                .from("taskList")
                                .delete()
                                .eq("id", item.id);

                            onRefresh();
                        }}
                    />
                </ButtonGroup>
            )}
        />
    );

    return (
        <View className="h-full w-full ">
            {tasks && (
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
            )}
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
