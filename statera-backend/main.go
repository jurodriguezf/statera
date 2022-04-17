package main

import (
	"github.com/jurodriguezf/statera/cmd/api/domain/db"
	"github.com/jurodriguezf/statera/cmd/server"
	"log"
	//! Descomentar esta importación para probar el ejemplo
	//"go.mongodb.org/mongo-driver/bson"
)

func main() {
	if db.CheckConnection() == 0 {
		log.Fatal("Without connection to DB")
		return
	}
	server.SetupEndpoints()
	// Ejemplo de inserción de una receta en la base de datos:
	// db := client.Database("StateraDB")
	// recipes := db.Collection("Recipes")

	// recipes.InsertOne(ctx,bson.D{{"name","Papitas sin sal"},{"ingredientes",bson.A{"Papitas","Sal"}}});
}
