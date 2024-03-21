import React from "react";

function SGW() {
  let currdate = new Date();
  currdate = currdate.getHours();
  let greeting = "";
  const cssStyle = { };
  if (currdate >= 1 && currdate < 12) {
    greeting = "Good Morning";
    cssStyle.color = 'green';
  } else if (currdate >= 12 && currdate < 19) {
    greeting = "Good Afternoon";
    cssStyle.color = 'orange';

  } else {
    greeting = "Good Night";
    cssStyle.color = 'black';
 }
  return(
    <>
        <div>
        
        <h1>Hello Sir ,<span style={cssStyle}> {greeting} </span>  </h1>;

        </div>
    </>
   )


}

export default SGW;

