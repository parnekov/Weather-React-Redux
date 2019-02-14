import React from 'react';

const Place = (props) => {
    return <div>
    <div className="cityCountryText">
            <span id="cityName">{props.info !== undefined && props.info !== null && props.info.length > 0 ?  props.info[0].city : "Місто"}</span>
            <span id="countryName">{props.info !== undefined && props.info !== null && props.info.length > 0?  props.info[0].country : "Країна"}</span> 
        </div>
    </div>
}

export default Place;

