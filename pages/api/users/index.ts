import { NextApiRequest, NextApiResponse } from "next";
import * as Joi from "@hapi/joi";
import User from "../../../controllers/User";

const UserCreateSchema = Joi.object({
  name: Joi.string().required(),
});

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;

  switch (method) {
    case "POST":
      const { error } = UserCreateSchema.validate(req.body);

      if (error) {
        return res.status(400).json({
          message: "Invalid user data",
          error: error.details[0].message,
        });
      }

      // POST /api/users -> create a new user
      const newUser = await User.create(req.body.name);

      res.status(200).json(newUser);
      break;
    case "GET":
      // GET /api/users -> get all users
      const users = await User.getAll();
      res.status(200).json(users);
      break;
    // FIXME: return message for invalid methods
  }
};

export default handler;
