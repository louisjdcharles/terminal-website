import React, { Component } from "react";
import "./Table.css";

function Table(props) {

    const names = props.names;
    const ages = props.ages;

    const tableData = names.map((_, i) =>
        <tr><td>{names[i]}</td><td>{ages[i]}</td></tr>
    )

    return (
        <table>
            <th>Name</th><th>Age</th>
            {tableData}
        </table>
    );
}

export default Table;