import React from "react";
import { useParams } from "react-router-dom";

const UserDetails = () => {
  const { userId } = useParams(); // adding Params for return value in url
  return <div>Details of User {userId}</div>;
};

export default UserDetails;
