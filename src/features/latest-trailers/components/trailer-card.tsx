"use client";

import { UnderlineLink } from "@/components/underline-link";
import PlayButtonSrc from "@/assets/images/play-button.svg";
import CloseButtonSrc from "@/assets/images/close-button.svg";

import Image from "next/image";
import { useRef } from "react";

export type TrailerCardProps = {
  id: number;
  title: string;
  backdrop_path: string;
  key: string;
  name: string;
};

export function TrailerCard({ trailer }: { trailer: TrailerCardProps }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const iframe = useRef<HTMLIFrameElement>(null);

  const trailerName =
    trailer.name.length > 38 ? `${trailer.name.slice(0, 38)}...` : trailer.name;

  return (
    <article className="w-[300px] text-center">
      <dialog
        ref={dialog}
        className="rounded-lg bg-black/90 text-white backdrop:bg-black/40"
      >
        <section className="flex items-center justify-between gap-4 border-b-4 px-4 py-2.5">
          <h2 className="line-clamp-2 text-lg">{trailer.name}</h2>
          <button
            className=""
            onClick={() => {
              dialog.current?.close();
              iframe.current?.contentWindow?.postMessage(
                JSON.stringify({ event: "command", func: "stopVideo" }),
                "*",
              );
              iframe.current?.setAttribute("src", "");
            }}
            aria-label="Close trailer modal"
          >
            <Image src={CloseButtonSrc} alt="" width={24} height={24} />
          </button>
        </section>
        <iframe
          ref={iframe}
          width="1024"
          height="576"
          src={`https://www.youtube.com/embed/${trailer.key}`}
        ></iframe>
      </dialog>
      <div
        className="group relative cursor-pointer"
        aria-label="Open trailer modal"
        onClick={() => {
          dialog.current?.showModal();

          iframe.current?.setAttribute(
            "src",
            `https://www.youtube.com/embed/${trailer.key}?autoplay=1&enablejsapi=1`,
          );
        }}
      >
        <button className="absolute left-[-9999px] bg-slate-200 px-2 py-1 text-slate-900 focus:left-[10px] focus:top-[10px]">
          Open trailer player
        </button>
        <Image
          src={`https://media.themoviedb.org/t/p/w355_and_h200_multi_faces/${trailer.backdrop_path})`}
          alt={trailer.title}
          className="mb-1.5 w-full rounded-md bg-slate-50 object-cover transition-transform group-hover:scale-105"
          width={300}
          height={170}
        />
        <Image
          src={PlayButtonSrc}
          alt="Play"
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform shadow-lg transition-transform duration-100 group-hover:scale-110"
          width={36}
          height={36}
        />
      </div>

      <h3 className="mx-auto w-fit text-lg font-semibold">
        <UnderlineLink href={`/movies/${trailer.id}`}>
          {trailer.title}
        </UnderlineLink>
      </h3>
      <p title={trailer.name} className="text-sm">
        {trailerName}
      </p>
    </article>
  );
}
