import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
import Info from './components/info/info';
import Form from './components/form/form';
import Place from './components/place';
import WeatherDay from './components/weatherDay';
import { createStore, bindActionCreators } from 'redux';
import { reducer } from './reducer';
import * as actions  from './action';

const store = createStore(reducer);
const { dispatch } = store;  // замість store.dispatch()
const { getApi, getStorage } = bindActionCreators(actions, dispatch);


class Weather extends React.Component {
  constructor(props){
    super(props);
    this.gettingWeather = this.gettingWeather.bind(this);
    this.getDataFromApi = this.getDataFromApi.bind(this);
    this.state = {
        isLoading : false
    }
  }

  componentDidMount(){
    if(!this.getDataFromApi("Ivano-frankivsk")){
      getStorage();
    }
  }

  getDataFromApi = async (city)=>{
    if (city){
      const api_url = await fetch(`http://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&cnt=5&appid=c4a2fab9875a4addca3b5ca41d0f8232`);
      const data = await api_url.json();
      if(data.city){
        getApi(data);
        this.setState({isLoading : false});
      } else {
          alert("Введіть коректно назву міста будь ласка");
          this.setState({isLoading : false});
      }
    } else {
        alert("Введіть назву міста будь ласка");
        this.setState({isLoading : false});
    }
  };

  gettingWeather(event){
    event.preventDefault();
    this.setState({isLoading : true})

    const city = event.target.elements.city.value.trim();
    this.getDataFromApi(city);

    event.target.elements.city.value = '';
  }

  render(){
    const weatherDays = (store.getState());        
    return (
      <div className="wrapper"> 
        <Info className="info" isLoading={this.state.isLoading}/>
        <Form className="form" gettingWeather={this.gettingWeather}/>
        <Place className="place" info={weatherDays} />
        {weatherDays && <div>
          <div className="dayDivs">
            <div id="firstDayDiv">
              <WeatherDay weather={weatherDays[0] !== undefined ? weatherDays[0] : ""} />
            </div>
            <div id="secondDayDiv">
              <WeatherDay weather={weatherDays[1] !== undefined ? weatherDays[1] : ""} />          
            </div>
            <div id="thirdDayDiv">
              <WeatherDay weather={weatherDays[2] !== undefined ? weatherDays[2] : ""} />
            </div>
            <div id="forthDayDiv">
              <WeatherDay weather={weatherDays[3] !== undefined ? weatherDays[3] : ""} />
            </div>
            <div id="fifthDayDiv">
            <WeatherDay weather={weatherDays[4] !== undefined ? weatherDays[4] : ""} />
            </div>
          </div>
        </div>
        }
      </div>
    );
  }
}

store.subscribe(()=>{
  update();   
})

function update(){
  ReactDOM.render(
    <Weather />, document.getElementById('root'));
}
update();
