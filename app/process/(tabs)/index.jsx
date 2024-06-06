import { View, Text, RefreshControl } from "react-native";
import React, { useEffect, useState } from "react";

import { useCallback } from "react";
import { supabase } from "../../../lib/supabase";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import NewTask from "../../newtask/index";

const Tab = createMaterialTopTabNavigator();

function HomeScreen() {
    return (
        <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
            <Text>Home!</Text>
        </View>
    );
}

function SettingsScreen() {
    return (
        <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
            <Text>Settings!</Text>
        </View>
    );
}

export default function Process() {
    const [refreshing, setRefreshing] = useState(false);
    const [tasks, setTask] = useState([]);

    // referesh control
    const onRefresh = useCallback(() => {
        setRefreshing(true);

        fetchTasks();

        setTimeout(() => {
            setRefreshing(false);
        }, 1000);
    }, []);

    // fetch schedule when page loads
    useEffect(() => {
        fetchTasks();
    }, []);

    // fetch schedule
    async function fetchTasks() {
        const { data, error } = await supabase.from("requirement").select();

        setTask(data);
    }

    // list item for List
    const renderItem = ({ item, index }) => (
        <ListItem title={item.title} description={item.task} />
    );

    return (
        <View>
            <Text>Hello!</Text>
        </View>
    );
}
