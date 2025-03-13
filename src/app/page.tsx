import Image from "next/image";
import Link from "next/link";
import championPic from "../../public/champion.webp";
import itemPic from "../../public/item.webp";
import rotationPic from "../../public/rotation.webp";

const navigation = [
  { imgSrc: championPic, href: "/champions", name: "Go Champion List" },
  { imgSrc: itemPic, href: "/items", name: "Go Item List" },
  { imgSrc: rotationPic, href: "/rotation", name: "Go Free Champion List" },
];

export default function HomePage() {
  return (
    <main className="mt-14 break-keep p-10 text-center font-riot">
      <h1 className="mb-10 mt-4 space-y-2">
        <p className="text-5xl">
          <span className="text-red">League of Legends</span> Information App
        </p>
        <p className="text-3xl">
          Provide information about champions and items in League of Legends.
        </p>
      </h1>
      <section>
        <ul className="grid grid-cols-1 gap-4 text-2xl md:grid-cols-3">
          {navigation.map((nav) => (
            <li key={nav.href}>
              <Link href={nav.href} className="group space-y-4">
                <Image
                  src={nav.imgSrc}
                  alt={nav.name}
                  className="aspect-[4/3] w-full max-w-sm rounded object-cover object-center transition-[transform] duration-100 ease-in-out group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-gold"
                />
                <p>{nav.name}</p>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
