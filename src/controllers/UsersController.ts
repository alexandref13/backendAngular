import { Request, Response } from 'express'
import { users } from '../database'

let id = 1;

export default  {


  async getAll(req: Request, res: Response){
    return res.json(users)
  },

  async getOne(req: Request, res: Response){
    const { index } = req.params; 

    const user = users.filter(element => {
      return element.id == parseInt(index)
    })

    if(!user){
      return res.status(404).json({error: 'User does not exist!'})
    }

    return res.json(user)
  },

  async create(req: Request, res: Response){
    const { name, email, cpf } = req.body;

    id++;
    
    users.push({
      id, 
      name, 
      email, 
      cpf
    })
  
    return res.json({
      id, 
      name, 
      email, 
      cpf
    })
  },

  async update(req: Request, res: Response){
    const { index } = req.params;  
    const { name, email, cpf } = req.body;

    const userIndex = users.findIndex(element => element.id == parseInt(index))

    if(userIndex === -1){
      return res.status(404).json({error: "User does not exist"})
    }

    users[userIndex] = {
      ...users[userIndex],
      name,
      email, 
      cpf
    }

    return res.json(users[userIndex])
  },

  async delete(req: Request, res: Response){
    const { index } = req.params; 

    const userIndex = users.findIndex(element => element.id == parseInt(index))

    if(userIndex === -1){
      return res.status(404).json({error: "User does not exist"})
    }

    users.splice(userIndex, 1)

    return res.status(200).json({ok: 'ok'})
  }
}