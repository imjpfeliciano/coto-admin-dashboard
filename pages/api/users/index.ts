import { NextApiRequest, NextApiResponse } from "next";
import Joi from "@hapi/joi";
import { StatusCodes } from "http-status-codes";
import User from "../../../controllers/User";
import { paginationQuery } from "../../../types/request";

const UserCreateSchema = Joi.object({
  name: Joi.string().required(),
  lastname: Joi.string().required(),
  email: Joi.string().email().required(),
  address: Joi.string().required(),
});

// /api/users
const handler = async (
  req: NextApiRequest & paginationQuery,
  res: NextApiResponse
) => {
  const { method, body: payload, query = {} } = req;

  switch (method) {
    case "POST":
      const { error } = UserCreateSchema.validate(payload);

      // FIXME: Validate error is joi
      if (error) {
        return res.status(StatusCodes.BAD_REQUEST).json({
          message: "Invalid user data",
          error: error.details[0].message,
        });
      }

      const newUser = await User.create(payload);
      if (newUser.error) {
        return res.status(StatusCodes.BAD_REQUEST).json({
          error: newUser.error,
        });
      }
      res.status(StatusCodes.OK).json(newUser);
      break;

    case "GET":
      const users = await User.getAll(query);
      res.status(StatusCodes.OK).json(users);
      break;
    // FIXME: return message for invalid methods
  }
};

export default handler;
