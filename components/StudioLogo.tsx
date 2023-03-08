import React from "react";
import Link from "next/link";
import { HomeIcon } from "@heroicons/react/24/solid";

type Props = {};

function StudioLogo(props: any) {
  const { renderDefault, title } = props;
  return (
    <div>
      <div className="flex items-center justify-between p-5">
        <Link href="/" className="text-[#dbbadd] flex items-center">
          <HomeIcon className="text-[#dbbadd] h-6 w-6 mr-2" />
        </Link>
        {renderDefault && <>{renderDefault(props)}</>}
      </div>
    </div>
  );
}

export default StudioLogo;
