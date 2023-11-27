import React from "react";
import {
  IconResponsive,
  IconReact,
  IconAndroid,
  IconLaravel,
  IconApple,
  IconCode,
  IconEcommercecart,
  IconShieldTick,
} from "../../../assets/svg/section4";

const ServiseCard = () => {
  const paragraphs = [
    "Responsive design",
    "React web development",
    "Android apps development",
    "Laravel web development",
    "iOS apps development",
    "UX/UI design",
    "E-commerce development",
    "Print ready design",
  ];

  const icons = [
    IconResponsive,
    IconReact,
    IconAndroid,
    IconLaravel,
    IconApple,
    IconCode,
    IconEcommercecart,
    IconShieldTick,
  ];

  const serviceData = paragraphs.map((paragraph, index) => ({
    icon: icons[index],
    paragraph: paragraph,
  }));

  return <ServiceCardContainer data={serviceData} />;
};
const ServiceCard = ({ icon: Icon, label }) => {
  return (
    <div className="w-full md:w-full lg:w-full mb-4 pr-6 ">
      <div className="flex group items-center rounded bg-white shadow dark:bg-slate-50 md:max-w-full md:flex-row   hover:bg-gradient-to-r hover:from-green-400 hover:via-teal-400 hover:to-teal-300 hover:text-white">
        <div className="flex items-center justify-start px-4 py-4 gap-2 group-hover:text-white">
          <Icon />
          <p className="text-xs text-gray-200 dark:text-sky-950 ml-2 group-hover:text-white ">
            {label}
          </p>
        </div>
      </div>
    </div>
  );
};

const ServiceCardContainer = ({ data }) => {
  return (
    <div className="grid lg:grid-cols-2">
      {data.map((item, index) => (
        <ServiceCard key={index} icon={item.icon} label={item.paragraph} />
      ))}
    </div>
  );
};

export default ServiseCard;
