import React from "react";


class WeatherDay extends React.Component {

    constructor(props){
        super(props);
        this.url = ""
        this.getDay = this.getDay.bind(this);
    }

    getDay(date){
        let millisec = parseInt(date + "0".concat("0").concat("0"));
        let dateObj = new Date(millisec);
        let options = { weekday: 'long' };
        return dateObj.toLocaleDateString("en-US", options);
    }

    render(){
        if ((this.props.weather.conditionId >= 200) && (this.props.weather.conditionId <= 504)) {
            this.url = require("../../img/var-sunny.png");
        } else if ((this.props.weather.conditionId  >= 520) && (this.props.weather.conditionId <= 531)) {
            this.url = require("../../img/var-rain.png");
        } else if (this.props.weather.conditionId === 511) {
            this.url = require("../../img/var-sleet.png");
        } else if ((this.props.weather.conditionId === 600) || (this.props.weather.conditionId === 601)) {
            this.url = require("../../img/var-snow-occasional.png");
        } else if (this.props.weather.conditionId === 602) {
            this.url = require("../../img/var-cold.png");
        } else if ((this.props.weather.conditionId >= 611) && (this.props.weather.conditionId <= 616)) {
            this.url = require("../../img/var-sleet.png");
        } else if ((this.props.weather.conditionId >= 620) && (this.props.weather.conditionId <= 622)) {
            this.url = require("../../img/var-cold.png");
        } else if (this.props.weather.conditionId === 800) {
            this.url = require("../../img/var-sunny.png");
        } else if ((this.props.weather.conditionId >= 801) && (this.props.weather.conditionId <= 804)) {
            this.url = require("../../img/var-clouds.png");
        } else {
            console.log("api not required, please check this!");
        }

        return <div className="weatherInfo">
        <div><img className="imageCondition" src={this.url} alt="imageCondition"/></div>

        <div className="weatherInfoDay">
            <p>День: {this.props.weather !== "" ? this.getDay(this.props.weather.date) : ""}</p>
            <p>Температура: {this.props.weather !== "" ? parseInt((this.props.weather.temp)-273.15, 10) : ""}</p>        
            <p>Погодні умови: {this.props.weather !== "" ? this.props.weather.conditionDescr : ""} </p> 
            <p>Вологість: {this.props.weather !== "" ? this.props.weather.humidity : ""}</p> 
            <p>Тиск: {this.props.weather !== "" ? this.props.weather.pressure : ""}</p> 
        </div>

        </div>
    }
}
  
export default WeatherDay;