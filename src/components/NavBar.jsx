"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

const Navbar = () => {
  const pathName = usePathname();
  const router = useRouter();
  const navLinks = [
    {
      title: "Blogs",
      path: "/blogs",
    },
    {
      title: "Meals",
      path: "/meals",
    },
    {
      title: "Posts",
      path: "/posts",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Service",
      path: "/service",
    },
    {
      title: "Profile",
      path: "/profile",
    },
  ];

  const handler = () => {
    router.push("/login");
  };
  return (
    <nav className="bg-green-400 flex justify-between h-14 items-center px-10">
      <h5>Shihab Hero</h5>
      <ul className="flex gap-5">
        {navLinks.map((link, idx) => (
          <Link
            className={`${pathName === link.path && "text-yellow-500"}`}
            key={idx}
            href={link.path}
          >
            {link.title}
          </Link>
        ))}
      </ul>
      <button className="bg-cyan-400 px-3 py-2" onClick={handler}>Login</button>
    </nav>
  );
};

export default Navbar;
