import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Footer = () => {
  const { page, totalPages, changePageHandler } = useContext(AppContext);
  return (
    <div className="text-sm w-11/12 flex items-center justify-between p-6">
      <div className="space-x-2">
        {page > 1 && (
          <button
            className="px-2 py-1 bg-slate-200 rounded-md text-slate-400"
            onClick={() => changePageHandler(page - 1)}
          >
            Previous
          </button>
        )}
        {page < totalPages && (
          <button
            className="px-2 py-1 bg-slate-200 rounded-md text-slate-400"
            onClick={() => changePageHandler(page + 1)}
          >
            Next
          </button>
        )}
      </div>

      <span className="text-slate-400">
        Page {page} of {totalPages}
      </span>
    </div>
  );
};

export default Footer;
