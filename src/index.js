import './style.css'
import _ from 'lodash';

let contentDiv = document.createElement("div");
contentDiv.classList.add('Content');

function createHeader() {

    let headerDiv = document.createElement("header");
    let headerNameDiv = document.createElement("div");
    let headerLinkDiv = document.createElement("ul");
    let headerLinkOne = document.createElement('li')
    let headerLinkTwo = document.createElement('li')


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


    return headerDiv
}

function createSection1() {


    let section1Div = document.createElement("div");
    let bookingContainerDiv = document.createElement("div");
    let welcomeTextDiv = document.createElement("div");
    let bookingTitleDiv = document.createElement("div");
    let reserveTableTextDiv = document.createElement("div");
    let reserveButton = document.createElement("button");

    section1Div.classList.add("section-1");
    bookingContainerDiv.classList.add("booking-container");
    welcomeTextDiv.classList.add("welcome-text-container");
    bookingTitleDiv.classList.add("booking-title-div");
    reserveTableTextDiv.classList.add("reserve-table-text");
    reserveButton.classList.add("reserve-button");

    welcomeTextDiv.innerText = "Welcome";
    bookingTitleDiv.innerText = "Waffles 101";
    reserveTableTextDiv.innerText = "Reserve A Table";
    reserveButton.innerText = "Book Now";

    reserveTableTextDiv.appendChild(reserveButton);

    bookingContainerDiv.appendChild(welcomeTextDiv);
    bookingContainerDiv.appendChild(bookingTitleDiv);
    bookingContainerDiv.appendChild(reserveTableTextDiv);
    section1Div.appendChild(bookingContainerDiv);

    return section1Div;
}

contentDiv.appendChild(createHeader());
contentDiv.appendChild(createSection1());
document.body.appendChild(contentDiv);




