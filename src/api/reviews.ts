import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY; // Salve sua chave no .env.local
    const PLACE_ID = "ChIJN1t_tDeuEmsRUsoyG83frY4"; // Substitua pelo ID correto

    const response = await fetch(
      `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=reviews&key=${GOOGLE_API_KEY}`
    );
    const data = await response.json();

    if (!data.result || !data.result.reviews) {
      return res.status(404).json({ message: "Nenhuma avaliação encontrada." });
    }

    res.status(200).json(data.result.reviews);
  } catch (error) {
    res.status(500).json({ message: "Erro ao buscar avaliações", error });
  }
}
