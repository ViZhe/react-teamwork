
import mongoose, {Schema} from 'mongoose'
import bcrypt from 'bcryptjs'

import {hideProps} from '../utils/mongoose'


const userSchema = new Schema({
  email: {
    required: true,
    type: String,
    unique: true,
    lowercase: true
  },
  password: {
    required: true,
    type: String
  }
}, {
  toObject: {
    virtuals: true,
    transform: hideProps
  },
  toJSON: {
    versionKey: false,
    virtuals: true,
    hide: ['_id', 'password'],
    transform: hideProps
  }
})

userSchema.methods = {
  encryptPassword(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10))
  },
  validPassword(password) {
    return bcrypt.compareSync(password, this.password)
  }
}


export default mongoose.model('User', userSchema)
