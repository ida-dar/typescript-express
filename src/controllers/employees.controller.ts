import Employee from '../models/employee.model'

export const getAll = async (req, res) => {
  try {
    res.json(await Employee.find().populate('department'))
  }
  catch(err) {
    res.status(500).json({ message: err })
  }
}

export const getRandom = async (req, res) => {
  try {
    const count = await Employee.countDocuments()
    const rand = Math.floor(Math.random() * count)
    const emp = await Employee.findOne().skip(rand)
    if(!emp) res.status(404).json({ message: 'Not found' })
    else res.json(emp)
  }
  catch(err) {
    res.status(500).json({ message: err })
  }
}

export const getId = async (req, res) => {
  try {
    const emp = await Employee.findById(req.params.id)
    if(!emp) res.status(404).json({ message: 'Not found' })
    else res.json(emp)
  }
  catch(err) {
    res.status(500).json({ message: err })
  }
}

export const post = async (req, res) => {
  try {
    const { firstName, lastName, department } = req.body
    const newEmployee = new Employee({ firstName, lastName, department })
    await newEmployee.save()
    res.json({ message: 'OK' })
  } 
  catch(err) {
    res.status(500).json({ message: err })
  }
}

export const putId = async (req, res) => {
  const { firstName, lastName, department } = req.body
  try {
    const emp = await Employee.findById(req.params.id)
    if(emp) {
      await Employee.updateOne({ _id: req.params.id }, { $set: { firstName, lastName, department }})
      res.json({ emp })
    }
    else res.status(404).json({ message: 'Not found...' })
  }
  catch(err) {
    res.status(500).json({ message: err })
  }
}

export const deleteId = async (req, res) => {
  try {
    const emp = await(Employee.findById(req.params.id))
    if(emp) {
      await Employee.deleteOne({ _id: req.params.id })
      res.json({ emp })
    }
    else res.status(404).json({ message: 'Not found...' })
  }
  catch(err) {
    res.status(500).json({ message: err })
  }
}