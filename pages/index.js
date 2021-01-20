import React from "react";
import Head from "next/head";
import { GitHub, Twitter, Instagram } from "react-feather";
import { createClient } from "contentful";

import Layout from "../components/layout";
import PostItem from "../components/postItem";

const Home = props => (
  <Layout>
    <div className="mt-24 lg:w-2/3 xl:w-1/2 mb-16 lg:mx-auto">
      <h1 className="font-display font-semibold lg:text-5xl text-4xl mb-6">
        Hola,
        <br />
        mi nombre es{" "}
        <span className="bg-gradient-to-r from-red-500 to-orange-400 bg-clip-text text-transparent">
          Daniel Castillejo
        </span>
      </h1>
      <h2 className="text-gray-700 font-body text-xl lg:text-2xl">
        Soy Desarrollador de Software, entusiasta del Diseño y amante de la
        Música.
      </h2>
      <div className="flex justify-between w-2/3 lg:w-1/3 mt-8 mb-32">
        <div className="transition duration-300 transform hover:scale-110 hover:bg-gray-900 hover:text-white text-gray-600 rounded-full">
          <a href="https:\\github.com\dkast" className="p-2 block">
            <GitHub></GitHub>
          </a>
        </div>
        <div className="transition duration-300 transform hover:scale-110 hover:bg-blue-400 hover:text-white text-gray-600 rounded-full">
          <a href="https:\\twitter.com\dkast" className="p-2 block">
            <Twitter></Twitter>
          </a>
        </div>
        <div className="transition duration-300 transform hover:scale-110 hover:bg-pink-600 hover:text-white text-gray-600 rounded-full">
          <a href="https:\\instragram.com\dkast" className="p-2 block">
            <Instagram></Instagram>
          </a>
        </div>
      </div>
      <h2 className="font-body text-xl mb-4 text-gray-600">Últimas entradas</h2>
      {props.posts.map(post => (
        <PostItem key={post.sys.id} post={post} />
      ))}
    </div>
  </Layout>
);

Home.getInitialProps = async () => {
  const client = createClient({
    space: process.env.SPACE_ID,
    accessToken: process.env.ACCESS_TOKEN
  });

  const res = await client.getEntries({
    content_type: "blogPost",
    limit: 10,
    order: "-sys.createdAt"
  });

  return {
    posts: res.items
  };
};

export default Home;
