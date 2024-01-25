import { NextApiRequest, NextApiResponse } from 'next';
import User from '../../../../../controllers/User';
import { StatusCodes } from 'http-status-codes';

const INVALID_USER_ID_MESSAGE = 'Invalid user id';

export const GET = async (
  req: Request,
  { params }: { params: { id: string } }
) => {
  try {
    const userId = params.id;
    const user = await User.get(String(userId));
    console.log({ userId });
    return Response.json({
      success: true,
      user,
    });
  } catch (error) {
    return Response.json({
      success: false,
      message: INVALID_USER_ID_MESSAGE,
    });
  }
};

export const PUT = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { id } = req.query;
    const user = await User.update(String(id), req.body);
    return res.status(StatusCodes.OK).json({ ...user, age: 30 });
  } catch (error) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ message: INVALID_USER_ID_MESSAGE });
  }
};

export const DELETE = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { id } = req.query;
    const status = await User.delete(String(id));
    return res.status(StatusCodes.OK).json({ success: status });
  } catch (error) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ message: INVALID_USER_ID_MESSAGE });
  }
};
