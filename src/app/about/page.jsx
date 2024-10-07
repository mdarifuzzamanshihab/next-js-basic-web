import Link from "next/link";
import React from "react";

const AboutPage = () => {

    
  return (
    <div>
      This is about page.
      <ul className="flex gap-3 text-green-300">
        <Link href={'/about/history'}>History</Link>
        <Link href={'/about/mission'}>Mission</Link>
      </ul>
    </div>
  );
};

export default AboutPage;
