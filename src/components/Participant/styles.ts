import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#1f1e25",
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  name: {
    flex: 1,
    fontSize: 18,
    color: "#FFF",
    marginLeft: 19,
    fontWeight: "bold",
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: "#E23C44",
    alignItems: "center",
    justifyContent: "center",
  },

  textButton: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
  },
});
