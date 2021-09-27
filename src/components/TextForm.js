import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  const handleUpClick = () => {
    let upText = text.toUpperCase();
    setText(upText);
  };
  const handleLowClick = () => {
    let lowText = text.toLowerCase();
    setText(lowText);
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };
  const handleCopy = () => {
    let text = document.getElementById("textbox");
    text.select();
    navigator.clipboard.writeText(text.value);
  };

  return (
    <>
      <div className='container'>
        <h2>{props.heading}</h2>
        <div className='mb-3'>
          <label htmlFor='exampleFormControlTextarea1' className='form-label'>
            Text Box
          </label>
          <textarea
            className='form-control bg-dark text-light mt-2'
            value={text}
            onChange={handleOnChange}
            id='textbox'
            rows='8'
            placeholder='Type here...'
          ></textarea>
        </div>

        <button className='btn btn-primary mx-1' onClick={handleUpClick}>
          UPPERCASE CONVERTER
        </button>
        <button className='btn btn-primary mx-1' onClick={handleLowClick}>
          lowercase converter
        </button>
        <button className='btn btn-primary mx-1' onClick={handleExtraSpaces}>
          Extra Spaces Remover
        </button>
        <button className='btn btn-primary mx-1' onClick={handleLowClick}>
          lowercase converter
        </button>
        <button className='btn btn-primary mx-1' onClick={handleCopy}>
          Copy Text
        </button>

        <div class='d-flex mt-4 text-{myStyle}'>
          <div>
            <p class='lead'>Volume</p>
            <input
              type='range'
              min='0'
              max='1'
              value='1'
              step='0.1'
              id='volume'
            />
            <span id='volume-label' class='ms-2'>
              1
            </span>
          </div>
          <div class='mx-5'>
            <p class='lead'>Rate</p>
            <input
              type='range'
              min='0.1'
              max='10'
              value='1'
              id='rate'
              step='0.1'
            />
            <span id='rate-label' class='ms-2'>
              1
            </span>
          </div>
          <div>
            <p class='lead'>Pitch</p>
            <input
              type='range'
              min='0'
              max='2'
              value='1'
              step='0.1'
              id='pitch'
            />
            <span id='pitch-label' class='ms-2'>
              1
            </span>
          </div>
        </div>
        <div class='mb-5'>
          <button id='start' class='btn btn-success mt-5 me-3'>
            Start
          </button>
          <button id='pause' class='btn btn-warning mt-5 me-3'>
            Pause
          </button>
          <button id='resume' class='btn btn-info mt-5 me-3'>
            Resume
          </button>
          <button id='cancel' class='btn btn-danger mt-5 me-3'>
            Cancel
          </button>
        </div>
      </div>

      <div className='container my-4'>
        <h3>Text Analysis</h3>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <h3>Time Taken</h3>
        <p>{0.008 * text.split(" ").length} minutes to read</p>
        <h3>Preview</h3>
        <p>{text}</p>
      </div>
    </>
  );
}
