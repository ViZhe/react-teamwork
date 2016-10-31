
import mongoose, {Schema} from 'mongoose'


const userSchema = new Schema({
  owner_id: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  }
})


export default mongoose.model('Board', userSchema)
