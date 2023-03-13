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


function createSection2() {
    let section2 = document.createElement("div");
    let section2Content = document.createElement("div");
    let leftSide = document.createElement("div");
    let leftSideTitleDiv = document.createElement("div");
    let leftSideTitle = document.createElement("div");
    let leftSideTitle2 = document.createElement("div");

    let leftSideText = document.createElement("div");
    let paragraph1 = document.createElement("p");
    let paragraph2 = document.createElement("p");

    let rightSide = document.createElement("div");
    let img1 = document.createElement("img");
    let img2 = document.createElement("img");

    img1.src = "./be92fbb6cb9b04656d9b.jpg";
    img2.src = "./cb9a96b04a29f4e5829e.jpg";


    leftSideTitle.innerText = "Discover"
    leftSideTitle2.innerText = "Our Story"

    paragraph1.innerText = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aperiam, consequatur dolores\n" +
        "                       molestiae quaerat quisquam quos. Consequatur esse excepturi impedit minus possimus quo repellat\n" +
        "                   tempore!"

    paragraph2.innerText = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquid amet atque enim eos et\n" +
        "                       illum numquam sunt voluptatem? Aspernatur consectetur dignissimos laborum soluta? Aspernatur\n" +
        "                       atque, consequuntur dignissimos dolor doloribus ducimus eligendi esse est expedita fugiat fugit>\n" +
        "                       ipsa labore libero minima molestiae nemo optio quae quaerat quibusdam quod ratione tempora\n" +
        "                    voluptatum? Amet autem doloremque odit optio, quisquam rerum tempore voluptas?"


    leftSideTitleDiv.appendChild(leftSideTitle);
    leftSideTitleDiv.appendChild(leftSideTitle2);
    leftSide.appendChild(leftSideTitleDiv);

    leftSideText.appendChild(paragraph1);
    leftSideText.appendChild(paragraph2);
    leftSide.appendChild(leftSideText);

    rightSide.appendChild(img1);
    rightSide.appendChild(img2);


    section2Content.appendChild(leftSide);
    section2Content.appendChild(rightSide);

    section2.appendChild(section2Content);

    section2.classList.add("section-2");
    section2Content.classList.add("section-2-content");
    leftSide.classList.add("left-side");
    rightSide.classList.add("right-side")
    return section2;
}


function createSection3() {
    let section3 = document.createElement("div");
    let section3TitleContainer = document.createElement("div");
    let section3Title1 = document.createElement("div");
    let section3Title2 = document.createElement("div");

    let section3Images = document.createElement("div");

    let img1 = document.createElement("img");
    let img2 = document.createElement("img");
    let img3 = document.createElement("img");
    let img4 = document.createElement("img");
    let img5 = document.createElement("img");
    let img6 = document.createElement("img");

    img1.src = "./be92fbb6cb9b04656d9b.jpg";
    img2.src = "./61e4c40dcd1384d48878.jpg";
    img3.src = "./fd117713b9d4470383c2.jpg";
    img4.src = "./101079855cc9f5d1b3c0.jpg";
    img5.src = "./f0a4ee7835343e4c4d13.jpg";
    img6.src = "./5949894e6aee6ae648c1.jpg";


    section3Title1.innerText = "Instagram";
    section3Title2.innerText = "Happenings";

    section3TitleContainer.appendChild(section3Title1);
    section3TitleContainer.appendChild(section3Title2);

    section3Images.appendChild(img1);
    section3Images.appendChild(img2);
    section3Images.appendChild(img3);
    section3Images.appendChild(img4);
    section3Images.appendChild(img5);
    section3Images.appendChild(img6);

    section3.classList.add("section-3");
    section3Images.classList.add("section-3-images");
    section3TitleContainer.classList.add("section-3-title-container");


    section3.appendChild(section3TitleContainer);
    section3.appendChild(section3Images);

    return section3;
}

contentDiv.appendChild(createHeader());
contentDiv.appendChild(createSection1());
contentDiv.appendChild(createSection2());
contentDiv.appendChild(createSection3());

document.body.appendChild(contentDiv);


// document.body.appendChild(createSection2());




