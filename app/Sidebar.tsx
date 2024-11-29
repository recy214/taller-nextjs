// sidebar.tsx
import React from 'react';

interface SidebarProps {
  items: string[];
}

const Sidebar: React.FC<SidebarProps> = ({ items }) => {
  return (
    <div className="sidebar">
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;