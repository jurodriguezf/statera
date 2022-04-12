package main

import(
	//"github.com/jurodriguezf/statera/cmd/server"
	"github.com/jurodriguezf/statera/cmd/db"
)

func main() {
	client, ctx, cancel, err := connection.Connect("mongodb+srv://admin:admin@staterabd.brnsm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
	if err != nil{
        panic(err)
    }
	//server.SetupEndpoints()

	defer connection.Close(client, ctx, cancel);

	connection.Ping(client, ctx)

}
