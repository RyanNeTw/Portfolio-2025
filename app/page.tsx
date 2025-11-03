"use client";

import React, { useState, useEffect, ReactElement } from "react";
import HandleError from "./components/HandleError";
import { EndPoints, GithubUser, Informations } from "./types";
import getData from "./utils/getData";
import Presentation from "./components/Presentation";
import Project from "./components/Project";
import Loading from "./components/Loading";
import Experience from "./components/Experience";
import Studi from "./components/Studi";
import Languages from "./components/Languages";
import Footer from "./components/Footer";
import HorizontalScroll from "./components/HorizontalScroll";

export default function Home() {
  const [user, setUser] = useState<GithubUser | null>(null);
  const [informations, setInformations] = useState<Informations | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetch = async () => {
      const res = await getData<GithubUser>({ link: EndPoints.GITHUB_PROFIL });
      setUser(res);

      const infos = await getData<Informations>({
        link: EndPoints.INFORMATIONS,
      });
      setInformations(infos);
      setIsLoading(false);
    };

    fetch();
  }, []);

  if (isLoading) return <Loading />;
  if (!user || !informations) return <HandleError />;

  const pages: { children: ReactElement }[] = [
    {
      children: (
        <Presentation user={user} socials={informations?.socials ?? []} />
      ),
    },
    {
      children: <Project projects={informations?.projects ?? []} />,
    },
    {
      children: <Experience experiences={informations?.experiences ?? []} />,
    },
    {
      children: <Languages />,
    },
    {
      children: <Studi studies={informations?.studies ?? []} user={user} />,
    },
    {
      children: <Footer user={user} socials={informations.socials ?? []} />,
    },
  ];

  return (
    <>
      <HorizontalScroll
        children={
          <>
            <section className="flex flex-row">
              {pages?.map((page, index) => (
                <div key={index} className="h-screen w-screen flex-shrink-0">
                  {page.children}
                </div>
              ))}
            </section>
          </>
        }
      />
    </>
  );
}
