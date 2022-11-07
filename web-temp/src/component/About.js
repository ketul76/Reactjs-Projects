import React from "react";

function About(props){
  const aboutItems = props.aboutDatas;
  return(
<>
    <div class="container">
      <h1>{aboutItems.title}</h1>
      <p>
        <img class="img_2" src="/img/img_1.jpg" />
        {aboutItems.paragraph}
      </p>
    </div>
</>
  )
}

export default About;