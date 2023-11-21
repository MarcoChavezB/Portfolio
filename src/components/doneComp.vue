<template>
    <label class="container">
      <input checked="true" type="checkbox">
      <div class="checkmark"></div>
    </label>
  </template>
  
  <style scoped>
      .container input {
      position: absolute;
      opacity: 0;
      cursor: pointer;
      height: 0;
      width: 0;
    }
  
    .container {
      display: block;
      position: relative;
      cursor: pointer;
      font-size: 1rem;
      user-select: none;
    }
  
    /* Create a custom checkbox */
    .checkmark {
      --clr: #0B6E4F;
      position: relative;
      top: 0;
      left: 0;
      height: 1.3em;
      width: 1.3em;
      background-color: #ccc;
      border-radius: 50%;
      transition: 300ms;
    }
  
    .container input:checked ~ .checkmark {
      background-color: var(--clr);
      border-radius: .5rem;
      animation: pulse 2s ease-in-out infinite; 
    }
  
    .checkmark:after {
      content: "";
      position: absolute;
      display: none;
    }
  
    /* Show the checkmark when checked */
    .container input:checked ~ .checkmark:after {
      display: block;
    }
  
    /* Style the checkmark/indicator */
    .container .checkmark:after {
      left: 0.45em;
      top: 0.25em;
      width: 0.25em;
      height: 0.5em;
      border: solid #E0E0E2;
      border-width: 0 0.15em 0.15em 0;
      transform: rotate(45deg);
    }
  
    @keyframes pulse {
      0% {
        box-shadow: 0 0 0 #0B6E4F90;
      }
      75% {
        box-shadow: 0 0 0 10px #0B6E4F60;
      }
  
      100% {
        box-shadow: 0 0 0 13px #0B6E4F30;
        rotate: 0;
      }
    }
  </style>
  