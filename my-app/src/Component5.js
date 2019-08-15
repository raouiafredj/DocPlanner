import React, { Component } from 'react';
import './component5.css'

class Component5 extends Component {
    render() {
        return <div>
        <div className="para">
                
<h1>Improve the lives of millions. </h1>
<h1> Change yours forever</h1>
<div><p>More than 1000 team mates share our same vision, goals and passion.<br/> With offices in Warsaw, Barcelona, Istanbul, Rome, Mexico City and <br/>Curitiba, our search for great talent never stops.</p>
</div>
    </div>   

    <div className="imgtt"  >
<div className="imgs1">

{words_list1.map(item=>
<div  key={item.id}>
<div className="shadow">
<img alt="img-details" src={item.image}/>
<form className="btn_warsaw">                         {item.place} <span className="inp-warsaw">
                                <button className="btn">See openings</button>
                            </span>
                            </form>
                        </div>
</div>


)}


</div>


<div className="imgs2">

{words_list2.map(item=>
<div  key={item.id}>

<div className="shadow">
<img alt="img-details" src={item.image}/>
<form className="btn_warsaw">                         {item.place} <span className="inp-warsaw">
                                <button className="btn">See openings</button>
                            </span>
                            </form>
                        </div>
</div>

)}


</div>










    </div>    
    </div>  
    }
}



const words_list1=[
{id:1,image:"https://www.docplanner.com/images/warsaw.png",place:'Warsaw', link:'https://www.docplanner.com/career?&loc=poland#jobs-offers'},
{id:2,image:"https://www.docplanner.com/images/barcelona.png",place:'Barcelona', link:'https://www.docplanner.com/career?&loc=poland#jobs-offers'},
{id:3,image:"https://www.docplanner.com/images/istanbul.png",place:'Istanbul', link:'https://www.docplanner.com/career?&loc=poland#jobs-offers'}
];
const words_list2=[
{id:1,image:"https://www.docplanner.com/images/rome.png",place:'Rome', link:'https://www.docplanner.com/career?&loc=poland#jobs-offers'},
{id:2,image:"https://www.docplanner.com/images/mexico-city.png",place:'Mexico City', link:'https://www.docplanner.com/career?&loc=poland#jobs-offers'},
{id:3,image:"https://www.docplanner.com/images/curitiba.png",place:'Curitiba', link:'https://www.docplanner.com/career?&loc=poland#jobs-offers'}

];


export default Component5;