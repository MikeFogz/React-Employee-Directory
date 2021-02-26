import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ReactTable from "react-table"; 


export default function App() {
  const [data, setData] = useState([])
  const [q, setQ] = useState()

    return (
      <ReactTable  
      data={this.state.users}  
      columns={columns}  
   />
    );
}