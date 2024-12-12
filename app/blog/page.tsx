import { getPosts } from './getPosts'; // Path to the helper function
import { format } from 'date-fns';
import ReactMarkdown from 'react-markdown';


export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Blog Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <div
            key={post.slug}
            className="p-4 border rounded-lg shadow hover:shadow-lg transition"
          >
            <h2 className="text-2xl font-semibold mb-2">{post.frontmatter.title}</h2>
            
            <p className="text-gray-600">{format(new Date(post.frontmatter.date), 'MMMM dd, yyyy')}</p>
           
    <ReactMarkdown>{post.summary}</ReactMarkdown>

             <a href={`/blog/${post.slug}`}>Read more</a>
          </div>
        ))}
      </div>
    </div>
  );
}
