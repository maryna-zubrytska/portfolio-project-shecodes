function showWeatherProject(event) {
    event.preventDefault();

    let projectCardHTML = `
    <div class="col-md-1"></div>
    <div class="col-md-2 project-card">
        <a href="https://kaleidoscopic-queijadas-82d56a.netlify.app/" target="_blank">
            <img class="img-fluid project-pic mob" src="/img/project-weather-mobile.jpg" alt="">
        </a>
    </div>
    <div class="col-md-7 project-card">
        <a href="https://kaleidoscopic-queijadas-82d56a.netlify.app/" target="_blank">
            <img class="img-fluid project-pic" src="/img/weather-app-desktop.png" alt="">
        </a>
    </div>
    `;

    document.querySelector("#row-for-project-screens").innerHTML = projectCardHTML;
}

function showCroissantProject(event) {
    event.preventDefault();

    let projectCardHTML = `
    <div class="col-md-1"></div>
    <div class="col-md-2 project-card">
        <a href="https://friendly-dasik-0c9df0.netlify.app/" target="_blank">
            <img class="img-fluid project-pic mob" src="/img/croissant-app-mobile.jpg" alt="">
        </a>
    </div>
    <div class="col-md-7 project-card">
        <a href="https://friendly-dasik-0c9df0.netlify.app/" target="_blank">
            <img class="img-fluid project-pic" src="/img/croissant-app-desktop.png" alt="">
        </a>
    </div>
    `;

    document.querySelector("#row-for-project-screens").innerHTML = projectCardHTML;
}

function showSPortfolio(event) {
    event.preventDefault();

    let projectCardHTML = `
    <div class="col-md-1"></div>
    <div class="col-md-2 project-card">
        <a href="https://shimmering-clafoutis-510917.netlify.app/" target="_blank">
            <img class="img-fluid project-pic mob" src="/img/sPortfolio-app-mobile.jpg" alt="">
        </a>
    </div>
    <div class="col-md-7 project-card">
        <a href="https://shimmering-clafoutis-510917.netlify.app/" target="_blank">
            <img class="img-fluid project-pic" src="/img/sPortfolio-app-desktop.png" alt="">
        </a>
    </div>
    `;

    document.querySelector("#row-for-project-screens").innerHTML = projectCardHTML;
}

let projectWeatherButton = document.querySelector("#button-projects-weather");
projectWeatherButton.addEventListener("click", showWeatherProject);

let projectCroissantButton = document.querySelector("#button-projects-croissant");
projectCroissantButton.addEventListener("click", showCroissantProject);

let sPortfolioButton = document.querySelector("#button-projects-sPortfolio");
sPortfolioButton.addEventListener("click", showSPortfolio);