import { NEXT_AUTH_CONFIG } from "@/lib/auth_config";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function GET() {
  const Session = await getServerSession(NEXT_AUTH_CONFIG);
  return NextResponse.json({
    name : Session.user?.name,
  });
}
