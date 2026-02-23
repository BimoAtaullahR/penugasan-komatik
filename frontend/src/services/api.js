import axios from "axios";

// Ganti dengan URL yang kamu dapat dari terminal localtunnel!
// PASTIKAN pakai https:// dan JANGAN ADA port :8080 di belakangnya
const BASE_URL = "https://famous-jokes-stand.loca.lt";

const api = axios.create({
  baseURL: BASE_URL,
  timeout: 10000, // Kita naikkan jadi 10 detik karena lewat tunnel kadang sedikit delay
  headers: {
    // Header ini WAJIB ditambahkan agar Localtunnel tidak memblokir API kita
    "Bypass-Tunnel-Reminder": "true",
  },
});

export const createTask = async (taskData) => {
  try {
    const response = await api.post("/tasks", taskData);
    return response.data;
  } catch (error) {
    if (error.response) {
      throw new Error(
        error.response.data.error || "Terjadi kesalahan di server",
      );
    } else {
      throw new Error("Gagal terhubung ke server. Cek koneksi tunnel.");
    }
  }
};

export default api;
