import { FontAwesome } from "@expo/vector-icons";
import { Box, PresenceTransition, Text } from "native-base";
import React from "react";
import { StyleSheet } from "react-native";
import { useTasks } from "../contexts/TaskContext";
import { ITask } from "../types/Task";
import { PrimaryButton } from "./StyledButton";

export default function Task({ task }: { task: ITask }) {
  const { removeTask } = useTasks();

  const handleDeleteTask = () => {
    console.log("hasuhdas");

    removeTask(task.id);
  };

  return (
    <PresenceTransition style={styles.taskContainer}>
      <Box style={styles.titleAndDate}>
        <Text fontSize={"xl"} fontWeight={600}>
          {task.title}
        </Text>

        <Text fontSize={"md"} color={"muted.400"} fontWeight={500}>
          03/04/24
        </Text>
      </Box>

      <Box style={styles.actions}>
        <PrimaryButton
          leftIcon={<FontAwesome name="pencil" color={"#c9bdf5"} size={20} />}
        />
        <PrimaryButton
          onPress={handleDeleteTask}
          leftIcon={<FontAwesome name="trash" color={"#c9bdf5"} size={20} />}
        />
      </Box>
    </PresenceTransition>
  );
}

const styles = StyleSheet.create({
  taskContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    padding: 10,
    borderRadius: 4,
    backgroundColor: "white",
    borderColor: "#926de5",
    borderLeftWidth: 6,
    borderWidth: 1,
  },

  titleAndDate: {
    display: "flex",
    gap: 10,
  },

  actions: {
    display: "flex",
    flexDirection: "row",
    gap: 15,
  },
});
