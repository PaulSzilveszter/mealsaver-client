import React from "react"
import { useState, useEffect } from "react";
import ProductCard from "../../../components/Market/ProductCard"
import { getAllPosts } from "../../../functions/ServerFunctions"
import { Post } from "../../../constants/ServerConstants";
import { ScrollView } from "react-native";

export default function Page() {
  const [productPosts, setProductPosts] = useState(new Array<Post>);

  useEffect(() => {
    async function fetchData() {
      const posts = await getAllPosts();
      setProductPosts(posts);
    }
    fetchData();
  }, []);

  const listOfProductCards = productPosts.map((post) => (
    <ProductCard
      key={post.id}
      post={post}
    />
  ));

  return <>
  <ScrollView style={{height:3000}}>
  {listOfProductCards}

  </ScrollView>
  
  </>;
}