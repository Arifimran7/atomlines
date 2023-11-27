import React from "react";
import {
  IconSettingsOutline,
  IconMail,
  IconGrid,
  IconInformationCircleOutline,
  IconDragDrop,
  IconBell_ringing,
} from "../../../assets/svg/section5";

const ServiseCard = () => {
  const paragraphs = [
    "Incredible Infrastructure",
    "Email Notifications",
    "Android apps development",
    "Laravel web development",
    "iOS apps development",
    "UX/UI design",
  ];

  const icons = [
    IconSettingsOutline,
    IconMail,
    IconGrid,
    IconInformationCircleOutline,
    IconDragDrop,
    IconBell_ringing,
  ];

  const bgColor = [
    "bg-green-100",
    "bg-red-100	",
    "bg-purple-100	",
    "bg-amber-100	",
    "bg-cyan-100	",
    "bg-fuchsia-100	",
  ];
  const serviceData = paragraphs.map((paragraph, index) => ({
    icon: icons[index],
    paragraph: paragraph,
    colors: bgColor[index],
  }));

  return <ServiceCardContainer data={serviceData} />;
};

const ServiceCardContainer = ({ data }) => {
  return (
    <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-10">
      {data.map((item, index) => (
        <ServiceCard
          key={index}
          icon={item.icon}
          label={item.paragraph}
          bgColor={item.colors}
        />
      ))}
    </div>
  );
};

const ServiceCard = ({ icon: Icon, label, bgColor }) => {
  return (
    <div className="group gap-4 max-w-full bg-slate-50	 rounded-lg shadow dark:border-gray-700 text-left px-2 ">
      <div className="p-5 py-8 lg:flex items-center">
        <div
          className={`${bgColor} w-20 h-20 rounded-full transition duration-500 group-hover:text-black group-hover:bg-white flex items-center justify-center xl:w-1/6 `}
        >
          <Icon />
        </div>

        <div className="ml-4 flex flex-col ">
          <a href="#" className="text-left">
            <h5 className="mb-4 mt-4 text-xl font-bold tracking-tight text-sky-950 ">
              {label}
            </h5>
          </a>

          <p className="mb-3 font-normal text-left text-gray-600">
            Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor incididunt
            ut labore dolore magna aliqua.
          </p>
        </div>
      </div>
    </div>
  );
};
export default ServiseCard;
