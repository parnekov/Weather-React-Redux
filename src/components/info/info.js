import React from "react";

const Info = (props) => {
    return <div className="info">
            <h3>Прогноз погоди</h3>
            <div className="infoLoad"><p>Дізнайтесь погоду у Вашому місті</p></div>
            {props.isLoading && 
                <div className="infoLoad">
                        <img id="loadContainer" src= {require("../../anim/load.gif")} alt="loadContainer"/>
                </div>}
            </div>
            }

export default Info;