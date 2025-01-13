"use client";

import { FloatingMessage } from "@/components/ui/floating-message";
import { useActionState } from "react";
import { FormState } from "../actions/FormState";

const initialState: FormState = {
  status: "idle",
  message: "",
};

export function RemovingForm({
  icon,
  label,
  action,
  children,
  movieId,
}: {
  movieId: number;
  icon: React.ReactNode;
  children: React.ReactNode;
  label: string;
  action: (prestate: FormState, formData: FormData) => Promise<FormState>;
}) {
  const [state, formAction, pending] = useActionState(action, initialState);

  if (state.status === "success") {
    return null;
  }

  return (
    <>
      {state.status == "error" && (
        <FloatingMessage variant="error">{state.message}</FloatingMessage>
      )}
      <div className="relative h-full w-fit">
        <form action={formAction} className="absolute right-1 top-1 z-10">
          <input type="hidden" name="movieId" value={movieId} />
          <button
            className="rounded-full bg-opacity-50 p-1.5 shadow-md backdrop-blur-sm transition-transform hover:scale-105 hover:bg-white/50 disabled:cursor-not-allowed disabled:opacity-50"
            aria-label={label}
            title={label}
            disabled={pending}
          >
            {icon}
          </button>
        </form>
        {children}
      </div>
    </>
  );
}
