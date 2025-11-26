import React from "react";

// components

import CardTable from "components/Cards/CardTableUsers";
import CommandTable from "components/Cards/CommandTable.js";
export default function Tables() {
  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <CardTable color="dark" />
        </div>
      </div>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <CommandTable color="dark" />
        </div>
      </div>
    </>
  );
}
