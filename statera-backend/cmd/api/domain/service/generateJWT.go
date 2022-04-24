package service

import (
	jwt "github.com/golang-jwt/jwt/v4"
	"github.com/jurodriguezf/statera/cmd/api/domain/model"
	"github.com/jurodriguezf/statera/cmd/api/domain/utils"
	"time"
)

/*GenerateJWT generates the JWT given user's data payload*/
func GenerateJWT(user model.User) (string, error) {
	JWTpassword := []byte(utils.GetEnvVariable("JWT_PASSWORD"))

	payload := jwt.MapClaims{
		"email":         user.Email,
		"name":          user.Name,
		"family_name":   user.FamilyName,
		"date_of_birth": user.DoB,
		"location":      user.Location,
		"_id":           user.ID.Hex(),
		"exp":           time.Now().Add(24 * time.Hour).Unix(),
	}

	token := jwt.NewWithClaims(jwt.SigningMethodHS256, payload)
	tokenStr, err := token.SignedString(JWTpassword)
	if err != nil {
		return tokenStr, err
	}

	return tokenStr, nil
}
