package service

import (
	"encoding/json"
	"errors"
	"github.com/jurodriguezf/statera/cmd/api/domain/model"
	"log"
	"net/http"
)

func CheckGoogleCaptcha(response string) error {
	var googleCaptcha string = "6LcsGKAgAAAAAD3690nD5DdXEZF61Lv99Yqk1gdn"
	req, err := http.NewRequest(http.MethodPost, "https://www.google.com/recaptcha/api/siteverify", nil)
	if err != nil {
		log.Fatal("Error captcha request")
		return err
	}

	query := req.URL.Query()
	query.Add("secret", googleCaptcha)
	query.Add("response", response)
	req.URL.RawQuery = query.Encode()

	resp, err := http.DefaultClient.Do(req)
	if err != nil {
		return err
	}
	defer resp.Body.Close()

	// Decode response.
	var body model.SiteVerifyResponse
	if err = json.NewDecoder(resp.Body).Decode(&body); err != nil {
		return err
	}

	// Check recaptcha verification success.
	if !body.Success {
		return errors.New("unsuccessful recaptcha verify request")
	}

	// Check response score.
	if body.Score < 0.5 {
		return errors.New("lower received score than expected")
	}

	// Check response action.
	if body.Action != "register" {
		return errors.New("mismatched recaptcha action")
	}

	return nil
}
