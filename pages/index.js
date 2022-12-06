import React from 'react'
import { createClient } from "next-sanity";
import imageUrlBuilder from '@sanity/image-url'
import Link from 'next/link';
import Card from '../components/Card'
import Sdata from '../components/ServicesData'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { IoIosCall, IoMdMail } from 'react-icons/io'
import Head from 'next/head';
import Image from 'next/image';

const client = createClient({
  projectId: 'f1a85crc',
  dataset: 'production',
  useCdn: true
});

const builder = imageUrlBuilder(client)

const index = ({ blog }) => {

  return (

    <>

      <Head>
        <title>Saasyfy || Sanity Blog</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <section className='bg-gradient-to-r from-secondary-400 to-primary-400 py-20 px-4 md:px-0'>
        <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 place-items-center'>
          <div>
            <h2 className='text-white text-4xl font-[900] mb-4 md:text-7xl'>We Are The Best In Business</h2>
            <p className='text-gray-200 text-md'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero at qui eum esse voluptate ad earum incidunt ut molestiae? Suscipit nobis ea reiciendis delectus harum ab odio modi in doloribus.</p>
          </div>
          <div>
            <img src="./banner-img.svg" alt="Banner Image" />
          </div>
        </div>
      </section>

      <section className='container mx-auto text-center my-16 px-4 md:px-0' id='about'>
        <h2 className='text-4xl uppercase font-bold mb-4'>About Us</h2>
        <p className='text-gray-700 italic max-w-[900px] mx-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. At optio doloremque dolorum facilis excepturi aut velit nam. Porro eveniet non praesentium dolorem facere earum incidunt iste est aliquid? Eaque, numquam!</p>
      </section>

      <section className='bg-gray-200 py-20 px-4 md:px-0' id='services'>
        <h2 className='text-4xl uppercase font-bold mb-10 text-center'>Our Services</h2>
        <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
          {Sdata.map((item) => {
            return (
              <Card sname={item.sname} content={item.content} icon={item.icon} />
            )
          })}
        </div>
      </section>

      <section className='my-20 px-4 md:px-0'>
        <div className='container mx-auto'>
          <h2 className='text-4xl uppercase font-bold mb-10 text-center'>Explore daily blogs</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {blog.map((post) => {
              return (
                <div className='bg-white rounded-xl' key={post.slug.current}>
                  <div className="h-full overflow-hidden">
                    <Link href={"/blog/" + post.slug.current}><img className='aspect-[3/2] rounded-tl-xl rounded-tr-xl' src={builder.image(post.blogImg)} alt="" /></Link>
                    <div className="p-6 border rounded-xl border-gray-300 border-opacity-80">
                      <h1 className="title-font text-lg font-semibold text-gray-900 mb-3">{post.title}</h1>
                      <p className="leading-relaxed mb-3">{post.metadesc}</p>
                      <div className="flex items-center justify-between flex-wrap gap-2">
                        <Link href={"/blog/" + post.slug.current} className="text-primary-400 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                          <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M5 12h14"></path>
                            <path d="M12 5l7 7-7 7"></path>
                          </svg>
                        </Link>
                        <span className="text-gray-400">
                          Created At {post.publishedAt}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
          <div className='mt-8 text-center'>
            <Link href='/blogs' className='py-3 px-20 bg-gradient-to-r from-secondary-400 to-primary-400 rounded text-white'>View All</Link>
          </div>
        </div>
      </section>

      <section className='container mx-auto my-20 md:my-36 px-4 md:px-0' id='clients'>
        <h2 className='text-4xl uppercase font-bold mb-10 text-center'>Our Clients</h2>
        <div className='grid mt-4 gap-10 place-items-center grid-cols-1 md:grid-cols-5'>
          <div className='grayscale transition duration-500 hover:grayscale-0'>
            <img src="./Client-1.svg" alt="" />
          </div>
          <div className='grayscale transition duration-500 hover:grayscale-0'>
            <img src="./Client-2.svg" alt="" />
          </div>
          <div className='grayscale transition duration-500 hover:grayscale-0'>
            <img src="./Client-3.svg" alt="" />
          </div>
          <div className='grayscale transition duration-500 hover:grayscale-0'>
            <img src="./Client-4.svg" alt="" />
          </div>
          <div className='grayscale transition duration-500 hover:grayscale-0'>
            <img src="./Client-5.svg" alt="" />
          </div>
          <div className='grayscale transition duration-500 hover:grayscale-0'>
            <img src="./Client-6.svg" alt="" />
          </div>
          <div className='grayscale transition duration-500 hover:grayscale-0'>
            <img src="./Client-7.svg" alt="" />
          </div>
          <div className='grayscale transition duration-500 hover:grayscale-0'>
            <img src="./Client-8.svg" alt="" />
          </div>
          <div className='grayscale transition duration-500 hover:grayscale-0'>
            <img src="./Client-9.svg" alt="" />
          </div>
          <div className='grayscale transition duration-500 hover:grayscale-0'>
            <img src="./Client-10.svg" alt="" />
          </div>
        </div>
      </section>

      <section className='container mx-auto my-16 px-4' id='contact'>
        <div className='grid grid-cols-1 md:grid-cols-2 place-items-center gap-10'>
          <div>
            <h2 className='text-4xl uppercase font-bold mb-10'>Contact Us</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius nisi quod esse necessitatibus commodi harum rerum sit minima itaque aut!</p>
            <div className='flex items-center mt-6 gap-6 flex-wrap'>
              <div className='flex gap-2 items-center'><IoIosCall className='text-xl text-primary-400' />
                <p className='text-lg text-gray-600 font-medium'>013-45678910</p></div>

              <div className='flex gap-2 items-center'><IoMdMail className='text-xl text-primary-400' />
                <p className='text-lg text-gray-600 font-medium'>example@mail.com</p></div>

              <div className='flex gap-2 items-center'><FaMapMarkerAlt className='text-xl text-primary-400' />
                <p className='text-lg text-gray-600 font-medium'>Abc road xyz street</p></div>
            </div>
          </div>

          <div>
            <Image src="/dev.gif" width='500' height='230' className='aspect-[8/4] object-cover' />
          </div>
        </div>
      </section>

    </>
  )
}

export async function getServerSideProps() {

  const client = createClient({
    projectId: 'f1a85crc',
    dataset: 'production',
    useCdn: true
  });

  const query = `*[_type == "blog"][0...3]`
  const blog = await client.fetch(query)

  return {
    props: { blog },
  }
}

export default index