import { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const { userId, items, total } = req.body
      const order = await prisma.order.create({
        data: {
          userId,
          total: parseFloat(total),
          status: 'PENDING', // La commande est en attente de paiement à la livraison
          items: {
            create: items.map((item: any) => ({
              productId: item.id,
              quantity: item.quantity,
              price: item.price
            }))
          }
        }
      })
      res.status(201).json(order)
    } catch (error) {
      res.status(500).json({ message: 'Error creating order' })
    }
  } else {
    res.setHeader('Allow', ['POST'])
    res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}
