import React from 'react';
import ProjectItem from './ProjectItem';
import profile from '../image1.jpg'
// import profile from '../image1.jpg'
// import profile from '../image1.jpg'
// import profile from '../image1.jpg'

export default function Projects() {
  return (
    <>
        <div id='projects' className='max-w-[1040px] mx-auto md:pl-20 py-16 md:px-0 px-4'>
        <h1 className='text-4xl font-bold text-center text-[#00165e]'>Projects</h1>
        <p className='text-center py-8'>Lorem Because the TypeAnimation component is memoized and never re-rendered (see above), yet Hot Reload attempts to re-render the component, changes to the TypeAnimation component will not render until you hard-reload the page.</p>
        <div className='grid sm:grid-cols-2 gap-12'>
         <ProjectItem img={profile} title='Crypto App'/>
         <ProjectItem img={profile} title='Property App'/>
         <ProjectItem img={profile} title='Netflix App'/>
         <ProjectItem img={profile} title='Twitch App'/>
        </div>
        </div>
    </>
  )
}
