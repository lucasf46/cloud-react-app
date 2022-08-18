import React from 'react'

import {
    FaFacebook, 
    FaGithub,
    FaInstagram,
    FaTwitter,
    FaTwitch,
} from 'react-icons/fa'


const Footer = () => {
  return (
    <div className='w-full mt-24 bg-slate-900 text-gray-300 py-8 px-2' >
        <div className='max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-8'>
            <div >
                <h6 className='pt-2 uppercase font-bold'>Solutions</h6>
                <ul>
                    <li className='py-1'>Marketing</li>
                    <li className='py-1'>Analytics</li>
                    <li className='py-1'>Commerce</li>
                    <li className='py-1'>Data</li>
                    <li className='py-1'>Cloud</li>
                </ul>
            </div>

            <div >
                <h6 className='pt-2 uppercase font-bold'>Support</h6>
                <ul>
                    <li className='py-1'>Marketing</li>
                    <li className='py-1'>Analytics</li>
                    <li className='py-1'>Commerce</li>
                    <li className='py-1'>Data</li>
                    <li className='py-1'>Cloud</li>
                </ul>
            </div>

            <div >
                <h6 className='pt-2 uppercase font-bold'>Company</h6>
                <ul>
                    <li className='py-1'>Marketing</li>
                    <li className='py-1'>Analytics</li>
                    <li className='py-1'>Commerce</li>
                    <li className='py-1'>Data</li>
                    <li className='py-1'>Cloud</li>
                </ul>
            </div>

            <div >
                <h6 className='pt-2 uppercase font-bold'>Legal</h6>
                <ul>
                    <li className='py-1'>Marketing</li>
                    <li className='py-1'>Analytics</li>
                    <li className='py-1'>Commerce</li>
                    <li className='py-1'>Data</li>
                    <li className='py-1'>Cloud</li>
                </ul>
            </div>
            <div className='col-span-2 pt-8 md:pt-2'>
                <p className='font-bold uppercase '>Subscribe to our newsletter</p>
                <p className='py-4'>The latest news, articles, and resources, sent to your inbox weekly.</p>
                <form className='flex flex-col sm:flex-row'>
                    <input className='w-full p-2 mr-4 rounded-md mb-4' type="email" placeholder='Enter email..' />
                    <button className='p-2 mb-4'>Subscribe</button>
                </form>
            </div>
        </div>
        <div className='flex flex-col max-width-[1240px] px-2 py-4 mx-auto justify-between sm:flex-row text-gray-500 text-center'>
            <p className='py-4'>2022 Workflow LLC. All rights reserved.</p>
            <div className='flex justify-between sm:w-[300px] pt-4 text-2xl'>
                <FaFacebook />
                <FaInstagram />
                <FaTwitter />
                <FaTwitch />
                <FaGithub />
            </div>
        </div>
    </div>
  )
}

export default Footer