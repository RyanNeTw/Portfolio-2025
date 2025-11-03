import octokit from "@/app/octokit";
import { NextResponse } from "next/server";

export async function GET() {
  const user = await octokit.request("GET /user", {
    headers: {
      "X-GitHub-Api-Version": "2022-11-28",
    },
  });

  if (user.status !== 200)
    return NextResponse.json({ data: null }, { status: 500 });

  return NextResponse.json({ data: user.data }, { status: 200 });
}
