import axiosInstance from '../../../utils/axiosInstance';
import { GetStaticProps, GetStaticPaths } from 'next';

import { Post } from '@/app/interfaces/post.interface';

export const fetchData= async (): Promise<Post[]> => {
    try {
        const response = await axiosInstance.get('/posts');
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};

export const getPost = async (post_id: Number) => {
    const response = await await axiosInstance.get(`/posts/${post_id}`);
    if (response.status === 200) {
        return await response.data;
    }
  };

/* export const getStaticPaths: GetStaticPaths = async () => {
    const response = await axiosInstance.get('/posts');
    const posts: Post[] = response.data;
  
    const paths = posts.map(post => ({
      params: { id: post.id.toString() },
    }));
  
    return {
      paths,
      fallback: false,
    };
  };

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const response = await axiosInstance.get(`/posts/${params?.id}`);
    const task: Post = response.data;

    return {
      props: {
        task,
      },
    };
  }; */