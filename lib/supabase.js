import "react-native-url-polyfill/auto";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://vgizqekorrhxwapcfdip.supabase.co";
const supabaseAnonKey =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZnaXpxZWtvcnJoeHdhcGNmZGlwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTc0Nzg3ODYsImV4cCI6MjAzMzA1NDc4Nn0.EWt-u4j696tMsZu2-m8hj9RHcu7YVNQwRIR-Tu_R2gU";

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
    auth: {
        storage: AsyncStorage,
        autoRefreshToken: true,
        persistSession: true,
        detectSessionInUrl: false,
    },
});
