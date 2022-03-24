import React from 'react';
import './Country.css';

const Country = (props) => {
   
    const {name,population,area,region,...rest} = props.country;
    return (
        <div className='country'>
            <h2>Country Name: {name.common}</h2>
            <img src={rest.flags.png} alt="" />
            <p>Population: {population}</p>
            <p>Area: {area}</p>
            <p>Region: {region}</p>
            <p></p>
            
        </div>
    );
};

export default Country;