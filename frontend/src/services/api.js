import axios from "axios";

// Masukkan IP Address Hotspot-mu di sini
const BASE_URL = "http://10.166.168.136:8080/api";

const api = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
  // HAPUS SEMUA HEADERS ngrok atau localtunnel yang aneh-aneh!
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export const createTask = async (taskData) => {
  try {
    const response = await api.post("/tasks", taskData);
    return response.data;
  } catch (error) {
    console.log("=== ERROR DARI SERVER ===");
    console.log(error.message);
    throw new Error(
      "Gagal terhubung. Pastikan HP dan Laptop di Hotspot yang sama.",
    );
  }
};

export default api;
