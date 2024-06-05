// /*=============== SEARCH ===============*/
// const searchButton = document.getElementById('search-button'),
//       searchClose = document.getElementById('search-close'),
//       searchContent = document.getElementById('search-content')

// /*====== SEARCH SHOW ======*/
// /* Validate if constant exists */
// if(searchButton){
//     searchButton.addEventListener('click',() =>{
//         searchContent.classList.add('show-search')
//     })
// }

// /*====== SEARCH HIDDEN ======*/
// /* Validate if constant exists */
// if(searchClose){
//     searchClose.addEventListener('click', ()=>{
//         searchContent.classList.remove('show-search')
//     })
// }
// Массив объектов с фразами


// /*=============== SEARCH ===============*/


let phrases = [
    { phrase: "At aryltu", page: "At.html" },
    { phrase: "Tonnyñ ışkı bauyndai", page: "Tonnyn.html"},
    { phrase: "Töbesı kökke jetu", page: "Tobesi.html" },
    { phrase: "Eñbegı janu", page: "Enbegi.html"  },
    { phrase: "Baiyz tappau", page: "Baiyz.html" },
    { phrase: "Jüregı tas töbesıne şyğu", page: "Juregi.html" },
    { phrase: "Aiağy aiağyna jūqpau", page: "Aiagy.html" },
    { phrase: "Ekı iyğyna ekı kısı mıngendei", page: "Eki.html" },
    { phrase: "Talağy tars airylu", page: "Talagy.html" },
    { phrase: "Ağaş atqa mıngızu", page: "Agas.html"  }
];

function searchByPrefix(prefix) {
    let results = [];
    for (let i = 0; i < phrases.length; i++) {
        let phrase = phrases[i].phrase.toLowerCase();
        if (phrase.startsWith(prefix.toLowerCase())) {
            results.push(phrases[i]);
        }
    }
    return results;

}

const searchButton = document.getElementById('search-button'),
    searchClose = document.getElementById('search-close'),
    searchContent = document.getElementById('search-content'),
    searchInput = document.querySelector('.search__input'),
    searchResults = document.getElementById('search-results');

/*====== SEARCH SHOW ======*/
/* Validate if constant exists */
if (searchButton) {
    searchButton.addEventListener('click', () => {
        searchContent.classList.add('show-search');
        searchInput.focus();
    })
}

/*====== SEARCH HIDDEN ======*/
/* Validate if constant exists */
if (searchClose) {
    searchClose.addEventListener('click', () => {
        searchContent.classList.remove('show-search');
        searchInput.value = '';
        searchResults.textContent = '';
    })
}

/*====== SEARCH FUNCTIONALITY ======*/
searchInput.addEventListener('input', () => {
    let prefix = searchInput.value.trim();
    let searchResultsArray = searchByPrefix(prefix);
    searchResults.textContent = '';
    if (searchResultsArray.length > 0) {
        searchResultsArray.forEach(result => {
            let resultElement = document.createElement('p');
            resultElement.textContent = result.phrase;
            resultElement.addEventListener('click', () => {
                window.location.href = result.page || '#';
            });
            searchResults.appendChild(resultElement);
        });
    } else {
        let noResultsElement = document.createElement('p');
        noResultsElement.textContent = '';
        searchResults.appendChild(noResultsElement);
    }


    if (prefix === '') {
        searchResults.textContent = '';
    }
});


/*=============== SEARCH 2 ===============*/

let home__phrases = [
    { phrase: "At aryltu", page: "At.html" },
    { phrase: "Tonnyñ ışkı bauyndai", page: "Tonnyn.html"},
    { phrase: "Töbesı kökke jetu", page: "Tobesi.html" },
    { phrase: "Eñbegı janu", page: "Enbegi.html"  },
    { phrase: "Baiyz tappau", page: "Baiyz.html" },
    { phrase: "Jüregı tas töbesıne şyğu", page: "Juregi.html" },
    { phrase: "Aiağy aiağyna jūqpau", page: "Aiagy.html" },
    { phrase: "Ekı iyğyna ekı kısı mıngendei", page: "Eki.html" },
    { phrase: "Talağy tars airylu", page: "Talagy.html" },
    { phrase: "Ağaş atqa mıngızu", page: "Agas.html"  }
];

function searchByPrefix(prefix) {
    return home__phrases.filter(phrase => phrase.phrase.toLowerCase().startsWith(prefix.toLowerCase()));
}

const searchhomeInput = document.querySelector('.home__search__input');
const searchhomeResults = document.getElementById('searchhome-results');
const homeSearchContent = document.getElementById('home__search-content');
const blurOverlay = document.getElementById('blur-overlay');

searchhomeInput.addEventListener('input', () => {
    let prefix = searchhomeInput.value.trim();
    let searchResultsArray = searchByPrefix(prefix);
    displaySearchResults(searchResultsArray);

    if (prefix === '') {
        searchhomeResults.innerHTML = '';
        homeSearchContent.classList.remove('home__show-search');
        blurOverlay.classList.remove('show-blur');
    } else {
        homeSearchContent.classList.add('home__show-search');
        blurOverlay.classList.add('show-blur');
    }
});

function displaySearchResults(results) {
    searchhomeResults.innerHTML = '';

    if (results.length > 0) {
        results.forEach(result => {
            let resultElement = document.createElement('p');
            resultElement.textContent = result.phrase;
            resultElement.addEventListener('click', () => {
                window.location.href = result.page;
            });
            searchhomeResults.appendChild(resultElement);
        });
    } else {
        let noResultsElement = document.createElement('p');
        noResultsElement.textContent = '';
        searchhomeResults.appendChild(noResultsElement);
    }
}


/*=============== ADD SHADOW HEADER ===============*/

const shadowHeader = () => {
    const header = document.getElementById('header')
    window.scrollY >= 50 ? header.classList.add('shadow-header')
        : header.classList.remove('shadow-header')
}
window.addEventListener('scroll', shadowHeader)


/*=============== HOME SWIPER ===============*/

let swiperHome = new Swiper('.home__swiper', {
    loop: true,
    spaceBetween: -34,
    grabCursor: true,
    slidesPerView: 'auto',
    centeredSlides: 'auto',

    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },

    breakpoints: {
        1220: {
            spaceBetween: -32,
        }
    }
});

/*=============== SHOW SCROLL UP ===============*/

const scrollUp = () => {

    const scrollUp = document.getElementById('scroll-up')
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
        : scrollUp.classList.remove('show-scroll')

}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTION ACTIVE LINK ===============*/

const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
    const scrollDown = window.scrollY

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop = 58,
            sectionId = current.getAttribute('id'),
            sectionClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

        if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
            sectionClass.classList.add('active-link')
        }
        else {
            sectionClass.classList.remove('active-link')
        }
    })
}

window.addEventListener('scroll', scrollActive)

