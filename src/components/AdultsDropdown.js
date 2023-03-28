import React, {useContext} from 'react';
import {RoomContext} from '../context/RoomContext';
import {Menu} from '@headlessui/react';
import {Bschev} from 'react-icons/bs';
import { BsChevronDown } from 'react-icons/bs';

const lis = [
  {name: '1 Adult'},
  {name: '2 Adult'},
  {name: '3 Adult'},
  {name: '4 Adult'},
]

const AdultsDropdown = () => {
  return <Menu as='div' className='w-full h-full bg-white relative'>
    <Menu.Button className='w-full h-full flex items-center justify-between px-8'>
      adults
      </Menu.Button>
    <BsChevronDown/>
    <Menu.Items as='ul'>
      {lis.map((li, index ) => {
        return (<Menu.Item as='li' key={index}>
          {li.name}
          </Menu.Item>
        );
      })}
    </Menu.Items>
  </Menu>;
};

export default AdultsDropdown;
