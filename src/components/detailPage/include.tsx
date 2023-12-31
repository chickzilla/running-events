import React from "react";
import CheckIcon from "@mui/icons-material/Check";
import { green } from "@mui/material/colors";

export default function IncludeInEntry({
  allInclude,
}: {
  allInclude: string[];
}) {
  return (
    <div className="w-[50%] h-[auto] flex flex-col text-black dark:text-gray-200">
      <div>
        <h1 className="text-3xl font-bold text-center">
          What’s included in entry
        </h1>
        <p className="text-xl font-light text-center">
          These are included in your entry
        </p>
      </div>
      <div className="grid gap-x-10 gap-y-6 grid-cols-3 pt-10">
        {allInclude.map((Include) => (
          <div>
            <p>
              <CheckIcon sx={{ color: green[300] }} /> {Include}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
