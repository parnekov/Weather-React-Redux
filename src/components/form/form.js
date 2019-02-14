import React from "react";

class Form extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            city: ""
        }
    }
    render(){
        return <form className="form" onSubmit={this.props.gettingWeather}>
                    <input id="mainInput" type="text" name="city" placeholder={this.props.error}/>
                    <button id="buttonSearch">Отримати погоду</button>
               </form>
    }
}

export default Form;