import React from "react";
import Image from "next/image";
import { ReactTyped } from "react-typed";

const ChildhoodBlock = () => {
  return (
    <div className="flex w-full h-screen items-center justify-around">
      <div className="flex flex-col gap-4 h-screen items-center justify-start">
        <Image
          className="rounded-full size-40 object-cover border-2 hover:border-8 duration-200 hover:border-blue-300 border-blue-400"
          src="/childme.jpeg"
          alt="Picture child me"
          width={1000}
          height={1000}
        />
        <div className="flex gap-2">
          <Image
            className="rounded-full size-40 object-cover border-2 hover:border-8 duration-200 hover:border-blue-300 border-blue-400"
            src="/chess.jpeg"
            alt="Chess game"
            width={1000}
            height={1000}
          />
          <Image
            className="rounded-full size-40 object-contain border-2 hover:border-8 duration-200 hover:border-blue-300 border-blue-400"
            src="/scratch.webp"
            alt="Scratch"
            width={1000}
            height={1000}
          />
        </div>
        <Image
          className="rounded-full size-40 object-cover border-2 hover:border-8 duration-200 hover:border-blue-300 border-blue-400"
          src="/unity.png"
          alt="Unity3D"
          width={1000}
          height={1000}
        />
      </div>
      <div className="w-2/3 h-screen flex flex-col justify-start gap-2">
        <p>
          Started playing <em className="text-pink-600">chess</em> at elementery
          school.
        </p>
        <p>
          Had a computer at a <em className="text-pink-600"> young age </em> and
          started learning programming with{" "}
          <em className="text-pink-600">Scratch</em>.
        </p>
        <p>
          Later on, I started learning{" "}
          <em className="text-pink-600">Unity (version 3 and 4)</em> and made
          some games.
        </p>
        <p>
          I couldn&rsquo;t achieve a lot due to not having a mentor at that
          time.
        </p>
        <div className="h-1/6"></div>
        <p>
          I used to be a gamer and played a lot of games like{" "}
          <ReactTyped
            strings={[
              "Stronghold",
              "Minecraft",
              "Watch Dogs",
              "Assassin's Creed",
              "Raymen",
              "GTA",
              "Paladins",
              "Unreal Tournament",
            ]}
            typeSpeed={100}
            backSpeed={80}
            showCursor={false}
            className="text-pink-600"
            loop
          />
        </p>
        <p>
          As well as an <em className="text-pink-600"> Otaku</em> (
          <ReactTyped
            strings={[
              "Dragon Ball",
              "Bleach",
              "HxH",
              "JJK",
              "Digimon",
              "Kimetsu",
              "AoT",
            ]}
            typeSpeed={100}
            backSpeed={80}
            showCursor={false}
            loop
          />
          )
        </p>
      </div>
    </div>
  );
};

export default ChildhoodBlock;
