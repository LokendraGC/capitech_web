import React from "react";

const NounTab = ({dictionaryData}) => {
  return (
    <div>
      <div className="p-6 flex flex-col w-[919px] max-sm:w-[450px]">
        {dictionaryData &&
          dictionaryData.map((meaning, index) => (
            <div key={index}>
              {meaning.meanings &&
                meaning.meanings.map((mean, meanIndex) => (
                  <div key={meanIndex}>
                    {mean.partOfSpeech==='noun'&& mean.definitions &&
                      mean.definitions
                        .slice(0, 3)
                        .map((definition, defIndex) => (
                          <div key={defIndex}>
                            {defIndex + 1}. {definition.definition}
                          </div>
                        ))}
                  </div>
                ))}
            </div>
          ))}
      </div>
    </div>
  );
};

export default NounTab;
