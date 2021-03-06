var db = require("../models");

module.exports = app => {
  app.get("/", (req, res) => {
    db.Burger.findAll({}).then(data => {
      var obj = [];
      data.forEach(element => {
        obj.push(element.dataValues);
      });

      res.render("index", { burgers: obj });
    });
  });

  app.put("/api/burger/:id", (req, res) => {
    db.Burger.update(
      {
        devoured: req.body.devoured
      },
      {
        where: {
          id: req.params.id
        }
      }
    ).then(data => {
      if (data == 0) {
        res.status(404);
        return res.end();
      } else {
        res.status(200);
        res.end();
      }
    });
  });

  app.post("/api/burger", (req, res) => {
    console.log(req.body);
    db.Burger.create(req.body).then(data => {
      res.status(200);
      res.end();
    });
  });
};

// router.get("/", (req, res) => {
//     burger.all((data) => {

//         console.log({burgers: data})

//         res.render("index", {burgers: data})

//     })
// })

// router.put("/api/burger/:id", (req, res) => {
//     var condition = "id=" + req.params.id;
//     console.log(condition);
//     console.log(req.body.devoured);
//     burger.update({
//         devoured: req.body.devoured
//     }, condition, (result) => {
//         if (result.changedRows == 0) {
//             res.status(404);
//             return res.end();
//         } else {
//             res.status(200);
//             res.end()
//         }
//     });
// })

// router.post("/api/burger", (req, res) => {
//     console.log(req.body.name, req.body.devoured)
//     burger.create(["burger_name", "devoured"],
//     [req.body.name, req.body.devoured], (result) => {
//         res.json({id: result.insertId});
//     })
// })

// module.exports = router;
