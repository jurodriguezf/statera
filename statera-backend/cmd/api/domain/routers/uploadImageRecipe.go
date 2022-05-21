package routers

import (
	"fmt"
	"github.com/jurodriguezf/statera/cmd/api/domain/db"
	"github.com/jurodriguezf/statera/cmd/api/domain/model"
	"io"
	"net/http"
	"os"
	"strings"
)

func UploadImageRecipe(request *http.Request, ID string) error {
	file, handler, err := request.FormFile("recipe")
	var extension = strings.Split(handler.Filename, ".")[1]
	var fileRecipe string = "cmd/uploads/recipes/" + ID + "." + extension

	f, err := os.OpenFile(fileRecipe, os.O_WRONLY|os.O_CREATE, 0666)
	if err != nil {
		fmt.Println(err)
		return err
	}

	_, err = io.Copy(f, file)
	if err != nil {
		return err
	}

	var recipe model.Recipe
	var status bool

	recipe.ImageRecipe = ID + "." + extension

	status, err = db.EditRecipe(recipe, ID)
	if err != nil || status == false {
		return err
	}

	return nil
}
