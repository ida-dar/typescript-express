import Employee from '../models/employee.model'
import { Request, Response } from 'express';
import { reqBody } from 'interfaces/reqBody';

export const getAll = async (req: Request, res: Response) => {
  try {
    res.json(await Employee.find().populate('department'))
  }
  catch(err) {
    res.status(500).json({ message: err })
  }
}

export const getRandom = async (req: Request, res: Response) => {
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

export const getId = async (req: Request, res: Response) => {
  try {
    const emp = await Employee.findById(req.params.id)
    if(!emp) res.status(404).json({ message: 'Not found' })
    else res.json(emp)
  }
  catch(err) {
    res.status(500).json({ message: err })
  }
}

export const post = async (req: Request, res: Response) => {
  try {
    const { firstName, lastName, department } = req.body as reqBody
    const empData = { firstName, lastName, department }
    await Employee.create(empData)
    res.json({ message: 'OK' })
  } 
  catch(err) {
    res.status(500).json({ message: err })
  }
}

export const putId = async (req: Request, res: Response) => {
  const { firstName, lastName, department } = req.body as reqBody
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

export const deleteId = async (req: Request, res: Response) => {
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