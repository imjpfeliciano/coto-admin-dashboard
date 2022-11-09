import { NextApiRequest, NextApiResponse } from 'next';
import User from '../../../controllers/User';
// TODO: Add http-status-codes

// /api/users/[id]
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { id } = req.query;
    let user;

    const { method } = req;

    switch (method) {
      case 'GET':
        user = await User.get(String(id));
        res.status(200).json(user);
        break;
      case 'PUT':
        user = await User.update(String(id), req.body);
        res.status(200).json({ ...user, age: 30 });
        break;
      case 'DELETE':
        const status = await User.delete(String(id));
        res.status(200).json({ success: status });
        break;
    }
  } catch (error) {
    res.status(400).json({ message: 'Invalid user id' });
  }
};

export default handler;
