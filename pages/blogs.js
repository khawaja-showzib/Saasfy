import React from 'react'
import { createClient } from "next-sanity";
import imageUrlBuilder from '@sanity/image-url'
import Link from 'next/link';

const client = createClient({
  projectId: 'f1a85crc',
  dataset: 'production',
  useCdn: true
});

const builder = imageUrlBuilder(client)

const Blogs = ({blog}) => {
  return (
    <section className='my-20 px-3 md:px-0'>
        <div className='container mx-auto'>
          <h2 className='text-4xl uppercase font-bold mb-10 text-center'>Explore daily blogs</h2>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            {blog.map((post) => {
              return (
                <div className='bg-white rounded-xl' key={post.slug.current}>

                  <div className="h-full overflow-hidden">
                    <Link href={"/blog/" + post.slug.current}><img className='aspect-[3/2] rounded-tl-xl rounded-tr-xl' src={builder.image(post.blogImg)} alt="" /></Link>
                    <div className="p-6 border rounded-xl border-gray-300 border-opacity-80">
                      <h1 className="title-font text-lg font-semibold text-gray-900 mb-3">{post.title}</h1>
                      <p className="leading-relaxed mb-3">{post.metadesc}</p>
                      <div className="flex items-center justify-between flex-wrap ">
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
        </div>
      </section>
  )
}

export async function getServerSideProps() {

    const client = createClient({
      projectId: 'f1a85crc',
      dataset: 'production',
      useCdn: true
    });
  
    const query = `*[_type == "blog"]`
    const blog = await client.fetch(query)
  
    return {
      props: { blog },
    }
  }

export default Blogs