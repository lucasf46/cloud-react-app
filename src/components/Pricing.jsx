import React from 'react'
import {CheckIcon} from '@heroicons/react/solid'


const Pricing = () => {
  return (
    <div className='w-full my-24 text-white'>
        <div className='w-full h-[800px] bg-slate-900 absolute mix-blend-overlay'></div>


        <div className='max-w-[1240px] mx-auto py-12'>
            <div className='text-slate-300 text-center py-8'>
                <h2 className='text-3xl uppercase'>Pricing</h2>
                <h3 className='py-8 text-white text-5xl font-bold'>The right price for your research.</h3>
                <p className='text-3xl'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae perspiciatis, eos saepe sunt dignissimos facere.</p>
            </div>

            <div className='grid md:grid-cols-2 '>
            <div className='bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative'>
                <span className='py-1 px-3 uppercase bg-indigo-200 text-indigo-900 rounded-2xl text-sm'>Standard</span>
                <div>
                    <p className='flex font-bold text-6xl'>$49<span className='text-xl text-slate-500 flex flex-col justify-end'>/mo</span></p>
                </div>
                <p className='text-2xl text-slate-500 py-8'>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
                <div className='text-2xl'>
                    <p className='flex py-4'><CheckIcon className='mr-5 w-8 text-green-600' />Lorem, ipsum dolor.</p>
                    <p className='flex py-4'><CheckIcon className='mr-5 w-8 text-green-600'/>Lorem, ipsum dolor.</p>
                    <p className='flex py-4'><CheckIcon className='mr-5 w-8 text-green-600'/>Lorem, ipsum dolor.</p>
                    <p className='flex py-4'><CheckIcon className='mr-5 w-8 text-green-600'/>Lorem, ipsum dolor.</p>
                    <p className='flex py-4'><CheckIcon className='mr-5 w-8 text-green-600'/>Lorem, ipsum dolor.</p>
                    <button className='w-full py-4 my-4'>Get Started</button>
                </div>
            </div>

            <div className='bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative'>
                <span className='py-1 px-3 uppercase bg-indigo-200 text-indigo-900 rounded-2xl text-sm'>Premium</span>
                <div>
                    <p className='flex font-bold text-6xl'>$99<span className='text-xl text-slate-500 flex flex-col justify-end'>/mo</span></p>
                </div>
                <p className='text-2xl text-slate-500 py-8'>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
                <div className='text-2xl'>
                    <p className='flex py-4'><CheckIcon className='mr-5 w-8 text-green-600' />Lorem, ipsum dolor.</p>
                    <p className='flex py-4'><CheckIcon className='mr-5 w-8 text-green-600'/>Lorem, ipsum dolor.</p>
                    <p className='flex py-4'><CheckIcon className='mr-5 w-8 text-green-600'/>Lorem, ipsum dolor.</p>
                    <p className='flex py-4'><CheckIcon className='mr-5 w-8 text-green-600'/>Lorem, ipsum dolor.</p>
                    <p className='flex py-4'><CheckIcon className='mr-5 w-8 text-green-600'/>Lorem, ipsum dolor.</p>
                    <button className='w-full py-4 my-4'>Get Started</button>
                </div>
            </div>

            </div>

        </div>
    </div>
  )
}

export default Pricing