import React from "react";
import data from "./memesdata";

function Form() {
    const [memeImage, setMemeImage] = React.useState("");

    function getMemeImage() {
        const i = Math.floor(Math.random() * data.data.memes.length);
        const url = data.data.memes[i].url;
        console.log(url);
        setMemeImage(url);
    }

    return (
        <div className="form">
            <input type="text" placeholder="Top Text"></input>
            <input type="text" placeholder="Bottom Text"></input>
            <button onClick={getMemeImage}>Get a New meme image </button>
            <img src={memeImage} className="meme--image" alt=""></img>
        </div>
    );
}

export default Form;
