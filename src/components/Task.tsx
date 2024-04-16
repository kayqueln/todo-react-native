import { Box, PresenceTransition, Text } from "native-base";
import React from "react";
import { StyleSheet } from "react-native";

export default function Task() {
  return (
    <PresenceTransition style={styles.taskContainer}>
      <Box style={styles.titleAndDate}>
        <Text fontSize={"xl"} fontWeight={600}>
          Tarefa
        </Text>

        <Text fontSize={"md"} color={"muted.400"} fontWeight={500}>
          03/04/24
        </Text>
      </Box>

      <Box></Box>
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
});
