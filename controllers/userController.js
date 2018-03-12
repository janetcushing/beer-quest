const db = require("../models");

// Defining methods for the userController
module.exports = {
  create: function (req, res) {
    console.log("got to user controller create ");
    console.log(req.body);
    db.UserStore
      .create(req.body)
      .then(dbModel => {
        console.log("UserSotre created");
        console.log(dbModel);
        res.json(dbModel)
      })
      .catch(err => res.status(422).json(err));
  },
  // update: function(req, res) {
  //   console.log("got to user controller ");
  //   console.log(req.body);
  //   console.log(req.params);
  //   db.UserStore
  //     .findOneAndUpdate({ _id: req.params.id }, req.body)
  //     .then(dbModel => 
  //       {console.log(dbModel)
  //       res.json(dbModel)})
  //     .catch(err => res.status(422).json(err));
  // },
  // remove: function(req, res) {
  //   db.UserStore
  //     .find().where('name').equals(req.params.name).remove()
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },
  findByName: function (req, res) {
    console.log("got to user controller findByName ");
    db.UserStore
      .find({name: req.params.name})
      .then(dbModel => {
        console.log("back from findByName");
        console.log(dbModel);
        if (dbModel.name) {
          console.log(`User found ${dbModel.name}`);
        }
        res.json(dbModel)
      })
      .catch(err => res.status(422).json(err));
  }
};