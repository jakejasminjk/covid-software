const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3
  },
  password: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 5
  },
  screening: [
    {
      testedPos: {
        type: Array,
        required: true
      },
      temp: {
        type: Array,
        required: true
      },
      hadContact: {
        type: Array,
        required: true
      },
      hasSymptoms : {
        type: Array,
        required: true
      },
      possibleCovid: {
        type: Array,
        required: true
      }
    }
  ]
}, {
  timestamps: true,
});

const User = mongoose.model('User', userSchema);

module.exports = User;
