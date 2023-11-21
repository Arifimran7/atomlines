import React from "react";
import CompanyLogo from "./CompanyLogo";
import SocialMediaIcons from "./SocialMediaIcons";
import FooterContent from "./FooterContent";

export const Footer = () => {
  const contentData = [
    { label: "Category", values: ["News", "World", "Game", "Reference"] },
    {
      label: "Business",
      values: ["Web", "E-commerce", "Business", "Portfolio"],
    },
    {
      label: "Product",
      values: ["Product", "Features", "Integrations", "Pricing", "FAQ"],
    },
  ];

  return (
    <div>
      <footer className="px-4 divide-y dark:bg-gray-800 dark:text-gray-100">
        <div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
          <div className="lg:w-1/3">
            <CompanyLogo />
          </div>
          <div className="grid lg:grid-cols-4 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-1">
            {contentData.map((data, index) => (
              <FooterContent
                key={index}
                label={data.label}
                values={data.values}
              />
            ))}
            <SocialMediaIcons />
          </div>
        </div>
        <div className="py-6 text-sm text-center dark:text-gray-400">
          © 2023 Atomlines. All rights reserved.
        </div>
      </footer>
    </div>
  );
};
