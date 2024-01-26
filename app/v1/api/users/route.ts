import Joi from '@hapi/joi';
import User from '../../../../controllers/User';
import { paginationQuery } from '../../../../types/request';

const UserCreateSchema = Joi.object({
  name: Joi.string().required(),
  lastname: Joi.string().required(),
  email: Joi.string().email().required(),
  address: Joi.string().required()
});

export const dynamic = 'force-dynamic'

export async function GET (
  req: Request & paginationQuery
): Promise<Response> {
  const { searchParams } = new URL(req.url)
  const payload = Object.fromEntries(searchParams.entries())
  console.log({ payload })

  const users = await User.getAll(payload);

  return Response.json(users);
};

export async function POST (req: Request): Promise<Response> {
  const payload = await req.json();
  const { error } = UserCreateSchema.validate(payload);

  if (error !== null && error !== undefined) {
    return Response.json({
      success: false,
      message: error.message
    })
  }

  const newUser = await User.create(payload);
  // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
  if (newUser.error) {
    return Response.json({
      success: false,
      message: newUser.error.message
    })
  }

  return Response.json({
    success: true,
    user: newUser
  });
};
