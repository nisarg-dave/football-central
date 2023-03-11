import { useRouter } from "next/router";
import React from "react";
import Default from "../../layouts/Default";

function index() {
  const router = useRouter();

  return (
    <Default>
      <div className="gap-4 p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 md:gap-6 md:p-6">
        <img
          className="w-40 h-40 md:w-52 md:h-52 rounded-full mx-auto cursor-pointer hover:-translate-y-1 hover:scale-105"
          src="https://pbs.twimg.com/profile_images/1486761402853380113/3ifAqala_400x400.jpg"
          alt="Fabrizio Romano Logo"
          onClick={() => router.push("/transferNews/fabrizioRomano")}
        />
        <img
          className="w-40 h-40 md:w-52 md:h-52 rounded-full mx-auto cursor-pointer hover:-translate-y-1 hover:scale-105"
          src="https://pbs.twimg.com/profile_images/1178558529105530880/Qvy-hv3O_400x400.jpg"
          alt="David Ornstein Logo"
          onClick={() => router.push("/transferNews/davidOrnstein")}
        />
        <img
          className="w-40 h-40 md:w-52 md:h-52 rounded-full mx-auto cursor-pointer hover:-translate-y-1 hover:scale-105"
          src="https://pbs.twimg.com/profile_images/1344966114367991813/PVlXJ6Qg_400x400.jpg"
          alt="City Xtra Logo"
          onClick={() => router.push("/transferNews/manchesterCity")}
        />
      </div>
    </Default>
  );
}

export default index;
