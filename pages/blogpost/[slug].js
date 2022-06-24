import React from "react";
import { useRouter } from "next/router"; //dynamic routes of next js

const slug = () => {
  const router = useRouter(); 
  const { slug } = router.query; //destructuring of slug from the url
  return <div>{slug}</div>;
};

export default slug;
