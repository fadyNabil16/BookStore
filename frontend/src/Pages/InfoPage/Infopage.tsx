import AddInfoPanel from "@/Components2/AddInfoPanel/AddInfoPanel";
import { DbProvider } from "@/Context/BookManipulationContext";
import React from "react";
import { Outlet } from "react-router-dom";

type Props = {};

const Infopage = (props: Props) => {
  return (
    <DbProvider>
      <Outlet />
    </DbProvider>
  );
};

export default Infopage;
