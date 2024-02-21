/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  const excuse = document.querySelector("#excuse");

  // functions
  const generateText = (_who, _action, _what, _when) => {
    // _who, _action, _what, _when -> type array

    const whoSelected = _who[Math.floor(Math.random() * _who.length)];
    const actionSelected = _action[Math.floor(Math.random() * _action.length)];
    const whatSelected = _what[Math.floor(Math.random() * _what.length)];
    const whenSelected = _when[Math.floor(Math.random() * _when.length)];

    // syntax
    // 0- Who action what when.
    // 1- When who action what.
    // return string
    return Math.floor(Math.random() * 2)
      ? `${toUpperCase(
          whoSelected
        )} ${actionSelected} ${whatSelected} ${whenSelected}.`
      : `${toUpperCase(
          whenSelected
        )} ${whoSelected} ${actionSelected} ${whatSelected}.`;
  };

  excuse.innerHTML = generateText(who, action, what, when);
};
