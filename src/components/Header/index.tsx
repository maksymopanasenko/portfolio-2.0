'use client';

import { ComponentGeneral } from '@/api/queries/getPage';
import { FC, useState } from 'react';
import { HiMenuAlt3 } from 'react-icons/hi';
import HeaderMenu from './HeaderMenu';
import { CgClose } from 'react-icons/cg';

interface HeaderProps {
  component: ComponentGeneral;
}

const Header: FC<HeaderProps> = ({ component }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const openMenu = () => setIsOpen(prev => !prev);

  const visibleOverlay = isOpen ? 'visible opacity-100' : 'invisible opacity-0';
  const openedMenu = isOpen ? 'right-0' : 'right-full';

  return (
    <div className="w-screen py-4 px-4 lg:px-16 bg-transparent flex justify-end fixed top-0 left-0 right-0 z-50">
      <div
        className={`fixed bg-slate-50/50 top-0 bottom-0 right-0 left-0 transition-all duration-500 ${visibleOverlay}`}
      >
        <div className={`h-screen w-full absolute transition-all duration-700 ${openedMenu}`}>
          <div className="h-screen p-10 relative w-72 lg:w-96 bg-amber-500">
            <CgClose className="absolute top-5 right-5 cursor-pointer size-8 md:size-12" onClick={openMenu} />
            <HeaderMenu navigation={component.navigation.links} />
          </div>
        </div>
      </div>
      <HiMenuAlt3 className="cursor-pointer size-8 md:size-12" onClick={openMenu} />
    </div>
  );
};

export default Header;
