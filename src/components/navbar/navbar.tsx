import { useState } from 'react';
import { NavLink, Title, ScrollArea } from '@mantine/core';
import {
  FaHome,
  FaBook,
  FaCamera,
  FaPencilRuler,
  FaInstagram,
} from 'react-icons/fa';

// Importăm fișierul CSS
import './navbar.css';

interface NavLinkItem {
  icon: React.ReactNode;
  label: string;
}

const navLinks: NavLinkItem[] = [
  { icon: <FaHome size="1rem" />, label: 'Dashboard' },
  { icon: <FaBook size="1rem" />, label: 'Courses' },
  { icon: <FaCamera size="1rem" />, label: 'Learning photography' },
  { icon: <FaInstagram size="1rem" />, label: 'Master Instagram' },
  { icon: <FaPencilRuler size="1rem" />, label: 'Basics of Drawing' },
];

export function Navbar() {
  const [active, setActive] = useState('Dashboard');

  const items = navLinks.map((item) => (
    <NavLink
      key={item.label}
      active={item.label === active}
      label={item.label}
      leftSection={item.icon}
      onClick={() => setActive(item.label)}
      // Folosim clasa CSS globală
      className="navLink" 
    />
  ));

  return (
    <div className="navbar">
      <div className="header">
        <Title order={2} c="black">
          Synapz
        </Title>
      </div>

      <ScrollArea className="linksWrapper">
        {items}
      </ScrollArea>
    </div>
  );
}