import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#131016",
    padding: 24,
  },
  eventName: {
    color: "#FFF",
    fontSize: 38,
    marginTop: 48,
  },
  eventDate: {
    color: "#6b6b6b",
    fontSize: 20,
  },
  textInput: {
    flex: 1,
    height: 56,
    backgroundColor: "#1f1e25",
    borderRadius: 8,
    color: "#FFF",
    padding: 16,
    fontSize: 18,
    marginRight: 10,
  },
  textButton: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: "#a370f7",
    alignItems: "center",
    justifyContent: "center",
  },
  form: {
    width: "100%",
    flexDirection: "row",
    marginTop: 24,
    marginBottom: 24,
  },
  empty: {
    color: "#FFF",
    fontSize: 14,
    textAlign: "center",
  },
});
