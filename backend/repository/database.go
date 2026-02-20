// Package repository untuk set up database
package repository

import (
	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
)

var DB *gorm.DB

func ConnectDatabase() {
	database, _ := gorm.Open(sqlite.Open("gorm.db"), &gorm.Config{})
	DB = database
}
