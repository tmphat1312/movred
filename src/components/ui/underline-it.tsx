"use client";

import { useEffect, useRef } from "react";
import { annotate } from "rough-notation";

export function UnderlineIt(props: React.ComponentProps<"span">) {
  const el = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!el.current) return;

    const annotation = annotate(el.current, {
      type: "underline",
      color: "lightblue",
      padding: [0, 2],
    });
    annotation.show();

    return annotation.remove;
  });

  return <span ref={el} {...props} />;
}
