package connection

import (
	"context"
    "fmt"
    "time"

    "go.mongodb.org/mongo-driver/mongo"
    "go.mongodb.org/mongo-driver/mongo/options"
    "go.mongodb.org/mongo-driver/mongo/readpref"
)


func Connect(uri string)(*mongo.Client, context.Context,
                          context.CancelFunc, error) {

	ctx, cancel := context.WithTimeout(context.Background(),30*time.Second)


	client, err :=  mongo.Connect(ctx,options.Client().ApplyURI(uri))

	return client,ctx,cancel,err

}


func Ping(client *mongo.Client, ctx context.Context) error{

    // mongo.Client has Ping to ping mongoDB, deadline of
    // the Ping method will be determined by cxt
    // Ping method return error if any occurred, then
    // the error can be handled.
    if err := client.Ping(ctx, readpref.Primary()); err != nil {
        return err
    }
    fmt.Println("connected successfully")
    return nil
}

func Close(client *mongo.Client, ctx context.Context,
           cancel context.CancelFunc){

    // CancelFunc to cancel to context
    defer cancel()

    // client provides a method to close
    // a mongoDB connection.
    defer func(){

        // client.Disconnect method also has deadline.
        // returns error if any,
        if err := client.Disconnect(ctx); err != nil{
            panic(err)
        }
    }()
}
