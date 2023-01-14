package main

import (
	"log"

	"fmt"
	"net/http"

	"github.com/gin-gonic/gin"
	"gorm.io/gorm"
	database "ultr7a.com/db"
	model "ultr7a.com/model"

	"github.com/gorilla/websocket"
)

var upgrader = websocket.Upgrader{} // use default options

func socketAPI(w http.ResponseWriter, r *http.Request) {
	c, err := upgrader.Upgrade(w, r, nil)
	if err != nil {
		log.Print("upgrade:", err)
		return
	}
	defer c.Close()
	for {
		mt, message, err := c.ReadMessage()
		if err != nil {
			log.Println("read:", err)
			break
		}
		log.Printf("recv: %s", message)
		err = c.WriteMessage(mt, message)
		if err != nil {
			log.Println("write:", err)
			break
		}
	}
}

var db *gorm.DB

func main() {
	fmt.Println("Starting ultr7a.com on port 3080")

	db = database.InitDb()

	r := setupRouter()
	_ = r.Run(":3080")
}

func setupRouter() *gin.Engine {
	r := gin.Default()

	// Get pages as json data:
	r.GET("/pages", func(c *gin.Context) {
		pages := []model.Page{}

		model.GetPages(db, &pages)

		c.JSON(http.StatusOK, gin.H{
			"pages": pages,
		})
	})

	// Get page by url as json data:
	r.GET("/page/:url", func(c *gin.Context) {
		url := c.Param("url")
		page := model.Page{}

		model.GetPageByUrl(db, &page, url)

		c.JSON(http.StatusOK, gin.H{
			"page": page,
		})
	})

	r.GET("/socket", gin.WrapF(socketAPI))

	r.NoRoute(gin.WrapH(http.FileServer(http.Dir("../client/build"))))

	return r
}
