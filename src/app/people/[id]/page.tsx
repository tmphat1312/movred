import { Banner } from "@/features/cast-details/banner";
import {
  MainReading,
  MainReadingFallback,
} from "@/features/cast-details/components/main-reading";
import {
  PersonalInformation,
  PersonalInformationFallback,
} from "@/features/cast-details/components/personal-information";
import { Suspense } from "react";

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
          <Suspense fallback={<PersonalInformationFallback />}>
            <PersonalInformation castId={castId} />
          </Suspense>
        </div>
        <div className="col-span-9">
          <Suspense fallback={<MainReadingFallback />}>
            <MainReading castId={castId} />
          </Suspense>
        </div>
      </main>
    </>
  );
}
