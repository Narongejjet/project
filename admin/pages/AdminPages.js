import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import {MdOutlineSystemUpdateAlt} from 'react-icons/bi';
import {BiCartAlt} from 'react-icons/bi';
import Table from'../components/table';
import Form from'../components/form';
import { useState } from 'react';
import Link from 'next/link';

export default function AdminPages() {

  const[visible,setVisible]=useState(false)

  const handler=()=>{
    setVisible(!visible)
  }

  return (
    <section>
      <Head>
        <title>Admin Management</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/clipart586690.png"/>
      </Head>

      <main className='py-5'>
    
      <h1 className='text-xl md:text-5xl text-center font-bold'>Admin Management</h1>
      

      <div className="container mx-auto flex justify-between py-5 bordor-b">
        <div className="left flex gap-3">
          <button onClick={handler} className="flex bg-yellow-500 text-white px-4 py-2 border rounded-md hover:bg-gray-50 hover:border-lime-500 hover:text-gray-800">
            Update User<span className='px-1'></span>
          </button>
        </div>
        <div className="left flex gap-3">
        <Link href="/Proindex" className="flex bg-blue-500 text-white px-4 py-2 border rounded-md hover:bg-gray-50 hover:border-lime-500 hover:text-gray-800">
          Product Management<span className='px-1'><BiCartAlt size={24}></BiCartAlt></span>
          </Link>
        </div>
      </div>
        {/*collapsable from */}
        {visible?<Form></Form>:<></>}
        

        {/* {table} */}
        <div className="container mx-auto">
          <Table></Table>
        </div>
        
    </main>
    </section>
  )
}
