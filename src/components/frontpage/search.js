import React,{useState} from 'react'
import { AsyncPaginate } from 'react-select-async-paginate'
import { GeoOptions, Geo_api_url } from '../../Api';
import "./search.css";

function Search({onSearchChange}) {
    const [search , setsearch]= useState(null);
   const handleOnChange =(searchdata) =>{
    setsearch(searchdata);
    onSearchChange(searchdata);
   };
   const loadOptions =(inputValue)=>{
    return fetch(`${Geo_api_url}/cities?minPopulation=10000&namePrefix=${inputValue}`, GeoOptions)
	.then((response) => response.json())
      .then((response) => {
        return {
          options: response.data.map((city) => {
            return {
              value: `${city.latitude} ${city.longitude}`,
              label: `${city.name}, ${city.countryCode}`,
            };
          }),
        };
      });
  };
  
    return (
    <div className="container">
      <h1>Welcome To WeatherHome</h1>
    <AsyncPaginate
    placeholder="Search for the place"
    debounceTimeout={500}
    value={search}
    onChange={handleOnChange}
    loadOptions= {loadOptions}
    />
    </div>
  )
}

export default Search