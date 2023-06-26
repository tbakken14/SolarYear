import { Planet } from './planet.js';
import { Age } from './age.js';
import './css/styles.css';

const h2Current = document.getElementById("current");
const currentAge = new Age(51);
h2Current.append(currentAge.years + " years old");
addList(h2Current, " years old.", (planet) => currentAge.convertAgeToPlanetYears(planet));

const h2Past = document.getElementById("past");
const pastAge = new Age(43);
h2Past.append(pastAge.years + " years old");
addList(h2Past, " years have passed.", (planet) => currentAge.ageDifferenceToPlanetYears(pastAge, planet));

const h2Future = document.getElementById("future");
const futureAge = new Age(78);
h2Future.append(futureAge.years + " years old");
addList(h2Future, " years have yet to pass.", (planet) => -currentAge.ageDifferenceToPlanetYears(futureAge, planet));

function addList(parent, text, fn) {
    let ul = document.createElement("ul");
    parent.append(ul);
    Object.keys(Planet).forEach((e) => {
        let li = document.createElement("li");
        ul.append(li);
        li.append(fn(Planet[e]).toFixed(2) + " " + e + text);
    });
}