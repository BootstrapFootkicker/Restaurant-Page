import './style.css'
import _ from 'lodash';

function createHeader() {
    let contentDiv = document.createElement("div");
    let headerDiv = document.createElement("header");
    let headerNameDiv = document.createElement("div");
    let headerLinkDiv = document.createElement("ul");
    let headerLinkOne = document.createElement('li')
    let headerLinkTwo = document.createElement('li')

    contentDiv.classList.add('Content');
    headerDiv.classList.add('header-container');
    headerNameDiv.classList.add('name-div');
    headerLinkDiv.classList.add('header-links');
    

    headerNameDiv.innerText = 'WAFFLES 101';
    headerLinkOne.innerText = 'OUR MENU';
    headerLinkTwo.innerText = 'LOCATIONS';


    headerLinkDiv.appendChild(headerLinkOne);
    headerLinkDiv.appendChild(headerLinkTwo);
    headerDiv.appendChild(headerNameDiv);
    headerDiv.appendChild(headerLinkDiv)

    contentDiv.appendChild(headerDiv);
    return contentDiv
}

document.body.appendChild(createHeader());

