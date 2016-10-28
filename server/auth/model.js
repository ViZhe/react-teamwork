
import mongoose, {Schema} from 'mongoose'
import bcrypt from 'bcrypt'


const userSchema = new Schema({
  email: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
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
