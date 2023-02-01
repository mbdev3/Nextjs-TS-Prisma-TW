// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../prisma/client';
type postProps = {
  title: string;
};
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const post: postProps = JSON.parse(req.body);
    const data = await prisma.post.create({
      data: { title: post.title },
    });
    return res.status(300).json(data);
  } catch (error) {
    return res.status(500).json(error);
  }
}
