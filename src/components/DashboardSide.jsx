

import React from "react";
import Logo from "./logo";
import Workspace from "@/app/(dashboard)/workspace/page";
// import { getWorkSpace } from "../../service/workspace-service";

 function DashboardSide() {
  // const data= await getWorkSpace();
  // console.log("rest====",data.payload);
  return (
    <div className="w-full min-h-[100vh] bg-gray-200 ">
      {/* SideBar */}
      <div className="col-span-1 bg-white min-h-[100vh]">
        <div className="p-2 h-full w-full flex flex-col bg-white dark:bg-gray-900 border-r border-r-gray-200">
          {/* Logo */}
          <a href="#">
            <div className="min-h-[20vh] w-[50%] mb-6 m-auto flex items-center">
              <Logo />
            </div>
          </a>
          
          <Workspace /> 
        </div>
      </div>
      {/* View Content */}
      <div className="col-span-6 bg-white" ></div>
    </div>
  );
}

export default DashboardSide;
