// -------------T Y P I N G --------------

const spnText = document.querySelector('.text');
const spnCursor = document.querySelector('.cursor');
const txt = ['Hello World!', 'My name is Joanna Biernat', `I'm looking for a job as a Junior Frontend Developer `];

let word = 0;
let letter = -15;

const addLetter = () => {

    if (letter >= 0) {
        spnText.textContent += txt[word][letter];
    }
    letter++;
    if (letter === txt[word].length) {
        word++;

        if (word === txt.length) return;

        return setTimeout(() => {
            letter = -15;
            spnText.textContent = "";
            addLetter()
        }, 2000)

    }
    setTimeout(addLetter, 50)
}


addLetter(); //pierwsze wywołanie


// Animacja kursora 
const cursorAnimation = () => {
    spnCursor.classList.toggle('active');
}
setInterval(cursorAnimation, 400);





const Names = ["Azor", "Puszek", "Pusia", "Misiek", "Muszka", "Ares", "Bonifacy", "Fafik"];

const btnAdd = document.querySelector('button.add');
const input = document.querySelector('.drawing input');
const btnReset = document.querySelector(".clean")
const btnShow = document.querySelector(".showName")
const h1 = document.querySelector(".result")
const btnOptions = document.querySelector(".showOptions")

const addName = (e) => {
    e.preventDefault()
    if (input.value.length) {
        const text = input.value
        Names.push(text);
        console.log(Names)
        alert(`Dodałeś imię: ${text}`)
        input.value = "";
    }
}

btnAdd.addEventListener("click", addName)

const clearNames = (e) => {
    e.preventDefault()
    Names.length = 0;
    h1.textContent = "";

}
btnReset.addEventListener("click", clearNames)


const showName = () => {
    h1.textContent = "";
    const index = Math.floor(Math.random() * Names.length)
    h1.textContent = Names[index];
}

btnShow.addEventListener("click", showName)

const showOptions = () => {
    if (Names.length) {
        const sortedNames = Names.sort()
        alert(`Imiona do wylosowania to:  ${sortedNames.join("---")}`)
    } else {
        alert("Nie ma zadnych imion do losowania")
    }
}

btnOptions.addEventListener("click", showOptions)


// SCROLLOWANIE

$(".clickToPortfolio").on("click", function () {
    $('body, html').animate({
        scrollTop: $('.portfolio').offset().top
    }, 2000)
})

// RAKIETA

$(function () {

    $(window).scroll(function () {
        if ($(window).scrollTop() > 600) {
            $('.scrollTopButton').addClass('show');
        } else {
            $('.scrollTopButton').removeClass('show');
        }
    });


    $('.scrollTopButton').click(function () {
        $('body, html').animate({
            scrollTop: 0
        }, 400, 'linear');
    });
});