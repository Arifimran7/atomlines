import React from "react";
import Card from "./CardItems";

const Components2 = () => {
  const headings = [
    "Zero Configuration",
    "Code Security",
    "Team Management",
    "Access Controlled ",
  ];
  const paragraphs = [
    "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
    "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order",
    "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order",
    "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order",
  ];

  const icon_bg_color = [
    "bg-red-100",
    "bg-sky-100	",
    "bg-lime-100",
    "bg-purple-100",
  ];

  const iconColor = [
    "bg-red-500",
    "bg-sky-500	",
    "bg-lime-500",
    "bg-purple-500",
  ];

  return (
    <div classNameName="profile">
      <div className="container mx-auto max-w-screen-2xl flex flex-wrap items-center">
        <section className="bg-neutral-light-grayish-blue lg:py-5">
          <div className="text-center md:text-left lg:text-left">
            <div className="grid lg:grid-cols-4 md:grid-cols-2 mb-12 lg:mb-16 gap-6 items-center px-7 max-auto">
              {headings.map((heading, index) => (
                <Card
                  key={index}
                  heading={heading}
                  paragraph={paragraphs[index]}
                  bgcolor={icon_bg_color[index]}
                  textColor={iconColor[index]}
                />
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Components2;
