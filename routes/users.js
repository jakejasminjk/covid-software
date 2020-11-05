const router = require('express').Router();
let User = require('../models/user.model');
const bcrypt = require('bcrypt');

router.route('/').get((req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const username = req.body.username;
  //Plain text password
  const password = bcrypt.hashSync(req.body.password,10);

  const newUser = new User({username,password});

  newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/verify').post((req,res) => {
  console.log(req.body.username, '<-- Username');
  console.log(req.body.password, '<-- password');
  const query = User.find({"username" : req.body.username}, function(err, arr) {
    if(err) {
      throw err;
    }
    console.log(arr);
    if(arr === undefined || arr.length == 0) {
      console.log("User not found")
    } else {
      const isUser = bcrypt.compareSync(req.body.password, arr[0].password);
      if(isUser) {
        console.log("Verified");
      }
    }
  });
});
  

router.route('/:id').get((req, res) => {
  User.findById(req.params.id)
    .then(user => res.json(user))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  User.findByIdAndDelete(req.params.id)
    .then(() => res.json('User deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/update/:id').post((req, res) => {
  User.findById(req.params.id)
    .then(user => {
      user.username = req.body.username;

      user.save()
        .then(() => res.json('UserName updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});






module.exports = router;
