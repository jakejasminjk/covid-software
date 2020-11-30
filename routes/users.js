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
  posCovid = false;
  counter = 0
  if (req.body.testedPos == true) {
    posCovid = true;
  } else {

    if (parseFloat(req.body.temp) > 100) {
      counter += 1;
    }

    if (req.body.hadContact == true) {
      counter += 1;
    }

    if (req.body.hasSymptoms == true) {
      counter += 1;
    }

    if (counter >= 2) {
      posCovid = true;
    }
  }
  User.update(
    {"username" : req.body.username}, 
    {
      $set : {
        screening: {"testedPos[testedPos.length]" : req.body.testedPos, "temp[temp.length]": req.body.temp, 
        "hadContact[hadContact.length]": req.body.hadContact, "hasSymptoms[hasSymptoms.length]": req.body.hasSymptoms, "possibleCovid[possibleCovid.length]": posCovid}
      }
    })
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
