import { StyleSheet } from "react-native";

import { PrimaryButton } from "@/src/components/StyledButton";
import { TextInput } from "@/src/components/StyledTextInput";

import { useTasks } from "@/src/contexts/TaskContext";
import { FontAwesome } from "@expo/vector-icons";
import { Box } from "native-base";
import React, { useState } from "react";
import TaskList from "./components/TaskList";

export default function TasksScreen() {
  const { addTask } = useTasks();

  const [taskValue, setTaskValue] = useState("");

  const handleAddNewTask = () => {
    console.log("hasdas");

    addTask(taskValue);
    setTaskValue("");
  };

  return (
    <Box style={styles.container}>
      <Box style={styles.newTaskContainer}>
        <TextInput
          value={taskValue}
          onChangeText={(text) => setTaskValue(text)}
          placeholder="e.g. Dar comida pro gato"
          style={{ flex: 1 }}
        />
        <PrimaryButton
          onPress={handleAddNewTask}
          rightIcon={<FontAwesome name="plus" color={"white"} />}
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
