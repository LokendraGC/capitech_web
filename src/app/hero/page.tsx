"use client";
import NounTab from "@/components/NounTab";
import VerbTab from "@/components/VerbTab";
import { useDictionary } from "@/context/dictionaryContext";
import { useApiData } from "@/hooks/useApiData";
import React, { useState, useRef } from "react";

const Hero = () => {
  const audioRef = useRef();

  const [play, setPlay] = useState(false);
  const [typedData, setTypedData] = useState("");
  const [currentTab, setCurrentTab] = useState(0);

  const { dictionaryData, setDictionaryData } = useDictionary();

  const handleClick = async (e: any) => {
    e.preventDefault();
    if (typedData) {
      const data = await useApiData(typedData);
      setDictionaryData(data);
    }
  };

  const playPauseAudio = () => {
    setPlay(!play);

    if (audioRef.current) {
      if (!play) {
        audioRef.current.play();
        setTimeout(() => {
          setPlay(false);
        }, 3000);
      } else {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    }
  };

  return (
    <>
      <div className="flex flex-col gap-4 items-center justify-center mt-10 ">
        <form action="" className="flex items-center" onSubmit={handleClick}>
          <img
            src="Search.png"
            height={28}
            width={28}
            alt="search"
            className="absolute top-34 left-[180px] z-10 max-sm:left-[90px]"
          />
          <input
            onChange={(e) => {
              setTypedData(e.target.value);
            }}
            type="text"
            value={typedData}
            placeholder="search"
            className="p-2 pl-10 w-[1003px] border border-gray-300 rounded-md relative bg-gray-100 max-sm:w-[500px] max-sm:ml-[280px] max-sm:pl-12"
          />
        </form>
        <div className="w-[980px] mb-10 h-[626px] border border-gray-300 rounded-md pt-10 max-sm:w-[480px] max-sm:ml-[280px]">
          <div className="flex items-center p-4 pt-0 gap-4">
            {/* for audio */}

            {dictionaryData && (
              <audio
                ref={audioRef}
                src={dictionaryData[0]?.phonetics[0]?.audio}
              ></audio>
            )}

            <img
              onClick={playPauseAudio}
              src={play ? "Pause_Button.png" : "Circled_Play.png"}
              alt=""
              height={61}
              width={61}
              className="cursor-pointer"
            />

            {dictionaryData && <p>{dictionaryData[0]?.phonetic}</p>}
          </div>

          <div className="flex items-center gap-4 pl-6">
            <button
              className={`${
                currentTab == 0 ? " bg-black text-white" : "bg-white text-black"
              } rounded-md w-[67px] h-[30px]`}
              onClick={() => setCurrentTab(0)}
            >
              noun
            </button>
            <button
              className={`${
                currentTab == 1 ? " bg-black text-white" : "bg-white text-black"
              } rounded-md w-[67px] h-[30px]`}
              onClick={() => setCurrentTab(1)}
            >
              verb
            </button>
          </div>

          {/* for defination */}

          {currentTab === 0 && <NounTab dictionaryData={dictionaryData} />}
          {currentTab === 1 && <VerbTab dictionaryData={dictionaryData} />}
        </div>
      </div>
    </>
  );
};

export default Hero;
