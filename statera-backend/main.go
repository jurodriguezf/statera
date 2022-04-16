package main

import(
	"github.com/jurodriguezf/statera/cmd/server"
	"github.com/jurodriguezf/statera/cmd/db"
	//! Descomentar esta importación para probar el ejemplo
    //"go.mongodb.org/mongo-driver/bson"

)

func main() {
	client, ctx, cancel, err := connection.Connect("mongodb+srv://admin:admin@stateradb.brnsm.mongodb.net/StateraDB?retryWrites=true&w=majority")
	if err != nil{
        panic(err)
    }

	defer connection.Close(client, ctx, cancel)

	connection.Ping(client, ctx)

	// Ejemplo de inserción de una receta en la base de datos:
	// db := client.Database("StateraDB")
	// recipes := db.Collection("Recipes")

	// recipes.InsertOne(ctx,bson.D{{"name","Papitas sin sal"},{"ingredientes",bson.A{"Papitas","Sal"}}});

	server.SetupEndpoints()


}
