import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '@components/atoms/Navbar';

const RootLayout: React.FC = (): JSX.Element => {
  return (
    <>
      <div className="flex flex-col h-screen">
        <Navbar />
        <div className="flex-grow">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default RootLayout;
