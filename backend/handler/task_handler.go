// Package handler untuk beberapa operasi
package handler

import (
	"net/http"

	"backend/model"
	"backend/repository"

	"github.com/gin-gonic/gin"
)

func AddTask(c *gin.Context) {
	var data model.Task
	if err := c.ShouldBindJSON(&data); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "invalid input data"})
		return
	}

	if data.Title == "" {
		c.JSON(400, gin.H{"error": "Judul tidak boleh kosong"})
		return
	}

	if data.TotalSessions < 1 || data.BreakDuration < 1 || data.DurationPerSession < 1 {
		c.JSON(400, gin.H{"error": "nilai harus positif"})
		return
	}

	if err := repository.DB.Create(&data).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusCreated, gin.H{
		"status": "success",
		"data":   data,
	})
}

func UpdateTask(c *gin.Context) {
}
