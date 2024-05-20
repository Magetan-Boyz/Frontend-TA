import React, { useState } from 'react';
import { useRouter } from 'next/router';

type SubMenuProps = {
  item: {
    title: string;
    path: string;
    icon: string;
    iconClosed: string;
    iconOpened: string;
    subNav?: string[];
  };
};

const SubMenu: React.FC<SubMenuProps> = ({ item }) => {
  const [subnav, setSubnav] = useState(false);
  const [click, setClick] = useState(false);
  const router = useRouter();

  const handleClick = () => {
    if (item.title === 'Dashboard') {
      router.push(item.path);
    } else {
      setSubnav(!subnav);
    }
    setClick(!click);
  };
  const handleClickSub = () => {
    router.push(item.path);
  };
  // const showSubnav = () => setSubnav(!subnav);

  return (
    <>
      <div className="flex items-center w-full gap-4 font-medium text-md">
        <button className="flex items-center w-full gap-4 rounded-md hover:bg-Gray-50 h-[40px]" onClick={handleClick}>
          <div>{item.icon}</div>
          <div className="text-md">{item.title}</div>
          <div>{item.subNav && (subnav ? item.iconOpened : item.iconClosed)}</div>
        </button>
      </div>
      {subnav &&
        item.subNav.map((item, index) => {
          return (
            <button
              key={index}
              className="flex items-center w-full gap-4 font-medium rounded-md hover:bg-Gray-50 text-md h-[40px]"
              onClick={handleClickSub}
            >
              <div>{item.icon}</div>
              <div>{item.title}</div>
            </button>
          );
        })}
    </>
  );
};

export default SubMenu;
