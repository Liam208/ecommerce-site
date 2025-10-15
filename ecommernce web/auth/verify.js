import jwt from "jsonwebtoken";

const SECRET_KEY = process.env.JWT_SECRET;

export default function auth(req, res, next) {
  const authHeader = req.headers["authorization"];
  if (!authHeader) return res.status(401).json({ msg: "No token provided" });

  const token = authHeader.split(" ")[1]; // "Bearer token"
  jwt.verify(token, SECRET_KEY, (err, decoded) => {
    if (err) return res.status(403).json({ msg: "Invalid token" });
    req.user = decoded; // { id, email }
    next();
  });
}
