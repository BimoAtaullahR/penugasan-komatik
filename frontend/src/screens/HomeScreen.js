import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    // ScrollView digunakan agar halaman bisa di-scroll jika task-nya banyak
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      {/* 1. BAGIAN TIMER */}
      <View style={styles.timerContainer}>
        <Text style={styles.timerText}>25:00</Text>
        <Text style={styles.sessionText}>session 1/3</Text>
      </View>

      {/* 2. BAGIAN KONTROL TOMBOL (Kiri-Kanan) */}
      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionButtonText}>Start / Pause</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.actionButton, styles.endButton]}>
          <Text style={styles.actionButtonText}>End</Text>
        </TouchableOpacity>
      </View>

      {/* 3. TOMBOL ADD TASK */}
      <TouchableOpacity
        style={styles.addTaskButton}
        onPress={() => navigation.navigate("TaskForm")}
      >
        <Text style={styles.addTaskButtonText}>+ Add Task</Text>
      </TouchableOpacity>

      {/* 4. BAGIAN DAFTAR TUGAS */}
      <View style={styles.taskListContainer}>
        {/* Task 1 (Statis) */}
        <TouchableOpacity style={styles.taskCard}>
          <Text style={styles.taskTitle}>Task 1</Text>
        </TouchableOpacity>

        {/* Task 2 (Statis) */}
        <TouchableOpacity style={styles.taskCard}>
          <Text style={styles.taskTitle}>Task 2</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

// STYLING (CSS versi React Native)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1E1E1E", // Tema gelap
  },
  contentContainer: {
    padding: 20,
    alignItems: "center", // Membuat konten berada di tengah horizontal
  },

  // Style Timer
  timerContainer: {
    marginTop: 40,
    alignItems: "center",
    marginBottom: 30,
  },
  timerText: {
    fontSize: 72,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  sessionText: {
    fontSize: 18,
    color: "#AAAAAA",
    marginTop: 5,
  },

  // Style Baris Tombol Start & End
  buttonRow: {
    flexDirection: "row", // Ini yang membuat tombol berjejer ke samping
    justifyContent: "space-between",
    width: "80%",
    marginBottom: 30,
  },
  actionButton: {
    backgroundColor: "#333333",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#555555",
    flex: 0.45, // Mengambil 45% dari lebar parent
    alignItems: "center",
  },
  endButton: {
    backgroundColor: "#4A1C1C", // Warna agak merah untuk tombol End
    borderColor: "#FF4444",
  },
  actionButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },

  // Style Tombol Add Task
  addTaskButton: {
    backgroundColor: "#2E7D32", // Hijau
    width: "100%",
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 30,
  },
  addTaskButtonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },

  // Style Daftar Tugas (Kotak besar di bawah)
  taskListContainer: {
    width: "100%",
    borderWidth: 2,
    borderColor: "#444444",
    borderRadius: 12,
    padding: 15,
    minHeight: 200,
  },
  taskCard: {
    backgroundColor: "#2A2A2A",
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#3A3A3A",
  },
  taskTitle: {
    color: "#FFFFFF",
    fontSize: 18,
  },
});
