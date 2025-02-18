import React, { useState} from "react";
import axios from 'axios'

function App() {
  const [data, setData] = useState({})
  const [location, setLocation] = useState('')

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=f90c00c9d391357f4882f68cf6f7edcb`
 
  const searchLoaction = (event) =>{
    if(event.key === 'Enter'){
      axios.get(url).then((response)=>{
        setData(response.data)
        console.log(response.data)
      })
      setLocation('')
    }
  
  }

  return (
    <div className="App">
      <div className="search">
        <input
        type="text"
        value={location}
        onChange={event => setLocation(event.target.value)}
        placeholder="Enter Location"
        onKeyPress={searchLoaction}
        />
      </div>
      <div className="Container">
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="temp">
            {data.main ? <h1>{data.main.temp.toFixed()}&deg;F</h1> : null}
         
          </div>
          <div className="description">
            {data.weather ? <p>{data.weather[0].main}</p> : null }
            
          </div>
        </div>


        {data.name !== undefined && 
        <div className="bottom">
        <div className="feels">
          {data.main ? <p className='bold'>{data.main.feels_like.toFixed()}&deg;F</p> : null}
         <p>feels like</p>
        </div>
        <div className="humidity">
          {data.main ? <p className='bold'>{data.main.humidity}%</p> : null}
          <p>Humidity</p>
        </div>
        <div className="wind">
         {data.wind ? <p className='bold'>{data.wind.speed.toFixed()}km</p> : null}
         <p>wind speed</p>
        </div>
      </div>
   
        }
        
        </div>
        </div>
  );
}

export default App;
