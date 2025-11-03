import supabase from "@/app/supabase";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { data: experiences, error: experiencesError } = await supabase
    .from("experiences")
    .select("*");
  if (experiencesError)
    return NextResponse.json(
      { message: "Error while crawling experiences", error: experiencesError },
      { status: 500 },
    );

  const { data: projects, error: projectsError } = await supabase
    .from("projects")
    .select("*");
  if (projectsError)
    return NextResponse.json(
      { message: "Error while crawling projects", error: projectsError },
      { status: 500 },
    );

  const { data: studies, error: studiesError } = await supabase
    .from("studies")
    .select("*");
  if (studiesError)
    return NextResponse.json(
      { message: "Error while crawling studies", error: studiesError },
      { status: 500 },
    );

  const { data: socials, error: socialsError } = await supabase
    .from("socials")
    .select("*");
  if (socialsError)
    return NextResponse.json(
      { message: "Error while crawling socials", error: socialsError },
      { status: 500 },
    );

  return NextResponse.json(
    { data: { experiences, projects, studies, socials } },
    { status: 200 },
  );
}
