"use client";

import { useCallback } from "react";

import Image from "next/image";

import MetaInfo from "@/components/meta-info";
import { useRouter } from "next/navigation";

interface ICard {
  date: Date;
  image: string;
  title: string;
  author: string;
  description: string;
}

const Card = ({ title, description, date, author, image }: ICard) => {
  const router = useRouter();

  const openPost = useCallback(() => {
    router.push("/posts");
  }, []);

  return (
    <div
      className="bg-light rounded-b-xl drop-shadow-principal cursor-pointer"
      onClick={openPost}
    >
      <Image
        src={image}
        alt={title}
        className="w-full h-56 object-cover pointer-events-none"
        width={1280}
        height={720}
      />
      <div className="p-8">
        <MetaInfo name={author} date={date} />
        <h1 className="text-dark-100 pt-1 pb-1 text-xl font-semibold line-clamp-2">
          {title}
        </h1>
        <div
          className="text-dark-100 text-xs line-clamp-6 md:line-clamp-4"
          dangerouslySetInnerHTML={{
            __html: description,
          }}
        />
      </div>
    </div>
  );
};

export default Card;
