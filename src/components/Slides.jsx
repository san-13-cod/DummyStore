import React from "react";
function Slides(props) {
  return (
    <div
      className={props.clas}
      style={{
        backgroundImage: `radial-gradient(circle at center, rgba(0,0,0,0.8) , rgba(0,0,0,0.8)), url(${props.image})`,
      }}
    >
      <div className="content">
        <h1>{props.title}</h1>
        <p>{props.text}</p>
      </div>
    </div>
  );
}

export default Slides;
