import { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from 'next/link';
import Image from 'next/image';

import { getPosts } from './getPosts'; // Path to the helper function
import { format } from 'date-fns';
import ReactMarkdown from 'react-markdown';

export const metadata: Metadata = {
  title: 'Blog | Latest Updates and Store Guides',
  description: 'Read the latest news, guides, and tips about bin stores and liquidation centers across the United States.',
};

interface Post {
  slug: string;
  frontmatter: {
    title: string;
    date: string;
    image?: string; // Optional image field
  };
  content: string;
  summary: string;
  image?: string; // Optional image field
}

export default async function BlogPage() {
  const posts: Post[] = await getPosts();

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Latest Blog Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`}>
            <Card className="h-full hover:shadow-lg transition-shadow">
              {post.image && (
                <div className="relative h-48">
                  <Image
                    src={post.image}
                    alt={post.frontmatter.title}
                    fill
                    className="object-cover rounded-t-lg"
                  />
                </div>
              )}
              <CardHeader>
                <CardTitle>{post.frontmatter.title}</CardTitle>
                <p className="text-sm text-muted-foreground">
                  {format(new Date(post.frontmatter.date), 'MMMM dd, yyyy')}
                </p>
              </CardHeader>
              <CardContent>
                <ReactMarkdown>{post.summary}</ReactMarkdown>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
