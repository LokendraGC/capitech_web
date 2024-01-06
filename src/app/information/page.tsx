"use client";
import NounTab from "@/components/NounTab";
import VerbTab from "@/components/VerbTab";
import { useDictionary } from "@/context/dictionaryContext";
import React, { useRef, useState } from "react";

const page = () => {
  const audioRef = useRef();
  const [currentTab, setCurrentTab] = useState(0);

  const { dictionaryData } = useDictionary();

  console.log(dictionaryData, "info");

  const [play, setPlay] = useState(false);

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
      <p
        className="ml-[190px] m-10 max-sm:w-full max-sm:m-6 max-sm:ml-[90px]"
        style={{ fontSize: "30px", fontWeight: "500" }}
      >
        Word: {dictionaryData[0]?.word}
      </p>
      <div className="flex justify-center flex-col items-center">
        <div className="w-[980px] mb-10 h-[626px] border border-gray-300 rounded-md pt-10 max-sm:w-[480px] max-sm:ml-[280px]">
          <div className="flex items-center p-4 pt-0 gap-4">
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
          <div className="p-6 flex flex-col w-[919px] max-sm:w-[450px]">
            {currentTab === 0 && <NounTab dictionaryData={dictionaryData} />}
            {currentTab === 1 && <VerbTab dictionaryData={dictionaryData} />}
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
