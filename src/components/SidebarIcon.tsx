"use client";

import Link from "next/link";
import { IconType } from "react-icons";

interface SidebarItemProps {
  href: string;
  label: string;
  icon: IconType; // Asegúrate de que la propiedad se llame `icon`
}

export default function SidebarItem({ href, label, icon: Icon }: SidebarItemProps) {
  return (
    <li>
      <Link
        href={href}
        className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group"
      >
        <Icon className="w-6 h-6" />
        <span className="group-hover:text-gray-700">{label}</span>
      </Link>
    </li>
  );
}
