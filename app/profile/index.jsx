import { View, Text, RefreshControl } from "react-native";
import React from "react";
import { Avatar } from "react-native-paper";
import { useState } from "react";
import { useEffect } from "react";
import { supabase } from "../../lib/supabase";
import { useCallback } from "react";
import { fetchUser } from "../../lib/queryLogic";

export default function Profile() {
    const [account, setAccount] = useState();

    useEffect(() => {
        fetchAccount();
    }, []);

    async function fetchAccount() {
        try {
            const data = await fetchUser("users", "mutant");
            setAccount(data);
        } catch (error) {
            console.error("Error fetching data:", error.message);
        }
    }

    return (
        <View className="h-full w-full justify-start items-center p-10 space-y-9">
            <Avatar.Icon icon="account" className="w-48 h-48 rounded-md" />

            <View className="items-center">
                {account && (
                    <>
                        <Text className="text-2xl">{account.name}</Text>
                        <Text className="text-lg">{account.department}</Text>
                    </>
                )}
            </View>
        </View>
    );
}
