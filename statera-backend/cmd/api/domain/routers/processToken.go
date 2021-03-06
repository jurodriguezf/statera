package routers

import (
	"errors"

	jwt "github.com/golang-jwt/jwt/v4"
	"github.com/jurodriguezf/statera/cmd/api/domain/db"
	"github.com/jurodriguezf/statera/cmd/api/domain/model"
	"github.com/jurodriguezf/statera/cmd/api/domain/utils"
	"go.mongodb.org/mongo-driver/bson/primitive"
)

/*Email stores the email of a logged user, this variable is used in most endpoint*/
var Email string

/*IDUser stores the ID of a logged user, this variable is used in every endpoint*/
var IDUser string
var IDUserOBJ primitive.ObjectID

/*ProcessToken function that process the given token and its values*/
func ProcessToken(token string) (*model.Claim, bool, string, error) {
	JWTPassword := []byte(utils.GetEnvVariable("JWT_PASSWORD"))
	claims := &model.Claim{}

	tkn, err := jwt.ParseWithClaims(token, claims, func(token *jwt.Token) (interface{}, error) {
		return JWTPassword, nil
	})
	if err == nil {
		_, found, _ := db.UserExists(claims.Email)
		if found == true {
			Email = claims.Email
			IDUser = claims.ID.Hex()
			IDUserOBJ = claims.ID
		}
		return claims, found, IDUser, nil
	}
	if tkn != nil && !tkn.Valid {
		return claims, false, string(""), errors.New("Invalid Token")
	}

	return claims, false, string(""), err
}
