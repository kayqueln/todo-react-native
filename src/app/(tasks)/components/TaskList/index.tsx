import Task from "@/src/components/Task";
import { Text } from "@/src/components/Themed";
import { Box, ScrollView } from "native-base";
import React, { useState } from "react";
import { StyleSheet } from "react-native";

export default function TaskList() {
  const [taskList, setTaskList] = useState([0]);

  return (
    <Box style={styles.tasksContainer}>
      <Box bg="" style={styles.taskContainerHeader}>
        <Text style={styles.headerTitle}>Tarefas</Text>
      </Box>

      <ScrollView>
        {taskList.map((task, index) => (
          <Task key={index} />
        ))}
      </ScrollView>
    </Box>
  );
}

const styles = StyleSheet.create({
  tasksContainer: {
    display: "flex",
    width: "100%",
    paddingTop: 25,
    paddingBottom: 25,
    gap: 20,
  },

  taskContainerHeader: { display: "flex", flexDirection: "row" },

  headerTitle: {
    fontSize: 18,
    fontWeight: "500",
  },
});
