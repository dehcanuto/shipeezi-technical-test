import React from 'react';

import Navbar from '../Navbar';
import Sidebar from '../Sidebar';

const GerencialLayout = ({
    children,
  }: {
    children: React.ReactNode
  }) => {
    return (
        <div>
            <Navbar />
            <div className="flex min-h-screen bg-gray-100">
                <Sidebar />
                <div className="min-h-screen w-full p-8">
                  {children}
                </div>
            </div>
        </div>
    );
}

export default GerencialLayout;