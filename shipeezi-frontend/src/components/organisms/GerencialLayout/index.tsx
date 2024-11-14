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
            <div>
                <Sidebar />
                {children}
            </div>
        </div>
    );
}

export default GerencialLayout;