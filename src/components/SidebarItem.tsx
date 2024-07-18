'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

interface SidebarItemProps {
  href: string;
  label: string;
  icon: any;
}

export default function SidebarItem({ href, label, icon: Icon }: SidebarItemProps) {
  const pathname = usePathname();
  const router = useRouter();
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setIsActive(pathname === href);
  }, [pathname, href]);

  return (
    <li>
      <a
        href={href}
        onClick={(e) => {
          e.preventDefault();
          router.push(href);
        }}
        className={`relative px-4 py-3 flex items-center space-x-4 rounded-xl ${
          isActive ? 'text-white bg-gradient-to-r from-sky-600 to-cyan-400' : 'text-gray-600'
        }`}
      >
        <Icon size={30} />
        <span className="-mr-1 font-medium">{label}</span>
      </a>
    </li>
  );
}
