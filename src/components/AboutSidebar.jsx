import React from 'react';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useNavigate } from 'react-router-dom';

const AboutSidebar = () => {
  const navigate = useNavigate();

  const handleNavigate = (value) => {
    if (value === 'bio') {
      navigate('/about');
    } else if (value === 'school') {
      navigate('/about/school');
    } else if (value === 'university') {
      navigate('/about/university');
    }else if(value === 'cricket'){
      navigate('/about/cricket')
    }else if(value === 'photography'){
      navigate('/about/photography')
    }
  };

  return (
    <div className='flex flex-col gap-2 md:gap-3 flex-wrap w-full'>
      <Select onValueChange={handleNavigate}>
        <SelectTrigger className="w-[180px] outline-none border-none">
          <SelectValue placeholder="_Personal-Info" />
        </SelectTrigger>
        <SelectContent className='bg-slate-500'>
          <SelectGroup>
            <SelectItem className='cursor-pointer' value="bio">Bio</SelectItem>
            <SelectLabel>School</SelectLabel>
            <SelectItem className='cursor-pointer' value="school">Higher School</SelectItem>
            <SelectLabel>University</SelectLabel>
            <SelectItem className='cursor-pointer' value="university">University</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <div className='min-h-[2px] md:hidden w-full bg-slate-800'></div>
      <Select onValueChange={handleNavigate}>
        <SelectTrigger className="w-[180px] outline-none border-none">
          <SelectValue placeholder="_Hobbies" />
        </SelectTrigger>
        <SelectContent className='bg-slate-500'>
          <SelectGroup>
            <SelectItem className='cursor-pointer' value="cricket">Cricket</SelectItem>
            <SelectItem className='cursor-pointer' value="photography">Photography</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <div className='min-h-[2px] md:hidden w-full bg-slate-800'></div>
    </div>
  );
};

export default AboutSidebar;
