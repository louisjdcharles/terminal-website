import React, { Component } from "react";
import "./App.css";

import Table from "./Table";

function App(props) {
    return(
        <div>
            <Table
                names = {["person1", "Louis", "John Smith"]}
                ages = {[30, 16, 22]}
            />
        </div>
    );
}

export default App;