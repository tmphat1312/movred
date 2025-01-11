import PlayButtonSrc from "@/assets/images/play-button.svg";
import Image from "next/image";

export function PlayModalButton() {
  return (
    <div>
      <button className="inline-flex items-center gap-1.5 transition-opacity hover:opacity-60">
        <Image src={PlayButtonSrc} alt="Play Trailer" width={16} height={16} />
        <span>Play Trailer</span>
      </button>
    </div>
  );
}
