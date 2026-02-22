// Package repository untuk set up database
package repository

import (
	"log"

	"backend/model"

	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
)

var DB *gorm.DB

func ConnectDatabase() {
	database, err := gorm.Open(sqlite.Open("data/gorm.db"), &gorm.Config{})
	if err != nil {
		log.Fatal("Gagal terhubung ke database: ", err)
	}
	err = database.AutoMigrate(&model.Task{})
	if err != nil {
		log.Fatal("Gagal melakukan migrasi database: ", err)
	}
	DB = database
}
