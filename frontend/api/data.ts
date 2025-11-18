// api/data.ts
import db from '../db.json';

export default function handler(req: any, res: any) {
  res.status(200).json(db);
}
