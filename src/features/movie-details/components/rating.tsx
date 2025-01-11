import { ScaleSlider } from "@/components/ui/scale-slider";

export function Rating() {
  const yourRating = undefined;

  if (yourRating) {
    return (
      <p>
        Your rating: <span className="text-lg font-bold">{yourRating}</span>
      </p>
    );
  }

  return (
    <div>
      <h4 className="mb-2 font-semibold">What is your score for this movie.</h4>
      <div className="flex items-center gap-5">
        <ScaleSlider />
        <button className="light-blue-gradient hover:green-gradient rounded-full px-4 py-2">
          Okay, Save My Rating
        </button>
      </div>
    </div>
  );
}
