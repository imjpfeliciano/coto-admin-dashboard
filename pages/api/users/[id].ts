import { NextApiRequest, NextApiResponse } from "next";
import User from "../../../controllers/User";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query;
  let user;

  const { method } = req;

  switch (method) {
    case "GET":
      // GET /api/users/:id -> get a user
      user = await User.get(String(id));
      res.status(200).json(user);
      break;
    case "PUT":
      // PUT /api/users/:id -> update a user
      user = await User.update(String(id), req.body);
      res.status(200).json({ ...user, age: 30 });
      break;
    case "DELETE":
      // DELETE /api/users/:id -> delete a user
      const status = await User.delete(String(id));
      res.status(200).json({ success: status });
      break;
  }
};

export default handler;
