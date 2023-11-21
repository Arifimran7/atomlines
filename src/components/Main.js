import React from "react";
import Header from "./Header";
import { Footer } from "./Footer";
import Components1 from "../containers/components1/Index";
import Components2 from "../containers/components2/Index";
import Components3 from "../containers/components3";
import Components4 from "../containers/components4";

const Main = () => {
  return (
    <div>
      <Header />
      <Components1 />
      <Components2 />
      <Components3 />
      <Components4 />
      <Footer />
    </div>
  );
};

export default Main;
