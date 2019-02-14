    export const reducer = (state = {weather: []}, action) => {
        switch (action.type) {
            case 'GET_API':
                state = createWeatherArrayDays(action.data);
                updateStorage(state);
                return state;
                
            case 'GET_STORAGE':
            state = downloadListFromSorage();
            return state;       

            default: 
            return state;
        }
    }

    function updateStorage(weatherArray) {
        localStorage.setItem('weather', JSON.stringify(weatherArray));
    }

        // get data from localStorage
    function downloadListFromSorage(){
        const weatherListStorage = localStorage.getItem('weather'); 
        if(weatherListStorage !== undefined){
            return JSON.parse(weatherListStorage);
        } else {
            return console.log("storage is empty");
        }
    }

        // get 5 objects (days) 
    function createWeatherArrayDays(data){
        const weatherArray = [];
                for(let i = 0; i < 5; i++){
                weatherArray.push({   // or concat 
                city: data.city.name,
                country: data.city.country,
                date: data.list[i].dt,
                temp: data.list[i].temp.day,
                conditionDescr: data.list[i].weather[0].description,
                conditionId: data.list[i].weather[0].id,
                humidity: data.list[i].humidity,
                pressure: data.list[i].pressure
                })
                }    
        return weatherArray;
    }

