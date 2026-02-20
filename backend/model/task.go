// Package model untuk entity task
package model

import "time"

type Task struct {
	ID                 uint      `gorm:"primaryKey" json:"id"`
	Title              string    `gorm:"type:varchar(100);not null" json:"title"`
	TotalSessions      int       `json:"total_sessions"`
	DurationPerSession int       `json:"duration_per_session"`
	BreakDuration      int       `json:"break_duration"`
	CreatedAt          time.Time `json:"created_at"`
	UpdatedAt          time.Time `json:"updated_at"`
}
