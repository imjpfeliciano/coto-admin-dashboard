// Ingresos:

import { NextApiRequest, NextApiResponse } from "next";

/**
 * - Cuotas de mantenimiento
 * - Cuotas de servicios (Rentar terraza, etc)
 * - Cuotas por multas
 */
export const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({ name: "John Doe" });
};
