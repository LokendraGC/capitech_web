import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <>
      <div className="flex items-center justify-center mb-10 min-h-[70vh]">
        <div
          className="relative w-[988.08px] h-[226.52px] bg-customBlue rounded-lg flex mt-24  max-sm:w-[600px] max-sm:ml-[270px] max-sm:mb-[100px]"
          style={{ borderRadius: "75px", transform: "rotate(-2.4deg)" }}
        >
          <div className="absolute top-[-140px] ml-10 left-0 w-fit  overflow-hidden max-sm:w-[150px] max-sm:h-[150px] max-sm:top-[-70px]">
            <Link href="/information">
              <img
                className="cursor-pointer"
                src="logo_capitech_2.png"
                alt="logo"
                width={300}
                height={301}
              />
            </Link>
          </div>

          <div className="flex flex-col pl-[400px] justify-center max-sm:pl-24 ">
            <div
              className="flex items-center gap-6"
              style={{ transform: "rotate(-2.18deg)" }}
            >
              <img src="tweet_button.png" width={71.17} height={51.42} alt="" />
              <span
                className="text-white max-sm:text-sm max-sm:font-thin footer"
                style={{
                  fontSize: "50px",
                  fontWeight: "900",
                  lineHeight: "78.13px",
                  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
                }}
              >
                capitech.nepal
              </span>
            </div>
            <span
              className="text-white"
              style={{
                fontSize: "24px",
                fontWeight: "500",
                lineHeight: "37.5px",
                transform: "rotate(-2.79deg)",
              }}
            >
              Follow us on twitter for latest updates
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
