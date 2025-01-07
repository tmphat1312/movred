import { Banner } from "@/features/cast-details/banner";
import { MainReading } from "@/features/cast-details/components/main-reading";
import { PersonalInformation } from "@/features/cast-details/components/personal-information";

export default async function CastDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  const castId = parseInt(id, 10);

  return (
    <>
      <Banner castId={castId} />
      <main className="container grid grid-cols-12 gap-8 py-8">
        <div className="col-span-3">
          <PersonalInformation castId={castId} />
        </div>
        <div className="col-span-9">
          <MainReading castId={castId} />
        </div>
      </main>
    </>
  );
}
