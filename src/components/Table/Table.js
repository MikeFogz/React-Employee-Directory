import React from 'react'

function Table() {
    return (
        <table>
            <h1>Employees</h1>
            <tr key={id}>
            <td>{id}</td>
            <td>{name}</td>
            <td>{age}</td>
            <td>{email}</td>
            </tr>
        </table>
    )
}

export default Table
