import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ReactTable from "react-table"; 
require("es6-promise").polyfill();
require("isomorphic-fetch");

export default function App() {
  const [data, setData] = useState([]);
  const [q, setQ] = useState();

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=10")
    .then(response => response.json())
    .then(json => setData(json));
  }, []);

    return (
      <ReactTable  
      data={this.state.users}  
      columns={columns}  
   />
    );
}