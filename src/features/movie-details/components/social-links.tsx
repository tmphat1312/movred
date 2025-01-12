import { Nullable } from "@/types/utilities";
import { getExternalIds } from "../data/get-external-ids";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export async function SocialLinks({ movieId }: { movieId: number }) {
  const links = (await getExternalIds({ movieId })) as {
    facebook_id: Nullable<string>;
    instagram_id: Nullable<string>;
    twitter_id: Nullable<string>;
  };

  return (
    <ul className="flex gap-4">
      {links.facebook_id && (
        <li className="hover:opacity-80">
          <Link href={`https://facebook.com/${links.facebook_id}`}>
            <span className="sr-only">Facebook fanpage</span>
            <FaFacebook size={24} />
          </Link>
        </li>
      )}
      {links.instagram_id && (
        <li className="hover:opacity-80">
          <Link href={`https://instagram.com/${links.instagram_id}`}>
            <span className="sr-only">Instagram profile</span>
            <FaInstagram size={24} />
          </Link>
        </li>
      )}
      {links.twitter_id && (
        <li className="hover:opacity-80">
          <Link href={`https://twitter.com/${links.twitter_id}`}>
            <span className="sr-only">Twitter profile</span>
            <FaTwitter size={24} />
          </Link>
        </li>
      )}
    </ul>
  );
}

export function SocialLinksFallback() {
  return (
    <ul className="flex gap-4">
      <li>
        <FaFacebook size={24} />
      </li>
      <li>
        <FaInstagram size={24} />
      </li>
      <li>
        <FaTwitter size={24} />
      </li>
    </ul>
  );
}
