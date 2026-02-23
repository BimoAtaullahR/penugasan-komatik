package main

import (
	"log"

	"backend/handler"
	"backend/middleware"
	"backend/repository"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

func main() {
	repository.ConnectDatabase()

	r := gin.Default()

	config := cors.DefaultConfig()
	config.AllowAllOrigins = true
	config.AllowHeaders = []string{
		"Origin",
		"Content-Length",
		"Content-Type",
		"Accept",                     // Wajib untuk Axios
		"ngrok-skip-browser-warning", // Wajib untuk tembus Ngrok
		"Bypass-Tunnel-Reminder",
	}
	r.Use(cors.New(config))

	r.Use(middleware.DatabaseCheckMiddleware(repository.DB))
	r.POST("/api/tasks", handler.AddTask)
	r.PUT("/api/tasks", handler.UpdateTask)

	if err := r.Run(":8080"); err != nil {
		log.Fatal("Error menjalankan server", err)
	}
}
