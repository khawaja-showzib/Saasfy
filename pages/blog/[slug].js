import { useRouter } from 'next/router'
import PortableText from "react-portable-text"
import { createClient } from "next-sanity";
import imageUrlBuilder from '@sanity/image-url'

const client = createClient({
  projectId: 'f1a85crc',
  dataset: 'production',
  useCdn: true
});

const builder = imageUrlBuilder(client)

const Post = ({ post }) => {
  const router = useRouter()
  const { slug } = router.query

  return (
    <section className='container mx-auto my-20'>
      <section className="text-gray-600 body-font">
        <div className="flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-6xl text-3xl mb-4 font-medium text-gray-900 uppercase">{post.title}</h1>
            <p className='text-lg font-semibold text-blue-600 uppercase'>Created At {post.publishedAt}</p>
            <p className="mb-8 leading-relaxed">{post.metadesc}</p>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img className="object-cover object-center rounded" alt="hero" src={builder.image(post.blogImg)} />
          </div>
        </div>
      </section>

        <PortableText  className='blog-content'
          // Pass in block content straight from Sanity.io
          content={post.content}
          projectId='f1a85crc'
          dataset='production'
          // Optionally override marks, decorators, blocks, etc. in a flat
          // structure without doing any gymnastics
          serializers={{
            h1: (props) => <h1 style={{ color: "red" }} {...props} />,
            li: ({ children }) => <li className="special-list-item">{children}</li>,
          }}
        />

    </section>
  )
}

export default Post

export async function getServerSideProps(context) {

  const { slug } = context.query

  const client = createClient({
    projectId: 'f1a85crc',
    dataset: 'production',
    useCdn: true
  });

  const query = `*[_type == "blog" && slug.current == '${slug}'][0]`
  const post = await client.fetch(query)

  return {
    props: { post },
  }
}