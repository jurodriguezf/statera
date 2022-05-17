package main

import (
	"log"

	"github.com/jurodriguezf/statera/cmd/api/domain/db"
	"github.com/jurodriguezf/statera/cmd/server"
	//! Descomentar esta importación para probar el ejemplo
	//"go.mongodb.org/mongo-driver/bson"
)

func main() {
	if db.CheckConnection() == 0 {
		log.Fatal("No connection to DB")
		return
	}
	server.SetupEndpoints()
}
