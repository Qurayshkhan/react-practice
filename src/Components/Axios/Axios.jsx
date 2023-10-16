import React, { useEffect, useState } from "react";
import axios from "./Api";

function Axios() {
  const baseUrl = "https://jsonplaceholder.typicode.com";
  const mainContainer = {
    textAlign: "center",
    width: "100%",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gridGap: "10px",
  };
  const card = {
    border: "2px solid black",
    padding: "10px",
  };
  const [myData, setMyData] = useState([]);
  const [isError, setIsError] = useState("");
  //   useEffect(() => {
  //     axios
  //       .get("https://jsonplaceholder.typicode.com/posts")
  //       .then((response) => {
  //         setMyData(response.data);
  //       })
  //       .catch((error) => {
  //         setIsError(error.message);
  //       });
  //   }, []);

  const getApiData = async () => {
    try {
      const response = await axios.get("/posts");
      setMyData(response.data);
    } catch (error) {
      setIsError(error.message);
    }
  };
  useEffect(() => {
    getApiData();
  }, []);

  return (
    <>
      {isError !== "" && <h1>{isError}</h1>}
      <div style={mainContainer}>
        {myData.map((post) => {
          const { id, title, body } = post;
          return (
            <div style={card} key={id}>
              <h1>{title}</h1>
              <div>{body}</div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Axios;
