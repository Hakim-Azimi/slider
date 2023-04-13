import { useEffect, useState } from "react";
import "./App.css";
import data from "./data";

function App() {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);
  useEffect(()=>{
    let lastIndex = people.length -1;
    if(index<0){
      setIndex(lastIndex)
    }
    if(index > lastIndex){
      setIndex(0)
    }
  },
  [index, people])

  useEffect(()=>{
let slider =setInterval(()=>{
  setIndex(index+1);
}, 3000)
return()=> clearInterval(slider)
}
  ,[index])

  return (
    <div className="section">
      <div className="title">
        <span>نظرات مشتریان</span>
        <div className="section-center">
          {people.map((person, PersonIndex) => {
            const { id, image, name, title, qoute } = person;

            let position = "nextSlide";
            if (PersonIndex === index) {
              position = "activeSlide";
            }
            if (
              PersonIndex === index - 1 ||
              (index === 0 && PersonIndex === people.length - 1)
            ) {
              position = "lastSlide";
            }

            return (
              <article className={position} key={id}>
                <img className="person-img" src={image} alt={title} />
                <h4>{name}</h4>
                <p className="title">{title}</p>
                <p className="qoute">{qoute}</p>
              </article>
            );
          })}
          <button onClick={()=> setIndex(index+1)} className="next">بعدی</button>
          <button onClick={()=> setIndex(index-1)} className="prev">قبلی</button>
        </div>
      </div>
    </div>
  );
}

export default App;
