import React from "react";
import Image from "next/image";
import { ReactTyped } from "react-typed";

const ChildhoodBlock = () => {
  return (
    <div className="flex w-full h-screen items-center justify-around">
      <div className="flex flex-col h-screen items-center justify-start">
        <Image
          className="rounded-full size-40 object-cover border-2 hover:border-8 duration-200 hover:border-pink-400 border-pink-600 -ml-8 -mb-8"
          src="/childme.jpeg"
          alt="Picture child me"
          width={1000}
          height={1000}
        />
        <div className="flex gap-2">
          <Image
            className="rounded-full size-40 object-cover border-2 hover:border-8 duration-200 hover:border-pink-400 border-pink-600"
            src="/chess.jpeg"
            alt="Chess game"
            width={1000}
            height={1000}
          />
          <Image
            className="rounded-full size-40 object-contain border-2 hover:border-8 duration-200 hover:border-pink-400 border-pink-600"
            src="/scratch.webp"
            alt="Scratch"
            width={1000}
            height={1000}
          />
        </div>
        <Image
          className="rounded-full size-40 object-cover border-2 hover:border-8 duration-200 hover:border-pink-400 border-pink-600 -mt-16"
          src="/unity.png"
          alt="Unity3D"
          width={1000}
          height={1000}
        />
      </div>
      <div className="w-2/3 h-screen flex flex-col justify-start gap-2">
        <p>
          Started playing <em>chess</em> at elementery school.
        </p>
        <p>
          Had a computer at a <em> young age </em> and started learning
          programming with <em>Scratch</em>.
        </p>
        <p>
          Later on, I started learning <em>Unity (version 3 and 4)</em> and made
          some games.
        </p>
        <p>
          I couldn&rsquo;t achieve a lot due to not having a mentor at that
          time.
        </p>
        <div className="h-1/6"></div>
        <p className="text-gray-500 italic">
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
        <p className="text-gray-500 italic">
          As well as an <em> Otaku</em> (
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
