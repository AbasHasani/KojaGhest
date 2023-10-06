import { createEdgeRouter, createRouter } from "next-connect";
import upload from "./upload";
import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";

const router = createEdgeRouter<NextRequest, { params?: unknown }>();

router.post(upload.single("image"), async (req) => {
  const form = await req.formData();
  console.log(form.);

  return NextResponse.json({
    success: true,
  });
});

router.get((req, res) => {
  return NextResponse.json({ message: "Hello world" });
});

export async function GET(request: NextRequest, ctx: { params?: unknown }) {
  return router.run(request, ctx);
}

export async function POST(request: NextRequest, ctx: { params?: unknown }) {
  return router.run(request, ctx);
}
