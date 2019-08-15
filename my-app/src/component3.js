import React, { Component } from 'react';
import './component3.css';





class Component3 extends React.Component {
    render() {
        return (
            
             <div className="component2">
     <div className="menu1">
                <h1> We are a global company
                    <br/>with local culture
                </h1>
     </div>
            <div className="component2-menu">
     
                <ul className="menu_1">
                {words_list.map(item => 
                    <li   key={item.id} > <a href= {item.link}>{item.text}
                    
 </a> </li> ) } </ul>
              </div>

</div>    
            
        );
    }
}


const words_list=[

    {id:1,text:"znanylekarz",link:"https://www.znanylekarz.pl/?_ga=2.169609703.710303345.1565863122-1634415003.1564388962"},
    {id:2,text:"doctoralia",link:"https://www.doctoralia.es/"},
    {id:3,text:"miodottore",link:"https://www.miodottore.it/?_ga=2.131859657.710303345.1565863122-1634415003.1564388962"},
    {id:4,text:"doktortakvimi",link:"https://www.doktortakvimi.com/?_ga=2.131859657.710303345.1565863122-1634415003.1564388962"},
    {id:5,text:"znamylekar",link:"https://www.znamylekar.cz/"}
    ];


export default Component3;