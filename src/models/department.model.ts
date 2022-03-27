import mongoose from 'mongoose'

const departmentSchema = new mongoose.Schema({
  name: { type: String, required: true, minlength: 5, maxlength: 20  }
})

export default mongoose.model('Department', departmentSchema)