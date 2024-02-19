import './style.css';

import { homePage } from './model/home';
import { aboutPage } from './model/about';
import { menuPage } from './model/menu';

const content = document.querySelector('#content')
const homeButton = document.querySelector('#home');
const menuButton = document.querySelector('#menu');
const aboutButton = document.querySelector('#about');

homeButton.addEventListener('click',function(){
    console.log("home clicked");
    content.innerHTML = '';
    homePage();
});
menuButton.addEventListener('click',function(){
    console.log("menu clicked");
    content.innerHTML = '';
    menuPage();
});
aboutButton.addEventListener('click',function(){
    console.log("about clicked");
    content.innerHTML = '';
    aboutPage();
});
console.log("test running");
homePage();