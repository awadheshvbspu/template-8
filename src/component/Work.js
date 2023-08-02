import React from 'react';
import WorkItem from './WorkItem';

const data = [
    {
        year:2020,
        title:'Content Creater',
        duration:'3 Years',
        details:'Lorem ipsum,dolor sit must connectore adipisicing elit.Asperator omits dolor nuquare participatent this is the epsium \u{1F536}teyd ause thr ssjdsai  siad sisajd'
    },
    {
        year:2017,
        title:'Google',
        duration:'2  Years',
        details:'Lorem ipsum,dolor sit must connectore adipisicing elit.Asperator omits dolor nuquare participatent this is the epsium \u{1F536}teyd ause thr ssjdsai  siad sisajd'
    },
    {
        year:2015,
        title:'Amazon',
        duration:'3 Years',
        details:'Lorem ipsum,dolor sit must connectore adipisicing elit.Asperator omits dolor nuquare participatent this is the epsium \u{1F536}teyd ause thr ssjdsai  siad sisajd'
    },
    {
        year:2012,
        title:'Facebook',
        duration:'3 Years',
        details:'Lorem ipsum,dolor sit must connectore adipisicing elit.Asperator omits dolor nuquare participatent this is the epsium \u{1F536}teyd ause thr ssjdsai  siad sisajd'
    }
]
export default function Work() {

  return (
    <div id='work' className='max-w-[1040px] mx-auto md:pl-20 p-4 py-16 md:px-0 px-4'>
    <h1 className='text-4xl font-bold text-center text-[#00165e] '>Work</h1>
      {
        data.map((item,i) =>(
                <div key={i}>
                    <WorkItem year={item.year} title={item.title} duration={item.duration} details={item.details}/>
                </div>
        ))
      }
    </div>
  )
}
