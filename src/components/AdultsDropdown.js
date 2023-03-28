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
      Adults
      <BsChevronDown className='text-base text-accent-hover'/>
      </Menu.Button>
    
    <Menu.Items as='ul' className='bg-white absolute w-full flex flex-col z-40'>
      {lis.map((li, index ) => {
        return (
        <Menu.Item as='li' key={index} className='border-b last-of-type:border-b-0 h-12
         hover:bg-accent hover:text-white w-full flex justify-center items-center cursor-pointer'>
          {li.name}
          </Menu.Item>
        );
      })}
    </Menu.Items>
  </Menu>;
};

export default AdultsDropdown;
