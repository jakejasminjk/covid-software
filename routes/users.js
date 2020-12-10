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
  const testedPos = []
  const temp = [100.4,100.8]
  const hadContact = []
  const hasSymptoms = []
  const possibleCovid = []
  //const newUser = new User({username,password,"screening.0.testedPos":testedPos,"screening.0.temp":temp,"screening.0.hadContact":hadContact,"screening.0.hasSymptoms":hasSymptoms,
  //  "screening.0.possibleCovid":possibleCovid});
  const newUser = new User(
    {username,password,screening: []});
  newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/verify').post((req,res) => {
  const query = User.find({"username" : req.body.username}, function(err, arr) {
    if(err) {
      throw err;
    }
    if(arr === undefined || arr.length == 0) {
      console.log("User not found");
    } else {
      const isUser = bcrypt.compareSync(req.body.password, arr[0].password);
      if(isUser) {
        console.log("Verified");
      }
    }
  });
});

router.route('/screening').post((req, res) => { //Route for screening functionality
  //On front end, add in POSTed content testedPos (boolean radio button), temp (text box), hadContact (boolean radio button), hasSymptoms (boolean radio button)
  let testedPos = false;
  let hadContact = false;
  let hasSymptoms = false;
  if(req.body.testedPos == 'yes') {
    testedPos = true;
  }
  if(req.body.hadContact == 'yes') {
    hadContact = true;
  }
  if(req.body.hasSymptoms == 'yes') {
    hasSymptoms = true;
  }
  posCovid = false;
  counter = 0
  if (testedPos == true) {
    posCovid = true;
  } else {

    if (parseFloat(req.body.temp) >= 100.0) {
      counter += 1;
    }

    if (hadContact == true) {
      counter += 1;
    }

    if (hasSymptoms == true) {
      counter += 1;
    }

    if (counter >= 2) {
      posCovid = true;
    }
  }
  var objScreen = {testedPos, temp: req.body.temp,
    hadContact, hasSymptoms, possibleCovid: posCovid};
  
  const query = User.find({"username" : "test123"}, function(err, arr) {
    if(err) {
      throw err;
    }
    if(arr === undefined || arr.length == 0) {
      console.log("User not found");
    } else {
      arr[0].screening.push(objScreen);
      arr[0].save()
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
