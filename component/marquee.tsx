import Image from "next/image";

export type LogoItemType = {
  id: string | number;
  imageSrc: string;
  altText: string;
  title: string;
};

const SingleMarquee = ({ items }: { items: LogoItemType[] }) => {
  const quadrupledItems = [...items, ...items, ...items, ...items];

  return (
    <div className="flex w-full overflow-hidden mask-[linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-4">
      <div className="flex w-max shrink-0 items-center gap-16 pr-16 animate-marquee hover:[animation-play-state:paused]">
        {quadrupledItems.map((item, index) => (
          <div
            key={`${item.id}-${index}`}
            className="flex shrink-0 items-center justify-center gap-2"
          >
            <Image
              src={item.imageSrc}
              width={30}
              height={40}
              alt={item.altText}
              className="object-contain"
            />
            <h2 className="text-lg font-bold text-neutral-900 leading-tight">{item.title}</h2>
          </div>
          
        ))}
      </div>
    </div>
  );
};

export default function Marquee() {
  const logos: LogoItemType[] = [
    { id: 1, imageSrc: "/ui.png", altText: "UI/UX", title: "UI/UX" },
    { id: 2, imageSrc: "/web.png", altText: "web", title: "Web Development" },
    { id: 3, imageSrc: "/software.png", altText: "UI/UX", title: "Coustom software solution" },
    { id: 4, imageSrc: "/mobile.png", altText: "UI/UX", title: "App development" },
    // { id: 5, imageSrc: "/ui.png", altText: "UI/UX", title: "UI/UX" },
  ];

  return (
    <div className="flex flex-col items-center justify-center overflow-hidden">
      <div className="w-full max-w-6xl">
        <SingleMarquee items={logos} />
      </div>
    </div>
  );
}