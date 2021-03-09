import { getPaginatedBlogs } from "lib/api";

///These are comments
export default async function getBlogs(req, res) {
  const offset = parseInt(req.query.offset || 0, 10);
  const date = req.query.date || "desc";
  const data = await getPaginatedBlogs({ offset, date });
  res.status(200).json(data);
}
