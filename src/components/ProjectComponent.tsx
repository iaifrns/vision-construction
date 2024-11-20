import React from 'react'
import { ProjectType } from '../types/project'
import { Icon } from '@iconify/react/dist/iconify.js'

interface SubSectionType {
    icon: string,
    text: string
}
const SubSection:React.FC<SubSectionType> = ({icon, text}) => {
    return (
        <div className='gap-2 flex'>
            <Icon icon={icon} />
            <p>{text}</p>
        </div>
    )
}

const ProjectComponent:React.FC<ProjectType> = ({image, desc, date}) => {
    const dateArr = date.split(' ');
  return (
    <div className='w-[400px] flex flex-col gap-8 '>
      <div className='relative w-full'>
        <div className='absolute w-full h-full border'>
            <div className='flex p-8 flex-col justify-end w-full h-full'>
                <div className='bg-white w-fit h-fit rounded-lg p-2 pr-4 pl-4 text-xl text-gray-400'>
                    <p className='font-bold'>{dateArr[0]}</p>
                    <p>{dateArr[1]}</p>
                </div>
            </div>
        </div>
        <img src={image} alt={image} className='md:h-[300px] object-cover w-full' />
      </div>
      <div className='section-title flex gap-4'>
        <SubSection icon='clarity:user-line' text='wpboss' />
        <SubSection icon='typcn:message-typing' text='Comment (0)' />
      </div>
      <p className='font-semibold md:text-[28px] max-md:text-[26px]'>{desc}</p>
    </div>
  )
}

export default ProjectComponent
