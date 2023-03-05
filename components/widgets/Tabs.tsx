import React from "react";
import { Tab } from "../../typings";
import { useRouter } from "next/router";

interface tabProps {
  tabs: Tab[];
  onClick: (t: Tab) => void;
}

function Tabs({ tabs, onClick }: tabProps) {
  const router = useRouter();
  const handleClick = (selectedTab: Tab) => {
    onClick(selectedTab);
    // performing client-side transition to the same router. router.asPath is a reference to the current path
    router.replace(router.asPath);
  };
  return (
    <ul className="flex flex-col sm:flex-row flex-wrap list-none mx-8">
      {tabs.map((tab) => (
        <li className="flex-auto text-center" key={tab.name}>
          <button
            className={
              tab.active
                ? "bg-black text-yellow-200 rounded-t-md w-full mt-4 px-6 py-3 text-lg"
                : "text-slate-400 rounded-t-md w-full mt-4 px-6 py-3 text-lg"
            }
            onClick={() => handleClick(tab)}
          >
            {tab.name}
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Tabs;
