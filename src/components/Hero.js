import React, {useState} from "react"


export default function Hero(){
    const [showPopup, setShowPopup] = useState(false);
    return(
        <div class="main">

<div className="popup" style={{ display: showPopup ? 'block' : 'none' }}>


    {/* Additional information about the dog */}
    <img src="public/img/2077753281.jpg" alt="" width="200px"/>
    <h2>Noya</h2>
      <p>Breed: Shihtzu Terrier Mix</p>
      <p>Age: 3 years</p>
      <p className="additional--text">Noya is a sweet and playful mixed breed dog <br/>who is eagerly waiting to find his forever home.<br/> He is a medium-sized dog with a short and shiny <br/>coat that is easy to maintain.<br/> Noya is a friendly and outgoing dog who loves to spend <br/>time with people and enjoys attention and affection.<br/> He is also very active and enjoys going for walks,<br/> playing fetch, and exploring his surroundings. <br/>Noya is an intelligent dog and responds well to training,<br/> making his a great companion for an active family who <br/>can provide his with plenty of exercise and stimulation. <br/>If you're looking for a loyal and loving companion,<br/> Noya might be the perfect fit for you!</p>
      {/* Add more information here */}
  <button className="close-btn" onClick={() => setShowPopup(false)}>
  ❌
  </button>
</div>

        <div class="cardContainer" id="cardC">
        <div class="card">
                <a href="#" onClick={() => setShowPopup(true)}>
                <img src="public/img/2077753281.jpg" alt=""/>
                <h3>Noya</h3>
                <p><strong>Age:</strong> 3  years old</p>
                <p><strong>Breed:</strong> Shihtzu Terrier Mix</p>
                <button class="heart-btn">
                <i class="fa fa-heart">
                </i></button>
                </a>
             
            </div>
            </div>

            <div class="cardContainer" id="cardC">
            <div class="card">
                <a href="#" onClick={() => setShowPopup(true)}>
                <img src="public/img/2077753281.jpg" alt=""/>
                <h3>Noya</h3>
                <p><strong>Age:</strong> 3  years old</p>
                <p><strong>Breed:</strong> Shihtzu Terrier Mix</p>
                <button class="heart-btn">
                <i class="fa fa-heart">
                </i></button>
                </a>
             
            </div>
            </div>

            <div class="cardContainer" id="cardC">
            <div class="card">
                <a href="#" onClick={() => setShowPopup(true)}>
                <img src="public/img/2077753281.jpg" alt=""/>
                <h3>Noya</h3>
                <p><strong>Age:</strong> 3  years old</p>
                <p><strong>Breed:</strong> Shihtzu Terrier Mix</p>
                <button class="heart-btn">
                <i class="fa fa-heart">
                </i></button>
                </a>
             
            </div>
            </div>

            <div class="cardContainer" id="cardC">
            <div class="card">
                <a href="#" onClick={() => setShowPopup(true)}>
                <img src="public/img/2077753281.jpg" alt=""/>
                <h3>Noya</h3>
                <p><strong>Age:</strong> 3  years old</p>
                <p><strong>Breed:</strong> Shihtzu Terrier Mix</p>
                <button class="heart-btn">
                <i class="fa fa-heart">
                </i></button>
                </a>
               
               
            </div>
            </div>
   
    </div>
    

    )
}