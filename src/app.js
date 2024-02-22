/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  const who = [
    "the dog",
    "my grandma",
    "his turtle",
    "my bird",
    "the neighbor's cat",
    "a mischievous squirrel",
    "my imaginary friend",
    "a swarm of angry bees",
    "the sleepwalking mailman",
    "my rebellious goldfish",
    "a ghost from the attic",
    "a disgruntled pigeon",
    "my hyperactive hamster",
    "a horde of escaped hamsters"
  ];
  const action = [
    "ate",
    "peed",
    "crushed",
    "broke",
    "stole",
    "hid",
    "rearranged",
    "covered in glitter",
    "used as a trampoline",
    "disguised as a dinosaur",
    "launched into space",
    "taught to speak French",
    "accidentally cloned",
    "dyed a questionable color"
  ];
  const what = [
    "my homework",
    "the keys",
    "the car",
    "my sanity",
    "the remote control",
    "my lucky socks",
    "the instruction manual",
    "my sense of direction",
    "the last cookie",
    "my collection of rare stamps",
    "the Wi-Fi password",
    "my favorite potted plant",
    "the meaning of life"
  ];
  const when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying",
    "on my birthday",
    "during the big presentation",
    "in the middle of my online exam",
    "just as I sat down to relax",
    "while I was trying to nap",
    "at the worst possible moment",
    "when no one was looking",
    "on a full moon",
    "in the blink of an eye",
    "after drinking expired milk"
  ];

  // elements
  const buttom = document.querySelector("#img-buttom");
  const excuse = document.querySelector("#excuse");

  // functions
  const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);

  const addEventListener = () => {
    const spanWho = document.querySelector("#who");
    const spanAction = document.querySelector("#action");
    const spanWhat = document.querySelector("#what");
    const spanWhen = document.querySelector("#when");

    spanWho.addEventListener("click", function() {
      let capitalized = false;
      if (Object.values(spanWho.attributes).length == 2) {
        capitalized = true;
      }
      spanWho.textContent = capitalized
        ? capitalize(generateText(who))
        : generateText(who);
    });
    spanWhen.addEventListener("click", function() {
      let capitalized = false;
      if (Object.values(spanWhen.attributes).length == 2) {
        capitalized = true;
      }
      spanWhen.textContent = capitalized
        ? capitalize(generateText(when))
        : generateText(when);
    });
    spanAction.addEventListener("click", function() {
      spanAction.textContent = generateText(action);
    });
    spanWhat.addEventListener("click", function() {
      spanWhat.textContent = generateText(what);
    });
  };

  const generateText = array => array[Math.floor(Math.random() * array.length)];

  const mountAllHTML = ({ _who, _action, _what, _when }) => {
    // syntax
    // 0- Who action what when.
    // 1- When who action what.
    // return string
    if (Math.floor(Math.random() * 2)) {
      excuse.innerHTML = `
        <span id="who" capitalized>${capitalize(generateText(_who))}</span>
        <span id="action">${generateText(_action)}</span>
        <span id="what">${generateText(_what)}</span>
        <span id="when">${generateText(_when)}</span>
        <span>.</span>
      `;
    } else {
      excuse.innerHTML = `
        <span id="when" capitalized>${capitalize(generateText(_when))}</span>
        <span id="who">${generateText(_who)}</span>
        <span id="action">${generateText(_action)}</span>
        <span id="what">${generateText(_what)}</span>
        <span>.</span>
      `;
    }

    addEventListener();
  };

  // listeners
  buttom.addEventListener("click", function() {
    mountAllHTML({
      _who: who,
      _action: action,
      _what: what,
      _when: when
    });
  });

  // on mounted
  mountAllHTML({
    _who: who,
    _action: action,
    _what: what,
    _when: when
  });
};
