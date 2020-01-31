import { Request, Response } from 'express'
import { User } from '../schemas/User'

import { UserInterface } from '../interfaces/User'

class UserController {
  public async index (req: Request, res: Response): Promise<Response> {
    const users = await User.find()

    return res.json(users)
  }

  public async store (req: Request, res: Response): Promise<Response> {
    const user = await User.create(req.body)

    return res.json(user)
  }

  public async update (req: Request, res: Response): Promise<Response> {
    const user = await User.findById(req.params.id)

    // const payload: UserInterface = req.body
    const { sexo, firstName, lastName, email }: UserInterface = req.body

    console.log(email)
    console.log(sexo)
    console.log(firstName)
    console.log(lastName)

    return res.json(user)
  }
}

export default new UserController()
