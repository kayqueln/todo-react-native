import { TaskProvider } from "@/src/contexts/TaskContext";
import { useClientOnlyValue } from "@/src/hooks/useClientOnlyValue";
import { Stack } from "expo-router";
import React from "react";
import { useColorScheme } from "react-native";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <TaskProvider>
      <Stack
        screenOptions={{
          headerShown: useClientOnlyValue(false, true),
        }}
      >
        <Stack.Screen
          name="index"
          options={{
            title: "Lista de Tarefas",
          }}
        />
      </Stack>
    </TaskProvider>
  );
}
