import { NextApiRequest, NextApiResponse } from 'next'

// multas
export const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({ name: 'John Doe' })
}
