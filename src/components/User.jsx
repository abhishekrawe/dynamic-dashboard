import React, { useState } from "react";
import { Switch } from '@headlessui/react';
import SampleData from "./SampleData";

function User() {
  const [enabled, setEnabled] = useState(false);
  
  return <div>
      <div className="px-4 py-8 flex items-center">
          <p className="text-2xl leading-3 text-gray-900 flex items-center">
              <span className="font-semibold">Hey Mariana -</span>
              <span className="font-normal text-base text-gray-500 ml-2">here's what's happening</span>
          </p>
          <Switch
              checked={enabled}
              onChange={setEnabled}
              className={`${enabled ? 'bg-gray-700' : 'bg-blue-500'}
      relative inline-flex h-[38px] w-[74px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75 ml-4`}
          >
              <span className="sr-only">Use setting</span>
              <span
                  aria-hidden="true"
                  className={`${enabled ? 'translate-x-9' : 'translate-x-0'}
        pointer-events-none inline-block h-[34px] w-[34px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
              />
          </Switch>
          <p className="text-2xl ml-4 leading-3 text-gray-900 flex items-center">
              <span className="font-semibold">DEMO DATA </span>
          </p>
      </div>

      <div className="flex flex-row gap-4 w-full">
          <SampleData />
      </div>
  </div>;
}

export default User;
