import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ReactTable from "react-table"; 
import Datatable from "./components/Datatable/Datatable";
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

  function search(rows) {
    const columns = rows[0] && Object.keys(rows[0]);
    return rows.filter((row) =>
      columns.some(
        (column) => row[column].toString().toLowerCase().indexOf(q.toLowerCase()) > -1
      )
    );
  }

    return (
      <div>
        <div>
          <input type="text" value={q} onChange={(e) => setQ(e.target.value)}/>
        </div>
        <div>
          <Datatable data={search(data)}/>
        </div>
      </div>
    );
}