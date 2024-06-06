"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { fetchData } from '../services/post.service';

import { Post } from '@/app/interfaces/post.interface';

const PostTable: React.FC = () => {
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const getPosts = async () => {
            try {
                const data = await fetchData();
                setPosts(data);
                setLoading(false);
            } catch (error) {
              console.log(error);
              
                setError('Failed to fetch Posts');
                setLoading(false);
            }
        };
        getPosts();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

  return (
    
    <table className='w-full text-md text-left rtl:text-center'>
      <thead className="text-center">
        <tr className="bg-[#bb9db0] text-white font-medium">
          <th scope="col">ID</th>
          <th scope="col">Title</th>

        </tr>
      </thead>
      <tbody className="text-center">
        {posts.map((post: Post) => (
          <tr key={post.id} className="border-b border-[#030203]">
            <td>{post.id}</td>
            <Link className="btn btn-primary btn-sm " href={`/posts/?id=${post.id}`}>
                <td>{post.title}</td>
            </Link>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default PostTable;
