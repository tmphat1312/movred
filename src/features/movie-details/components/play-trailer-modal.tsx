"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

import PlayButtonSrc from "@/assets/images/play-button.svg";
import CloseButtonSrc from "@/assets/images/close-button.svg";

export function PlayTrailerModal({
  trailer,
}: {
  trailer: {
    key: string;
    name: string;
  };
}) {
  const dialog = useRef<HTMLDialogElement>(null);
  const iframe = useRef<HTMLIFrameElement>(null);

  function handleCloseTrailerModal() {
    dialog.current?.close();
    iframe.current?.contentWindow?.postMessage(
      JSON.stringify({ event: "command", func: "stopVideo" }),
      "*",
    );
    iframe.current?.setAttribute("src", "");
  }

  function handleOpenTrailerModal() {
    dialog.current?.showModal();
    iframe.current?.setAttribute(
      "src",
      `https://www.youtube.com/embed/${trailer.key}?autoplay=1&enablejsapi=1`,
    );
  }

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        handleCloseTrailerModal();
      }
    }

    dialog.current?.addEventListener("keydown", handleKeyDown);
    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      dialog.current?.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <>
      <dialog
        ref={dialog}
        className="rounded-lg bg-black/90 text-white backdrop:bg-black/40"
      >
        <section className="flex items-center justify-between gap-4 border-b-4 px-4 py-2.5">
          <h2 className="line-clamp-2 text-lg">{trailer.name}</h2>
          <button
            onClick={handleCloseTrailerModal}
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
      <button
        className="inline-flex items-center gap-1.5 transition-opacity hover:opacity-60"
        onClick={handleOpenTrailerModal}
      >
        <Image src={PlayButtonSrc} alt="Play Trailer" width={16} height={16} />
        <span>Play Trailer </span>
      </button>
    </>
  );
}
