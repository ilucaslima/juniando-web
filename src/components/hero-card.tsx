import Image from "next/image";
import MetaInfo from "./meta-info";

interface IHeroCard {
  isFeatured: boolean;
  title: string;
  author: string;
  image: string;
  date: Date;
}
const HeroCard = ({ title, isFeatured, date, author, image }: IHeroCard) => {
  return (
    <div className="drop-shadow-principal relative">
      <Image
        src={image}
        alt={title}
        className="w-[745px] h-[412px] object-cover pointer-events-none"
        width={745}
        height={412}
      />
      {isFeatured && (
        <div className="absolute left-7 bottom-24">
          <span className="bg-[#0565FF] px-3 py-1 rounded-2xl text-white font-bold text-sm">
            Featured
          </span>
        </div>
      )}
      <div className="absolute inset-0 flex flex-col justify-end p-8 py-4">
        <MetaInfo name={author} date={date} color="text-white" />
        <h1 className="text-white mt-2 mb-1 text-xl font-semibold line-clamp-2">
          {title}
        </h1>
        <div
          className="text-white text-xs line-clamp-6 md:line-clamp-4"
          dangerouslySetInnerHTML={{
            __html: title,
          }}
        />
      </div>
    </div>
  );
};

export default HeroCard;
