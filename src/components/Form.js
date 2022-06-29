import React from "react";
import { useState } from "react";
import data from "./memesdata";

function Form() {
    const [memeImage, setMemeImage] = useState({
        topText: "",
        bottomText: "",
        randomImage: "https://i.imgflip.com/1bij.jpg",
    });

    const [allMemeImages, setAllMemeImages] = useState(data);

    function getMemeImage() {
        const i = Math.floor(Math.random() * allMemeImages.data.memes.length);
        const url = allMemeImages.data.memes[i].url;
        setMemeImage((prevMeme) => ({
            ...prevMeme,
            randomImage: url,
        }));
    }

    return (
        <div className="form">
            <input type="text" placeholder="Top Text"></input>
            <input type="text" placeholder="Bottom Text"></input>
            <button onClick={getMemeImage}>Get a New meme image </button>
            <img
                src={memeImage.randomImage}
                className="meme--image"
                alt=""
            ></img>
        </div>
    );
}

export default Form;
