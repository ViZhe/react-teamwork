
import mongoose, {Schema} from 'mongoose'

// eslint-disable-next-line no-unused-vars
import Card from './Card'
import {hideProps} from '../utils/mongoose'


const columnSchema = new Schema({
  board_id: {
    type: Schema.Types.ObjectId,
    ref: 'Board',
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

columnSchema.virtual('cards', {
  ref: 'Card',
  localField: '_id',
  foreignField: 'column_id'
})


export default mongoose.model('Column', columnSchema)
