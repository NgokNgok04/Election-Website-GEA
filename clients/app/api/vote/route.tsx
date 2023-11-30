import { auth } from "@/auth";

export const POST = auth((req) => {
  if (req.auth)
  {
    return Response.json({data: "bener"});
  }
  return Response.json({message: "gagal"}, {status: 300})
}) as any