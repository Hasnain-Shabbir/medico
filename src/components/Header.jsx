'use client';
import React, { useState } from 'react';
import { FaPhoneAlt } from 'react-icons/fa';
import { usePathname } from 'next/navigation';
import { Logo, Container, ListItem, Button, HamburgerIcon, NavLink } from '.';

const navData = [
  { id: 1, title: 'Home', path: '/' },
  { id: 2, title: 'About', path: '/about' },
  { id: 3, title: 'Health Checkup', path: '/health-checkup' },
  { id: 4, title: 'Doctors', path: '/doctors' },
  { id: 5, title: 'Departments', path: '/departments' },
];

const Header = () => {
  const [isNavOpened, setIsNavOpened] = useState(false);
  const pathname = usePathname();

  return (
    <header>
      <Container>
        <div
          className={`relative flex items-center justify-between bg-white px-6 py-4 transition-all duration-300 ${
            isNavOpened ? 'h-full opacity-100' : 'overflow-hidden'
          }`}
        >
          <Logo />
          <div
            className={`absolute left-0 right-0 top-full bg-white p-5 pt-2 transition-all duration-300 lg:static lg:flex lg:items-center lg:gap-5 lg:p-0 xl:gap-20 ${
              isNavOpened ? '' : 'h-0 opacity-0 lg:h-full lg:opacity-100'
            }`}
          >
            <nav>
              <ul className="flex flex-col gap-1 lg:flex-row">
                {navData.map((item) => (
                  <li key={item.id}>
                    <NavLink item={item} pathname={pathname} />
                  </li>
                ))}
              </ul>
            </nav>
            <div className="mt-5 flex flex-col gap-5 lg:mt-0 lg:flex-row xl:gap-5">
              <ListItem
                title="1005-346-272"
                icon={<FaPhoneAlt size={16} />}
                textStyles="font-bold text-xl"
              />
              <Button title="Appointment" styles="px-5" />
            </div>
          </div>
          <HamburgerIcon
            isNavOpened={isNavOpened}
            setIsNavOpened={setIsNavOpened}
          />
        </div>
      </Container>
    </header>
  );
};

export default Header;
