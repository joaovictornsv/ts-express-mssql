/* eslint-disable no-unused-vars */
/* eslint-disable no-empty-function */
/* eslint-disable no-useless-constructor */
import { Request, Response } from 'express';
import { User } from '../entities/User';

class UserController {
  create = async (request: Request, response: Response) => {
    const { name, email } = request.body;
    if (!name || !email) {
      return response.status(400).json({ error: 'Provide required data' });
    }

    const userAlreadyExists = await User.findOne({ email });

    if (userAlreadyExists) {
      return response.status(400).json({ error: 'User alredy exists' });
    }

    const user = User.create({ name, email });

    await User.save(user);

    return response.status(201).json(user);
  }

  indexById = async (request: Request, response: Response) => {
    const { id } = request.params;

    const user = await User.findOne(id);

    if (!user) {
      return response.status(404).json({ error: 'User not found' });
    }

    return response.status(200).json(user);
  }

  index = async (request: Request, response: Response) => {
    const users = await User.find();

    return response.status(200).json(users);
  }

  update = async (request: Request, response: Response) => {
    const { name, email } = request.body;
    const { id } = request.params;

    const user = await User.findOne(id);

    if (!user) {
      return response.status(404).json({ error: 'User not found' });
    }

    if (name) user.name = name;
    if (email) user.email = email;

    await User.save(user);

    return response.status(200).json('Changes saved!');
  }
}

export { UserController };
