import React from "react";
import {
  IconMail,
  IconPhoneCall,
  IconRoadMapLine,
} from "../../../assets/svg/contacts";

const ServiseCard = () => {
  const paragraphs = [
    "Incredible Infrastructure",
    "Email Notifications",
    "Android apps development",
  ];

  const icons = [IconMail, IconPhoneCall, IconRoadMapLine];

  const bgColor = ["bg-green-100", "bg-red-100	", "bg-purple-100	"];
  const serviceData = paragraphs.map((paragraph, index) => ({
    icon: icons[index],
    paragraph: paragraph,
    colors: bgColor[index],
  }));

  return <ServiceCardContainer data={serviceData} />;
};

const ServiceCardContainer = ({ data }) => {
  return (
    <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
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
    <div className="group gap-4 max-w-full bg-slate-50 rounded-lg shadow dark:border-gray-700 text-left px-2 py-10 flex items-center justify-center">
      <div className="p-5 py-8 items-center">
        <div className="flex items-center justify-center">
          <div
            className={`${bgColor} w-20 h-20 rounded-full transition duration-500 group-hover:text-black group-hover:bg-white flex items-center justify-center`}
          >
            <Icon />
          </div>
        </div>

        <div className="ml-4 flex flex-col text-center">
          <a href="#" className="">
            <h5 className="mb-4 mt-4 text-xl font-bold tracking-tight text-sky-950">
              {label}
            </h5>
          </a>

          <p className="mb-3 font-normal  text-gray-600">
            Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor incididunt
            ut labore dolore magna aliqua.
          </p>
        </div>
      </div>
    </div>
  );
};
export default ServiseCard;
