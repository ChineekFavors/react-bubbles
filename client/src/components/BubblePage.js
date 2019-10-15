import React, { useState, useEffect } from "react";


import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

import {axiosWithAuth} from './utils/axiosWithAuth.js';



const BubblePage = () => {
  const [colorList, setColorList] = useState([]);

  const fetchData = () => {
  	axiosWithAuth()
  		.get('/colors')
  		.then(res => setColorList(res.data))
  		.catch(err => console.log(err))
  };

  useEffect(() => {
  	fetchData()
  },[]);
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property

  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} fetchData={fetchData} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
