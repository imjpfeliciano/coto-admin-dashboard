import User from '../../../../../controllers/User';

const INVALID_USER_ID_MESSAGE = 'Invalid user id';

interface UserDetailRequest {
  params: {
    id: string;
  };
}
export const GET = async (req: Request, { params }: UserDetailRequest) => {
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

export const PUT = async (req: Request, { params }: UserDetailRequest) => {
  try {
    const userId = params.id;
    const payload = await req.json();
    const user = await User.update(String(userId), payload);
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

export const DELETE = async (req: Request, { params }: UserDetailRequest) => {
  try {
    const userId = params.id;
    const status = await User.delete(String(userId));
    return Response.json({
      success: true,
      status,
    });
  } catch (error) {
    return Response.json({
      success: false,
      message: INVALID_USER_ID_MESSAGE,
    });
  }
};
