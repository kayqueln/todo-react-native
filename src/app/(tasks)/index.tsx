import { StyleSheet } from "react-native";

import { PrimaryButton } from "@/src/components/StyledButton";
import { TextInput } from "@/src/components/StyledTextInput";

import { FontAwesome } from "@expo/vector-icons";
import { Box } from "native-base";
import React, { useState } from "react";
import TaskList from "./components/TaskList";

export default function TasksScreen() {
  const [value, onChangeText] = useState("Useless Multiline Placeholder");

  return (
    <Box style={styles.container}>
      <Box style={styles.newTaskContainer}>
        <TextInput placeholder="e.g. Dar comida pro gato" style={{ flex: 1 }} />
        <PrimaryButton
          onPress={() => {}}
          title={"Criar"}
          rightIcon={<FontAwesome name="plus" color="white" />}
        >
          Criar tarefa
        </PrimaryButton>
      </Box>

      <TaskList />
    </Box>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 20,
  },

  newTaskContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    gap: 10,
  },

  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
