import React, { useState, useRef, useEffect } from 'react';
import Feed from './Feed';

import './Main.css';

const Main = () => {
  const [feedData, setFeedData] = useState([]);
  const feedId = useRef(0);

  // const getData = async = () =>{
  //   const response = await fetch(
  //     "data/data.json"
  //     ).then((response)=>response.json());

  //   const initData = response.map((item) => {
  //     return{
  //       name: item.name,
  //       image: item.img,
  //       content: item.content,
  //       id: feedId.current++,
  //     }
  //   })
  //   setFeedData(initData);
  // }
  const getData = async () => {
    const response = await fetch('data/data.json').then((response) =>
      response.json()
    );
    const initData = response.map((item) => {
      return {
        name: item.name,
        image: item.img,
        content: item.content,
        id: feedId.current++,
      };
    });
    setFeedData(initData);
  };

  useEffect(() => {
    setTimeout(() => {
      getData();
    }, 1500);
  }, []);

  return (
    <div className="Main">
      {feedData.map((item) => (
        <Feed key={item.id} {...item}></Feed>
      ))}
    </div>
  );
};

export default Main;
