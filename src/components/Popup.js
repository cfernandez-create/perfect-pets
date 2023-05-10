import React from "react"

export default function Popup(){
return (
    <div className="popup-container">
      <h2>Noya</h2>
      <img src="public/img/2077753281.jpg" alt="" width="500px"/>
      <p><strong>Age:</strong> 3  years old</p>
      <p><strong>Breed:</strong> Shihtzu Terrier Mix</p>
      <button class="heart-btn">
      <i class="fa fa-heart">
      </i></button>
      <p>He is a dog</p>
      <button onClick={Popup.onClose}>Close</button>
    </div>
  );
}