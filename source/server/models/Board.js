
import mongoose, {Schema} from 'mongoose'

// eslint-disable-next-line no-unused-vars
import Column from './Column'
import {hideProps} from '../utils/mongoose'


const boardSchema = new Schema({
  owner_id: {
    type: Schema.Types.ObjectId,
    ref: 'User',
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

boardSchema.virtual('columns', {
  ref: 'Column',
  localField: '_id',
  foreignField: 'board_id'
})


export default mongoose.model('Board', boardSchema)
