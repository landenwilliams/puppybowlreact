import React, {useState, useEffect} from 'react';
import root from '../index.js';

const RenderHeader = () => {
    return (<>
        <form id="my-form">
        <label>Name:</label>
        <input type="text" name="name" />
        <label>Breed:</label>
        <input type="text" name="breed" />
        <button type="submit">Submit</button>
        <label>Search:</label>
        <input type="text" name="search" />
        <button type="submit">Search</button>
        </form></>)
}

export default RenderHeader;