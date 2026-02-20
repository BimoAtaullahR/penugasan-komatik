package main

import (
	"log"

	"backend/handler"
	"backend/middleware"
	"backend/repository"

	"github.com/gin-gonic/gin"
)

func main() {
	r := gin.Default()
	r.Use(middleware.DatabaseCheckMiddleware(repository.DB))
	r.POST("/api/tasks", handler.AddTask)

	if err := r.Run(":8080"); err != nil {
		log.Fatal("Error menjalankan server", err)
	}
}
