import Department from '../models/department.model';
import { Request, Response } from 'express';
import { reqBody } from 'interfaces/reqBody';

export const getAll = async (req: Request, res: Response) => {
  try {
    res.json(await Department.find())
  }
  catch(err) {
    res.status(500).json({ message: err })
  }
}

export const getRandom = async (req: Request, res: Response) => {
  try {
    const count = await Department.countDocuments()
    const rand = Math.floor(Math.random() * count)
    const dep = await Department.findOne().skip(rand)
    if(!dep) res.status(404).json({ message: 'Not found' })
    else res.json(dep)
  }
  catch(err) {
    res.status(500).json({ message: err })
  }
}

export const getId = async (req: Request, res: Response) => {
  try {
    const dep = await Department.findById(req.params.id)
    if(!dep) res.status(404).json({ message: 'Not found' })
    else res.json(dep)
  }
  catch(err) {
    res.status(500).json({ message: err })
  }
}

export const post = async (req: Request, res: Response) => {
  try {
    const { name } = req.body as reqBody
    const depData = { name }
    await Department.create(depData)
    res.json({ message: 'OK' })

  } catch(err) {
    res.status(500).json({ message: err })
  }
}

export const putId = async (req: Request, res: Response) => {
  const { name } = req.body as reqBody
  try {
    const dep = await Department.findById(req.params.id)
    if(dep) {
      await Department.updateOne({ _id: req.params.id }, { $set: { name: name }})
      res.json({ dep })
    }
    else res.status(404).json({ message: 'Not found...' })
  }
  catch(err) {
    res.status(500).json({ message: err })
  }
}

export const deleteId = async (req: Request, res: Response) => {
  try {
    const dep = await Department.findById(req.params.id)
    if(dep) {
      await Department.deleteOne({ _id: req.params.id })
      res.json({ dep })
    }
    else res.status(404).json({ message: 'Not found...' })
  }
  catch(err) {
    res.status(500).json({ message: err })
  }
}