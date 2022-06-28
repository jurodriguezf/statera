package utils

import (
	"fmt"
	"github.com/sirupsen/logrus"
	"os"
)

type Events struct {
	DBConnection       string
	Login              string
	Register           string
	FailedDBConnection string
	FailedLogin        string
	FailedRegister     string
}

var LoggingEvents = Events{
	DBConnection:       "DB_CONNECTION",
	Login:              "USER_LOGIN",
	Register:           "USER_REGISTER",
	FailedDBConnection: "DB_CONNECTION_FAILED",
	FailedLogin:        "FAILED_USER_LOGIN",
	FailedRegister:     "FAILED_USER_REGISTER",
}

func InitializeLogging(logFile string) {

	var file, err = os.OpenFile(logFile, os.O_RDWR|os.O_CREATE|os.O_APPEND, 0666)
	if err != nil {
		fmt.Println("Could Not Open Log File : " + err.Error())
	}
	logrus.SetOutput(file)

	logrus.SetFormatter(&logrus.TextFormatter{})
	//logrus.SetFormatter(&logrus.JSONFormatter{})
}
