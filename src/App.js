import React, { useState, useEffect } from 'react';
import axios from 'axios';


export default function App() {
    const [data, setData] = useState([])
    const [filteredData, setFilteredData] = useState([]);
    const [input, setInput] = useState('');
    
    

    useEffect(() => {
        axios.get(`http://localhost:5000/price`)
            .then((response) => {
                
                setData(response.data);
                console.log(response.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])
    

    const searchDest = (searchValue) => {
        setInput(searchValue)
        if (input !== '') {
            
            const filteredData = data.filter((item) => {                
               return Object.values(item).join('').toLowerCase().includes(input.toLowerCase())
                
            })
            console.log(filteredData);
            setFilteredData(filteredData)
            
        }
    }

    return (
        <div style={{ padding: 40 }}>
            <h2>Search for a destination</h2>
            <input icon='search'
                placeholder='Search...'
                onChange={(e) => searchDest(e.target.value)}
            />
            <div>
                
                {input.length > 1 ? (
                    filteredData.map((country) => {
  
                        return (               
                            <p>{country.price}</p>
                            
                        )
                    })
                ) : null}
            </div>
        </div>
    )
}