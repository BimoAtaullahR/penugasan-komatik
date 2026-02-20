// Package middleware ...
package middleware

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"gorm.io/gorm"
)

func DatabaseCheckMiddleware(db *gorm.DB) gin.HandlerFunc {
	return func(c *gin.Context) {
		sqlDB, err := db.DB()
		if err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{
				"error":   true,
				"message": "Sistem sedang pemeliharaan database",
			})
			c.Abort()
			return
		}

		if err := sqlDB.Ping(); err != nil {
			c.JSON(http.StatusServiceUnavailable, gin.H{
				"error":   true,
				"message": "Koneksi database terputus, silakan refresh halaman",
			})
			c.Abort()
			return
		}
		c.Next()
	}
}
