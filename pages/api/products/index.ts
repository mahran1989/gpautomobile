import { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const products = await prisma.product.findMany({
        include: { category: true }
      })
      res.status(200).json(products)
    } catch (error) {
      res.status(500).json({ message: 'Error fetching products' })
    }
  } else if (req.method === 'POST') {
    try {
      const { name, description, price, categoryId, inventory, image } = req.body
      const product = await prisma.product.create({
        data: {
          name,
          description,
          price: parseFloat(price),
          categoryId,
          inventory: parseInt(inventory),
          image
        }
      })
      res.status(201).json(product)
    } catch (error) {
      res.status(500).json({ message: 'Error creating product' })
    }
  } else {
    res.setHeader('Allow', ['GET', 'POST'])
    res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}
