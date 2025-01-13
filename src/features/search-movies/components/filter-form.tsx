import { ApplyButton } from "./apply-button";

export function FilterForm() {
  return (
    <form className="divide-y-2">
      <div className="flex items-center gap-2 py-4">
        <input type="checkbox" id="include-adult" className="size-4" />
        <label htmlFor="include-adult">Include Adult Results</label>
      </div>
      <div className="flex items-center gap-2 py-4">
        <label htmlFor="">Release Year</label>
      </div>
      <div className="flex items-center gap-2 py-4">
        <label htmlFor="">User Score</label>
      </div>
      <div className="py-4">
        <ApplyButton />
      </div>
    </form>
  );
}
