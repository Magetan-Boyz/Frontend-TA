import React from 'react';

export default function Sidebar() {
  return (
    <div className="z-50 w-16">
      <div className="fixed inset-y-0 left-0 z-50 flex flex-col items-center w-16 h-screen py-8 bg-white border-r border-lighter-gray">
        <div className="flex flex-col items-center flex-auto">Sidebar</div>
      </div>
    </div>
  );
}
