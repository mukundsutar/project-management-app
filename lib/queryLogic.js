import { supabase } from "./supabase";

export async function fetchUser(tableName, user) {
    const { data, error } = await supabase
        .from(tableName)
        .select()
        .eq("username", user)
        .limit(1)
        .single();

    if (error) {
        throw error;
    }

    return data;
}

export async function fetchTable(tableName, processName) {
    const { data, error } = await supabase
        .from(tableName)
        .select()
        .contains("category", [processName]);

    if (error) {
        throw error;
    }

    return data;
}

export async function insertIntoTable(tableName, data) {
    const { error } = await supabase.from(tableName).insert(data);

    if (error) {
        throw error;
    }
}
