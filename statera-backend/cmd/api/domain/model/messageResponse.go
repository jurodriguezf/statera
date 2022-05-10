package model

type MessageResponse struct {
	Status  string `json:"status,omitempty"`
	Message string `json:"message,omitempty"`
}
