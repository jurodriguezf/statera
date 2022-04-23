package routers

import (
	"errors"
	jwt "github.com/golang-jwt/jwt/v4"
	"github.com/jurodriguezf/statera/cmd/api/domain/db"
	"github.com/jurodriguezf/statera/cmd/api/domain/model"
)

/*Email stores the email of a logged user, this variable is used in most endpoint*/
var Email string

/*IDUser stores the ID of a logged user, this variable is used in every endpoint*/
var IDUser string

/*ProcessToken function that process the given token and its values*/
func ProcessToken(token string) (*model.Claim, bool, string, error) {
	JWTPassword := []byte("StateraIngesoftII")
	claims := &model.Claim{}

	tkn, err := jwt.ParseWithClaims(token, claims, func(token *jwt.Token) (interface{}, error) {
		return JWTPassword, nil
	})
	if err == nil {
		_, found, _ := db.UserExists(claims.Email)
		if found == true {
			Email = claims.Email
			IDUser = claims.ID.Hex()
		}
		return claims, found, IDUser, nil
	}
	if !tkn.Valid {
		return claims, false, string(""), errors.New("Invalid Token")
	}

	return claims, false, string(""), err
}
