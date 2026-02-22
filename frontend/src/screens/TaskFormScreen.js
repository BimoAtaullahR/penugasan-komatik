import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";
import { createTask } from "../services/api";

export default function TaskFormScreen({ navigation }) {
  // --- STATE (Variabel Penyimpan Data Input) ---
  // Di sebelah kiri adalah nama variabelnya, di sebelah kanan adalah fungsi pengubahnya.
  const [title, setTitle] = useState("");
  const [totalSessions, setTotalSessions] = useState("");
  const [duration, setDuration] = useState("");
  const [breakDuration, setBreakDuration] = useState("");

  // --- FUNGSI SIMPAN (Sementara) ---
  const handleSave = async () => {
    // 1. Validasi Ringan di Frontend (agar tidak buang-buang kuota nembak BE kalau data kosong)
    if (!title || !totalSessions || !duration || !breakDuration) {
      Alert.alert("Error", "Semua kolom harus diisi!");
      return;
    }

    try {
      // 2. Susun JSON sesuai kontrak data API yang sudah kita buat
      const payload = {
        title: title,
        total_sessions: parseInt(totalSessions),
        duration_per_session: parseInt(duration),
        break_duration: parseInt(breakDuration),
      };

      // 3. Panggil API ke Golang (tunggu sampai selesai pakai 'await')
      const result = await createTask(payload);

      // 4. Jika sukses, beri tahu user lalu kembali ke halaman Timer
      Alert.alert("Sukses!", "Task berhasil dibuat dan disimpan di Backend.", [
        { text: "OK", onPress: () => navigation.goBack() },
      ]);

      // Catatan: 'result.data.id' berisi ID unik dari SQLite kamu!
    } catch (error) {
      // 5. Jika gagal (misal validasi GORM gagal / server mati)
      Alert.alert("Gagal Menyimpan", error.message);
    }
  };
  return (
    // ScrollView agar form bisa digeser kalau keyboard HP menutupi tombol
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      <Text style={styles.headerTitle}>New Task</Text>

      {/* INPUT 1: TITLE */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Title</Text>
        <TextInput
          style={styles.input}
          placeholder="e.g. Belajar Golang"
          placeholderTextColor="#666"
          value={title}
          onChangeText={setTitle} // Otomatis update variabel 'title' saat diketik
        />
      </View>

      {/* INPUT 2: TOTAL SESSIONS */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Total Sessions</Text>
        <TextInput
          style={styles.input}
          placeholder="e.g. 4"
          placeholderTextColor="#666"
          keyboardType="numeric" // Memunculkan keyboard angka di HP
          value={totalSessions}
          onChangeText={setTotalSessions}
        />
      </View>

      {/* INPUT 3: DURATION PER SESSION */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Duration (minutes)</Text>
        <TextInput
          style={styles.input}
          placeholder="e.g. 25"
          placeholderTextColor="#666"
          keyboardType="numeric"
          value={duration}
          onChangeText={setDuration}
        />
      </View>

      {/* INPUT 4: BREAK DURATION */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Break Duration (minutes)</Text>
        <TextInput
          style={styles.input}
          placeholder="e.g. 5"
          placeholderTextColor="#666"
          keyboardType="numeric"
          value={breakDuration}
          onChangeText={setBreakDuration}
        />
      </View>

      {/* TOMBOL SAVE */}
      <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
        <Text style={styles.saveButtonText}>Save Task</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

// --- STYLING ---
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1E1E1E",
  },
  contentContainer: {
    padding: 20,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 30,
    textAlign: "center",
  },
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    color: "#CCCCCC",
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    backgroundColor: "#2A2A2A",
    color: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#444444",
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingVertical: 12,
    fontSize: 16,
  },
  saveButton: {
    backgroundColor: "#2E7D32", // Hijau
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 20,
    marginBottom: 40,
  },
  saveButtonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },
});
