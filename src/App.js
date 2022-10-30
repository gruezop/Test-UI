import React, {useState} from "react";
import axios from 'axios';

function App() {
    const [data, setData] = useState([]);
    const [input, setInput] = useState([]);


    function handleChange(event) {
        setInput(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        axios.get(`http://localhost:5000/price?country=${input}`, {
    
        })
            .then(res => {
                const data = res.data;
                console.log(data);
                setData(data);
            }).catch(err => {
            console.log(err);
        });
    }

    return (
        <div style={{ padding: 40 }}>
        <h2>Enter A Destination</h2>    
        <form onSubmit={handleSubmit}>
            
            <input type="text" onChange={handleChange}/>
            <button style={{marginLeft: 10}} type="submit">Get Price</button>
            <div>
                {
                data.map(data => <p key={data.country}>{data.price}</p>)
                }
            </div>
        </form>
        </div>
    );
}

export default App;