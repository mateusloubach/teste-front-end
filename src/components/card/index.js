import React from 'react';
import {Component} from './style';

const Card = ( {menu}) => { 

    return(
        <Component>
            <div className="card" id={menu.id} >
                <div className="mediaCard">
                    <img src={menu.picture} alt="comida"/>
                </div>
                <div className="bottomCard">
                    <div className="infoCard">
                        <p className="bottomText">{menu.title}</p> 
                        <p className="bottomText">R${menu.price}</p> 
                    </div>
                    <p></p>
                    < div className="infoDescription" >
                        <h2>Ingredientes</h2>
                        <p>{menu.description}</p>
                    </div>
                </div>
            </div>       
          
        </Component>
    )
}

export default Card;
