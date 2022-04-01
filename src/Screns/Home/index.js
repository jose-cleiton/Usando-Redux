import React, { useEffect, useState } from "react";
import { doGetRequest } from "../../Helpers/apiHelper";

const Home = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    doGetRequest("/people/1")
      .then(setUser)
      .catch(console.error)
      .finally(() => {
        console.log("Tudo ok!");
      });
  }, []);

  if (!user) return <h1> Home... </h1>;
  return <h1>{user.name}</h1>;
};

export default Home;
