import Link from 'next/link';
const getPosts = async () => {
  const res = await fetch(`${process.env.BASE_URL}/api/posts`);

  return res.json();
};
const getAuthor = async () => {
  const res = await fetch(`${process.env.BASE_URL}/api/findAuthor?id=1`);

  return res.json();
};
export default async function Home() {
  const data: { id: number; title: string; content: string }[] = await getPosts();
  const author = await getAuthor();
  console.log(author);
  return (
    <main>
      <h1 className='text-xl underline'>Home</h1>
      <button className='py-2 px-4 rounded-lg bg-teal-500'>
        <Link href={'/about'}>Go to About</Link>
      </button>
      <div>
        {data.map((item, index) => {
          return (
            <div key={index} className='border p-4 m-4 rounded-lg bg-gray-200'>
              <h1 className='text-blue-800 text-lg font-semibold'>{item.title}</h1>
              <p>{item.content}</p>
              <p>By: {author.name}</p>
            </div>
          );
        })}
      </div>
    </main>
  );
}
