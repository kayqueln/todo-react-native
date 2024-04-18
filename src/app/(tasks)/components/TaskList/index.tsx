import Task from "@/src/components/Task";

import { useTasks } from "@/src/contexts/TaskContext";
import { Box, FlatList, Text } from "native-base";
import React from "react";
import { StyleSheet } from "react-native";

export default function TaskList() {
  const { tasks } = useTasks();

  return (
    <Box style={styles.tasksContainer}>
      <Box style={styles.taskContainerHeader}>
        <Text style={styles.headerTitle}>
          Tarefas <Text color={"accent.500"}>({tasks.length})</Text>
        </Text>
      </Box>

      <FlatList
        data={tasks}
        renderItem={({ item }) => <Task task={item} />}
        keyExtractor={(item) => `key-${item.id}`}
        contentContainerStyle={{ rowGap: 16 }}
        // ListEmptyComponent={
        //   <>
        //     <Center marginY={10} style={styles.emptyList}>
        //       <Text fontSize={"lg"} fontWeight={"medium"}>
        //         Você ainda não criou nenhuma tarefa!
        //       </Text>

        //       <FontAwesome
        //         name="exclamation-circle"
        //         color={"#bebebe"}
        //         size={60}
        //       />
        //     </Center>
        //   </>
        // }
      />
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

  emptyList: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    padding: 20,
  },
});
