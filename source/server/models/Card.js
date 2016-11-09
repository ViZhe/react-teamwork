
import mongoose, {Schema} from 'mongoose'

import {hideProps} from '../utils/mongoose'


const cardSchema = new Schema({
  column_id: {
    type: Schema.Types.ObjectId,
    ref: 'Column',
    required: true
  },
  name: {
    type: String,
    required: true
  }
}, {
  toJSON: {
    versionKey: false,
    virtuals: true,
    transform: hideProps
  }
})


export default mongoose.model('Card', cardSchema)
