import Image from "next/image";

import { getCastDetails } from "../data/get-cast-details";
import { GENDER_MAP } from "@/constants/gender";
import { Shimmer } from "@/components/ui/shimmer";

export async function PersonalInformation({ castId }: { castId: number }) {
  const castDetails = await getCastDetails({ castId });
  const yearsOld = castDetails.birthday
    ? new Date().getFullYear() - new Date(castDetails.birthday).getFullYear()
    : "-";
  const dob = castDetails.birthday
    ? new Date(castDetails.birthday).toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      })
    : "-";

  return (
    <div className="motion-preset-fade space-y-8">
      <Image
        src={`https://media.themoviedb.org/t/p/w300_and_h450_bestv2/${castDetails.profile_path}`}
        alt={castDetails.name}
        width={300}
        height={450}
        className="h-[450px] w-[300px] rounded-lg bg-gray-50/80 brightness-95"
        loading="eager"
      />
      <section>
        <h2 className="mb-1.5 text-2xl font-semibold">Personal Info</h2>
        <dl>
          <dt className="mb-0.5 font-medium">Known For</dt>
          <dd className="mb-4 text-pretty">
            {castDetails.known_for_department}
          </dd>
          <dt className="mb-0.5 font-medium">Gender</dt>
          <dd className="mb-4 text-pretty">
            {GENDER_MAP[castDetails.gender as 0 | 1 | 2]}
          </dd>
          <dt className="mb-0.5 font-medium">Date of Birth</dt>
          <dd className="mb-4 text-pretty">
            {dob} ({yearsOld} years old)
          </dd>
          <dt className="mb-0.5 font-medium">Place of Birth</dt>
          <dd className="mb-4 text-pretty">{castDetails.place_of_birth}</dd>
          <dt className="mb-0.5 font-medium">Also Known As</dt>
          <dd className="mb-4 text-pretty">
            {(castDetails.also_known_as ?? []).map((name) => (
              <div key={name}>{name}</div>
            ))}
          </dd>
        </dl>
      </section>
    </div>
  );
}

export function PersonalInformationFallback() {
  return (
    <div className="space-y-8">
      <Shimmer className="h-[450px] w-[300px] rounded-lg bg-gray-50/80 brightness-95" />
      <section>
        <h2 className="mb-1.5 text-2xl font-semibold">Personal Info</h2>
        <dl>
          <dt className="mb-0.5 font-medium">Known For</dt>
          <dd className="mb-4 text-pretty">
            <Shimmer className="h-[24px] w-1/2" />
          </dd>
          <dt className="mb-0.5 font-medium">Gender</dt>
          <dd className="mb-4 text-pretty">
            <Shimmer className="h-[24px] w-1/3" />
          </dd>
          <dt className="mb-0.5 font-medium">Date of Birth</dt>
          <dd className="mb-4 text-pretty">
            <Shimmer className="h-[24px] w-1/2" />
          </dd>

          <dt className="mb-0.5 font-medium">Place of Birth</dt>
          <dd className="mb-4 text-pretty">
            <Shimmer className="h-[24px] w-1/2" />
          </dd>
          <dt className="mb-0.5 font-medium">Also Known As</dt>
          <dd className="mb-4 text-pretty">
            <Shimmer className="h-[24px] w-1/2" />
          </dd>
        </dl>
      </section>
    </div>
  );
}
