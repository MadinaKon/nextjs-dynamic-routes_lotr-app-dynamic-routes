import Link from "next/link";
import { introduction, volumes } from "../../lib/data";
import { useRouter } from "next/router";

export default function Volumes() {
  const router = useRouter();

  function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

  const randomIndex = getRandomElement(volumes);

  console.log("randomIndex ", randomIndex);

  function handleClick() {
    router.push(`/volumes/${randomIndex.slug}`);
  }

  return (
    <ul>
      {volumes.map((volume) => (
        <li key={volume.slug}>
          <Link href={`/volumes/${volume.slug}`}>{volume.title}</Link>
        </li>
      ))}
      <button onClick={handleClick}>Navigate to the random page</button>
    </ul>
  );
}
