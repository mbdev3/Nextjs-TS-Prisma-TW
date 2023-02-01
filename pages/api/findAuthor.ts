// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../prisma/client';

export default async function handler(req: any, res: NextApiResponse) {
  let query = parseInt(req.query.id);

  try {
    const user = await prisma.user.findUnique({
      where: {
        id: query,
      },
    });
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json(error);
  }
}
