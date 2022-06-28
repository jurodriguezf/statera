package db

import (
	"context"
	"fmt"
	"github.com/jurodriguezf/statera/cmd/api/domain/utils"
	"github.com/sirupsen/logrus"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
	"log"
)

/*MongoCN is the object that stores the DB connection*/
var MongoCN = Connect()

var clientOptions = options.Client().ApplyURI(
	fmt.Sprintf("mongodb+srv://admin:%s@stateradb.brnsm.mongodb.net/StateraDB?retryWrites=true&w=majority",
		utils.GetEnvVariable("MONGO_PASSWORD")))

/*Connect is the function that allows the DataBase connection*/
func Connect() *mongo.Client {
	client, err := mongo.Connect(context.TODO(), clientOptions)
	if err != nil {
		logrus.WithFields(logrus.Fields{"EventTYpe": utils.LoggingEvents.FailedDBConnection}).Info(fmt.
			Sprintf("Error connecting to DB: %s", err.Error()))
		log.Fatal(err.Error())
		return client
	}

	err = client.Ping(context.TODO(), nil)
	if err != nil {
		logrus.WithFields(logrus.Fields{"EventTYpe": utils.LoggingEvents.FailedDBConnection}).Info(fmt.
			Sprintf("Ping error to DB: %s", err.Error()))
		log.Fatal(err.Error())
		return client
	}
	logrus.WithFields(logrus.Fields{"EventTYpe": utils.LoggingEvents.DBConnection}).Info(fmt.
		Sprintf("Connected succesfully to DB"))
	log.Println("Connected succesfully to DB")

	return client
}

/*CheckConnection pings to DB to check if connection is stablished*/
func CheckConnection() int {
	err := MongoCN.Ping(context.TODO(), nil)
	if err != nil {
		return 0
	}
	return 1
}

func Close(client *mongo.Client, ctx context.Context,
	cancel context.CancelFunc) {

	// CancelFunc to cancel to context
	defer cancel()

	// client provides a method to close
	// a mongoDB connection.
	defer func() {

		// client.Disconnect method also has deadline.
		// returns error if any,
		if err := client.Disconnect(ctx); err != nil {
			panic(err)
		}
	}()
}

/*func Ping(client *mongo.Client, ctx context.Context) error {

	// mongo.Client has Ping to ping mongoDB, deadline of
	// the Ping method will be determined by cxt
	// Ping method return error if any occurred, then
	// the error can be handled.
	if err := client.Ping(ctx, readpref.Primary()); err != nil {
		return err
	}
	fmt.Println("connected successfully")
	return nil
}*/
