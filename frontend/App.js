import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Import layar yang baru saja kita buat
import HomeScreen from "./src/screens/HomeScreen";
import TaskFormScreen from "./src/screens/TaskFormScreen";

// Inisialisasi Stack Navigator
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    // NavigationContainer wajib membungkus seluruh navigasi aplikasi
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        // Kita bisa atur tema header di sini
        screenOptions={{
          headerStyle: { backgroundColor: "#121212" },
          headerTintColor: "#fff",
          headerTitleStyle: { fontWeight: "bold" },
        }}
      >
        {/* Daftarkan rute-rute aplikasi */}
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Fokus Timer" }} // Judul di header atas
        />
        <Stack.Screen
          name="TaskForm"
          component={TaskFormScreen}
          options={{ title: "Add / Edit Task" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
