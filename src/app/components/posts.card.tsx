"use client";
import React, { useState, useEffect  } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { getPost } from '../services/post.service';
import {  Post } from '@/app/interfaces/post.interface';


const PostCard: React.FC = () => {

  const searchParams = useSearchParams()
  const [post, setPost] = useState<Post>();
  const id = searchParams.get('id')

  useEffect(() => {
    if (id) {
      const obtenerPost = async () => {
        try {
          const postId = parseInt(id);          
          if (!isNaN(postId)) {
            const data = await getPost(postId);
            setPost(data);
          }
        } catch (error) {
          console.log(error);
        }
      };
      obtenerPost();
    }
  }, [id]);
  if (post) {
    return (
        <div className="border rounded shadow-lg">
            <div className="bg-gray-200 p-4">
                <h1 className="text-xl font-bold text-center">ID {post.id}</h1>
            </div>
            <div className="p-4">
                <h2 className="text-lg font-semibold">Id: {post.id}</h2>
                <h2 className="text-lg font-semibold">Title: {post.title}</h2>
                <h2 className="text-lg font-semibold">Body: {post.body}</h2>

            </div>
            <Link href="/" 
            type="button"
            className="inline-block rounded bg-green-200 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-black"
            >
              Volver
            </Link>
        </div>
      );
  }
};

export default PostCard;
