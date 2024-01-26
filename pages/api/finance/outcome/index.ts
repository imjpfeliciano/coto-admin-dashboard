// Egresos

import { NextApiRequest, NextApiResponse } from 'next'

// Pago a proveedores
// - Jardineria
// - Limpieza
// - Seguridad
// Pago a empleados
export const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({ name: 'John Doe' })
}
