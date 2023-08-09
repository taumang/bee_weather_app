import React from 'react'


const api = {
    key:"77278187e14ff4191735bfb0e76d7643",
    base:"https://api.openweathermap.org/data/2.5/"
  }
function services() {
    

    const [query,setQuery] = useState('');
  const [weather,setWeather]=useState({});

  const search = e =>{
    if(e.key==="Enter"){
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
      .then(res=>res.json())
      .then(result=>{
        setWeather(result);
        setQuery('');
      });
    }
  }
  return (
    <div>

    </div>
  )
}

export default services