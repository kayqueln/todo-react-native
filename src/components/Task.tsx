import { FontAwesome } from "@expo/vector-icons";
import { Box, PresenceTransition, Text } from "native-base";
import React, { useEffect, useRef, useState } from "react";
import { StyleSheet } from "react-native";
import { useTasks } from "../contexts/TaskContext";
import { ITask } from "../types/Task";
import { PrimaryButton } from "./StyledButton";
import { TextInput } from "./StyledTextInput";

export default function Task({ task }: { task: ITask }) {
  const { removeTask, editTask, tasks } = useTasks();

  const [isEditModeEnabled, setIsEditModeEnabled] = useState(false);
  const [editContent, setEditContent] = useState(task.title);

  const inputRef = useRef<any>(null);

  useEffect(() => {
    if (isEditModeEnabled && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isEditModeEnabled]);

  const handleDeleteTask = () => {
    removeTask(task.id);
  };

  const handleEditTask = () => {
    editTask(task.id, editContent);

    setIsEditModeEnabled(false);
  };

  const doesTaskExist = tasks.find((t) => t.id === task.id);

  return (
    <PresenceTransition
      pointerEvents="auto"
      style={styles.taskContainer}
      visible={doesTaskExist !== undefined}
      initial={{
        opacity: 0,
        scale: 0,
      }}
      animate={{
        opacity: 1,
        scale: 1,
        transition: {
          duration: 250,
        },
      }}
    >
      <Box style={styles.titleAndDate}>
        {isEditModeEnabled ? (
          <TextInput
            fRef={inputRef}
            value={editContent}
            onChangeText={(text) => setEditContent(text)}
            padding={1}
            paddingLeft={2}
            fontSize={"md"}
          />
        ) : (
          <Text fontSize={"xl"} fontWeight={600}>
            {task.title}
          </Text>
        )}

        <Text fontSize={"md"} color={"muted.400"} fontWeight={500}>
          {task.date}
        </Text>
      </Box>

      <Box style={styles.actions}>
        {isEditModeEnabled ? (
          <>
            <PrimaryButton
              onPress={handleEditTask}
              colorScheme="emerald"
              leftIcon={<FontAwesome name="check" color={"white"} size={20} />}
            />
            <PrimaryButton
              onPress={() => setIsEditModeEnabled(false)}
              colorScheme={"danger"}
              leftIcon={<FontAwesome name="close" color={"white"} size={20} />}
            />
          </>
        ) : (
          <>
            <PrimaryButton
              onPress={() => setIsEditModeEnabled(!isEditModeEnabled)}
              leftIcon={
                <FontAwesome name="pencil" color={"#c9bdf5"} size={20} />
              }
            />
            <PrimaryButton
              onPress={handleDeleteTask}
              leftIcon={
                <FontAwesome name="trash" color={"#c9bdf5"} size={20} />
              }
            />
          </>
        )}
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
    gap: 20,
  },

  titleAndDate: {
    display: "flex",
    flex: 1,
    gap: 10,
  },

  actions: {
    display: "flex",
    flexDirection: "row",
    gap: 15,
  },
});
