"use client";

import { useState } from "react";

export function Biography({ biography }: { biography: string | null }) {
  const [isExpanded, setIsExpanded] = useState(false);

  if (!biography) {
    return <p>No biography available for this person.</p>;
  }

  const trimmedLength = 650;

  if (biography.length > trimmedLength && !isExpanded) {
    return (
      <div className="relative">
        <BiographyText biography={biography.slice(0, trimmedLength)} />
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-r from-transparent to-white text-end">
          <button
            className="text-light-blue-gradient hover:text-green-gradient"
            onClick={() => setIsExpanded(true)}
          >
            ... Read more
          </button>
        </div>
      </div>
    );
  }

  return <BiographyText biography={biography} />;
}

function BiographyText({ biography }: { biography: string }) {
  return <p className="text-pretty text-justify">{biography}</p>;
}
