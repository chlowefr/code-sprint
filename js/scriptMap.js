//--------------------------------------------------------------------------------------API MAP-------------------------------------------------------------------
//Affichage de la maps Milan 
mapboxgl.accessToken = 'pk.eyJ1IjoiZWxvZGxucyIsImEiOiJja25vZWo3OHIxYmI5MnVwZWZ5YWo4YXJzIn0.XUUs3rITuP1fUgVH9WL1wA';
var mapColor = 'mapbox://styles/elodlns/cknskkoxd0ft217l4vkatyrv7'

var map = new mapboxgl.Map({
    container: 'map-milan',
    style: mapColor,
    center: [9.184169361748996, 45.463537843482634],
    zoom: 13.5,
});

//Affichage de la maps Tokyo
mapboxgl.accessToken = 'pk.eyJ1IjoiZWxvZGxucyIsImEiOiJja25vZWo3OHIxYmI5MnVwZWZ5YWo4YXJzIn0.XUUs3rITuP1fUgVH9WL1wA';
var mapColor = 'mapbox://styles/elodlns/cknspi8uy0hew17o3ujzveby7'

var map = new mapboxgl.Map({
    container: 'map-tokyo',
    style: mapColor,
    center: [139.751846263455, 35.69493418404904],
    zoom: 13.5,
});


//Affichage de la maps Podgorica
mapboxgl.accessToken = 'pk.eyJ1IjoiZWxvZGxucyIsImEiOiJja25vZWo3OHIxYmI5MnVwZWZ5YWo4YXJzIn0.XUUs3rITuP1fUgVH9WL1wA';
var mapColor = 'mapbox://styles/elodlns/cknrg5h3m0rh717pu3nxdwafz'

var map = new mapboxgl.Map({
    container: 'map-podgorica',
    style: mapColor,
    center: [19.250200183600697, 42.42293991531005],
    zoom: 13.5,
});




//--------------------------------------------------------------------------------------METEO-------------------------------------------------------------------

// meteo-milan
fetch(`http://api.openweathermap.org/data/2.5/weather?q=Milan&lang=it&units=metric&appid=2724ad685d174d7f65e18b2783b2a26e`)
    .then(response => response.json()) //voir les donnée dans la console
    .then(meteoMilanDisplay) // retourner data

function meteoMilanDisplay(data) {
    console.log(data)
    let meteoDisplayHTML = document.getElementById("container-meteo-milan")
    meteoDisplayHTML.innerHTML = `
            <h2 class="meteo-name">Singanshina</h2>
            <p class="meteo-temp"> ${data.main.temp}°C</p>
            <p class="meteo-statu"> ${data.weather[0].main} </p>
            `
}

// meteo-tokyo
fetch(`http://api.openweathermap.org/data/2.5/weather?q=Tokyo&lang=fr&units=metric&appid=2724ad685d174d7f65e18b2783b2a26e`)
    .then(response => response.json()) //voir les donnée dans la console
    .then(meteoTokyoDisplay) // retourner data

function meteoTokyoDisplay(data) {
    console.log(data)
    let meteoDisplayHTML = document.getElementById("container-meteo-tokyo")
    meteoDisplayHTML.innerHTML = `
            <h2 class="meteo-name">Trost</h2>
            <p class="meteo-temp"> ${data.main.temp}°C</p>
            <p class="meteo-statu"> ${data.weather[0].main} </p>
            `

}

// meteo-podgorica
fetch(`http://api.openweathermap.org/data/2.5/weather?q=Podgorica&lang=fr&units=metric&appid=2724ad685d174d7f65e18b2783b2a26e`)
    .then(response => response.json()) //voir les donnée dans la console
    .then(meteoDisplay) // retourner data

function meteoDisplay(data) {
    console.log(data)
    let meteoDisplayHTML = document.getElementById("container-meteo-podgorica")
    meteoDisplayHTML.innerHTML = `
    <h2 class="meteo-name">Yalkell</h2>
    <p class="meteo-temp"> ${data.main.temp}°C</p>
    <p class="meteo-statu"> ${data.weather[0].main} </p>
    `
}




//--------------------------------------------------- Click changement couleur map + changement de meteo + position des perso et titans //---------------------------------------------------
//btn tokyo->milan
document.getElementById('chang-milan').addEventListener('click', event => {
    document.getElementById('chang-milan').style.backgroundColor = "#921D23"
    document.getElementById('chang-podgorica').style.backgroundColor = "#000"
    document.getElementById('chang-tokyo').style.backgroundColor = "#000"
    document.getElementById('btn-color').style.backgroundColor = "#921D23"
    document.getElementById('map-milan').style.zIndex = "992"
    document.getElementById('map-tokyo').style.zIndex = "991"
    document.getElementById('map-podgorica').style.zIndex = "990"
    document.getElementById('container-meteo-milan').style.display = "flex"
    document.getElementById('container-meteo-tokyo').style.display = "none"
    document.getElementById('container-meteo-podgorica').style.display = "none"
    //mikasa
    document.getElementById('charMikasa').style.top = "52vh"
    document.getElementById('charMikasa').style.left = "55vw"
    //Armin
    document.getElementById('charArmin').style.top = "53vh"
    document.getElementById('charArmin').style.left = "45vw"
    //Eren
    document.getElementById('charEren').style.top = "50vh"
    document.getElementById('charEren').style.left = "50vw"
    //Sacha
    document.getElementById('charSacha').style.top = "50vh"
    document.getElementById('charSacha').style.left = "87vw"
    //Zoe
    document.getElementById('charZoe').style.top = "23vh"
    document.getElementById('charZoe').style.left = "65vw"
    //Levi
    document.getElementById('charLevi').style.top = "50vh"
    document.getElementById('charLevi').style.left = "11vw"
    //Erwin
    document.getElementById('charErwin').style.top = "80vh"
    document.getElementById('charErwin').style.left = "23vw"
    //Connie
    document.getElementById('charConnie').style.top = "45vh"
    document.getElementById('charConnie').style.left = "83vw"
    //----------------------------TITAN---------------------------
    //Cuirassé
    document.getElementById('gif1-milan').style.top = "23vh"
    document.getElementById('gif1-milan').style.left = "45vw"
    //Singe
    document.getElementById('gif2-milan').style.top = "15vh"
    document.getElementById('gif2-milan').style.left = "80vw"
    //Coloss
    document.getElementById('gif3-milan').style.top = "75vh"
    document.getElementById('gif3-milan').style.left = "78vw"
    //Con
    document.getElementById('gif4-milan').style.top = "40vh"
    document.getElementById('gif4-milan').style.left = "28vw"


});
//btn milan->tokyo
document.getElementById('chang-tokyo').addEventListener('click', event => {
    document.getElementById('chang-milan').style.backgroundColor = "#000"
    document.getElementById('chang-podgorica').style.backgroundColor = "#000"
    document.getElementById('chang-tokyo').style.backgroundColor = "#E87878"
    document.getElementById('btn-color').style.backgroundColor = "#E87878"
    document.getElementById('map-milan').style.zIndex = "990"
    document.getElementById('map-tokyo').style.zIndex = "992"
    document.getElementById('map-podgorica').style.zIndex = "991"
    document.getElementById('container-meteo-tokyo').style.display = "flex"
    document.getElementById('container-meteo-milan').style.display = "none"
    document.getElementById('container-meteo-podgorica').style.display = "none"
    //mikasa
    document.getElementById('charMikasa').style.top = "77vh"
    document.getElementById('charMikasa').style.left = "85vw"
    //Armin
    document.getElementById('charArmin').style.top = "78vh"
    document.getElementById('charArmin').style.left = "75vw"
    //Eren
    document.getElementById('charEren').style.top = "75vh"
    document.getElementById('charEren').style.left = "80vw"
    //Sacha
    document.getElementById('charSacha').style.top = "50vh"
    document.getElementById('charSacha').style.left = "23vw"
    //Zoe
    document.getElementById('charZoe').style.top = "23vh"
    document.getElementById('charZoe').style.left = "40vw"
    //Levi
    document.getElementById('charLevi').style.top = "70vh"
    document.getElementById('charLevi').style.left = "15vw"
    //Erwin
    document.getElementById('charErwin').style.top = "45vh"
    document.getElementById('charErwin').style.left = "54vw"
    //Connie
    document.getElementById('charConnie').style.top = "45vh"
    document.getElementById('charConnie').style.left = "19vw"
    //----------------------------TITAN---------------------------
    //Cuirassé
    document.getElementById('gif1-milan').style.top = "12vh"
    document.getElementById('gif1-milan').style.left = "73vw"
    //Singe
    document.getElementById('gif2-milan').style.top = "73vh"
    document.getElementById('gif2-milan').style.left = "45vw"
    //Coloss
    document.getElementById('gif3-milan').style.top = "28vh"
    document.getElementById('gif3-milan').style.left = "70vw"
    //Con
    document.getElementById('gif4-milan').style.top = "60vh"
    document.getElementById('gif4-milan').style.left = "32vw"
});
//btn milan->pod
document.getElementById('chang-podgorica').addEventListener('click', event => {
    document.getElementById('chang-milan').style.backgroundColor = "#000"
    document.getElementById('chang-podgorica').style.backgroundColor = "#13455E"
    document.getElementById('chang-tokyo').style.backgroundColor = "#000"
    document.getElementById('btn-color').style.backgroundColor = "#103446"
    document.getElementById('map-milan').style.zIndex = "990"
    document.getElementById('map-tokyo').style.zIndex = "991"
    document.getElementById('map-podgorica').style.zIndex = "992"
    document.getElementById('container-meteo-podgorica').style.display = "flex"
    document.getElementById('container-meteo-milan').style.display = "none"
    document.getElementById('container-meteo-tokyo').style.display = "none"
    //mikasa
    document.getElementById('charMikasa').style.top = "77vh"
    document.getElementById('charMikasa').style.left = "25vw"
    //Armin
    document.getElementById('charArmin').style.top = "78vh"
    document.getElementById('charArmin').style.left = "15vw"
    //Eren
    document.getElementById('charEren').style.top = "75vh"
    document.getElementById('charEren').style.left = "20vw"
    //Sacha
    document.getElementById('charSacha').style.top = "85vh"
    document.getElementById('charSacha').style.left = "73vw"
    //Zoe
    document.getElementById('charZoe').style.top = "70vh"
    document.getElementById('charZoe').style.left = "43vw"
    //Levi
    document.getElementById('charLevi').style.top = "30vh"
    document.getElementById('charLevi').style.left = "75vw"
    //Erwin
    document.getElementById('charErwin').style.top = "45vh"
    document.getElementById('charErwin').style.left = "6vw"
    //Connie
    document.getElementById('charConnie').style.top = "80vh"
    document.getElementById('charConnie').style.left = "69vw"
    //----------------------------TITAN---------------------------
    //Cuirassé
    document.getElementById('gif1-milan').style.top = "48vh"
    document.getElementById('gif1-milan').style.left = "63vw"
    //Singe
    document.getElementById('gif2-milan').style.top = "20vh"
    document.getElementById('gif2-milan').style.left = "48vw"
    //Coloss
    document.getElementById('gif3-milan').style.top = "48vh"
    document.getElementById('gif3-milan').style.left = "12vw"
    //Con
    document.getElementById('gif4-milan').style.top = "20vh"
    document.getElementById('gif4-milan').style.left = "82vw"
});










//--------------------------------------------------------------------------------------API Blague---------------------------------------------------------------------

//Blague1
document.getElementById('charMikasa').addEventListener('click', event => {
    fetch('https://www.blagues-api.fr/api/type/dev/random ', {
        headers: {
            'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNDgxOTIyODkzNzE5MDExMzI4IiwibGltaXQiOjEwMCwia2V5IjoiTVZ5Uld4ekJTVmNEcG1PMkczNVhuUzlUTGx4SWxIOU81MlZVTWRtUWY4Q2ZPQUU4VnUiLCJjcmVhdGVkX2F0IjoiMjAyMS0wNC0yMlQyMDo1OTo0NCswMDowMCIsImlhdCI6MTYxOTEyNTE4NH0.n5KESLrqQOEpUruF7ROA2DRFyKJw3Zre0AdMICfG958
            `
        }
    })
        .then(response => response.json())
        .then(afficherblague)

    function afficherblague(data) {
        console.log(data)
        let afficherblagueHTML = document.getElementById("container-blague1")
        afficherblagueHTML.innerHTML = `
                <p class="joke-joke"> ${data.joke}</p>
                <p class="joke-answer"> ${data.answer} </p>
                `

    }
    // Au bout de X secondes, la notification disparaît
    setTimeout(() => {
        document.getElementById('container-blague1').style.display = 'none';
    }, 10000);
    setTimeout(() => {
        document.getElementById('container-blague1').style.display = 'flex';
    }, 1000);
})
//Blague 2
document.getElementById('charArmin').addEventListener('click', event => {
    fetch('https://www.blagues-api.fr/api/type/dev/random ', {
        headers: {
            'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNDgxOTIyODkzNzE5MDExMzI4IiwibGltaXQiOjEwMCwia2V5IjoiTVZ5Uld4ekJTVmNEcG1PMkczNVhuUzlUTGx4SWxIOU81MlZVTWRtUWY4Q2ZPQUU4VnUiLCJjcmVhdGVkX2F0IjoiMjAyMS0wNC0yMlQyMDo1OTo0NCswMDowMCIsImlhdCI6MTYxOTEyNTE4NH0.n5KESLrqQOEpUruF7ROA2DRFyKJw3Zre0AdMICfG958
            `
        }
    })
        .then(response => response.json())
        .then(afficherblague)

    function afficherblague(data) {
        console.log(data)
        let afficherblagueHTML = document.getElementById("container-blague2")
        afficherblagueHTML.innerHTML = `
        <p class="joke-joke"> ${data.joke}</p>
        <p class="joke-answer"> ${data.answer} </p>
        `

    }
    // Au bout de X secondes, la notification disparaît
    setTimeout(() => {
        document.getElementById('container-blague2').style.display = 'none';
    }, 10000);
    setTimeout(() => {
        document.getElementById('container-blague2').style.display = 'flex';
    }, 1000);
})
//Blague 3
document.getElementById('charEren').addEventListener('click', event => {
    fetch('https://www.blagues-api.fr/api/type/dev/random ', {
        headers: {
            'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNDgxOTIyODkzNzE5MDExMzI4IiwibGltaXQiOjEwMCwia2V5IjoiTVZ5Uld4ekJTVmNEcG1PMkczNVhuUzlUTGx4SWxIOU81MlZVTWRtUWY4Q2ZPQUU4VnUiLCJjcmVhdGVkX2F0IjoiMjAyMS0wNC0yMlQyMDo1OTo0NCswMDowMCIsImlhdCI6MTYxOTEyNTE4NH0.n5KESLrqQOEpUruF7ROA2DRFyKJw3Zre0AdMICfG958
            `
        }
    })
        .then(response => response.json())
        .then(afficherblague)

    function afficherblague(data) {
        console.log(data)
        let afficherblagueHTML = document.getElementById("container-blague3")
        afficherblagueHTML.innerHTML = `
        <p class="joke-joke"> ${data.joke}</p>
        <p class="joke-answer"> ${data.answer} </p>
        `

    }
    // Au bout de X secondes, la notification disparaît
    setTimeout(() => {
        document.getElementById('container-blague3').style.display = 'none';
    }, 10000);
    setTimeout(() => {
        document.getElementById('container-blague3').style.display = 'flex';
    }, 1000);
})
//Blague 4 
document.getElementById('charSacha').addEventListener('click', event => {
    fetch('https://www.blagues-api.fr/api/type/dev/random ', {
        headers: {
            'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNDgxOTIyODkzNzE5MDExMzI4IiwibGltaXQiOjEwMCwia2V5IjoiTVZ5Uld4ekJTVmNEcG1PMkczNVhuUzlUTGx4SWxIOU81MlZVTWRtUWY4Q2ZPQUU4VnUiLCJjcmVhdGVkX2F0IjoiMjAyMS0wNC0yMlQyMDo1OTo0NCswMDowMCIsImlhdCI6MTYxOTEyNTE4NH0.n5KESLrqQOEpUruF7ROA2DRFyKJw3Zre0AdMICfG958
            `
        }
    })
        .then(response => response.json())
        .then(afficherblague)

    function afficherblague(data) {
        console.log(data)
        let afficherblagueHTML = document.getElementById("container-blague4")
        afficherblagueHTML.innerHTML = `
        <p class="joke-joke"> ${data.joke}</p>
        <p class="joke-answer"> ${data.answer} </p>
        `

    }
    // Au bout de X secondes, la notification disparaît
    setTimeout(() => {
        document.getElementById('container-blague4').style.display = 'none';
    }, 10000);
    setTimeout(() => {
        document.getElementById('container-blague4').style.display = 'flex';
    }, 1000);
})
//Blague 5 
document.getElementById('charZoe').addEventListener('click', event => {
    fetch('https://www.blagues-api.fr/api/type/dev/random ', {
        headers: {
            'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNDgxOTIyODkzNzE5MDExMzI4IiwibGltaXQiOjEwMCwia2V5IjoiTVZ5Uld4ekJTVmNEcG1PMkczNVhuUzlUTGx4SWxIOU81MlZVTWRtUWY4Q2ZPQUU4VnUiLCJjcmVhdGVkX2F0IjoiMjAyMS0wNC0yMlQyMDo1OTo0NCswMDowMCIsImlhdCI6MTYxOTEyNTE4NH0.n5KESLrqQOEpUruF7ROA2DRFyKJw3Zre0AdMICfG958
            `
        }
    })
        .then(response => response.json())
        .then(afficherblague)

    function afficherblague(data) {
        console.log(data)
        let afficherblagueHTML = document.getElementById("container-blague5")
        afficherblagueHTML.innerHTML = `
        <p class="joke-joke"> ${data.joke}</p>
        <p class="joke-answer"> ${data.answer} </p>
        `

    }
    // Au bout de X secondes, la notification disparaît
    setTimeout(() => {
        document.getElementById('container-blague5').style.display = 'none';
    }, 10000);
    setTimeout(() => {
        document.getElementById('container-blague5').style.display = 'flex';
    }, 1000);
})
//Blague 6 
document.getElementById('charLevi').addEventListener('click', event => {
    fetch('https://www.blagues-api.fr/api/type/dev/random ', {
        headers: {
            'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNDgxOTIyODkzNzE5MDExMzI4IiwibGltaXQiOjEwMCwia2V5IjoiTVZ5Uld4ekJTVmNEcG1PMkczNVhuUzlUTGx4SWxIOU81MlZVTWRtUWY4Q2ZPQUU4VnUiLCJjcmVhdGVkX2F0IjoiMjAyMS0wNC0yMlQyMDo1OTo0NCswMDowMCIsImlhdCI6MTYxOTEyNTE4NH0.n5KESLrqQOEpUruF7ROA2DRFyKJw3Zre0AdMICfG958
            `
        }
    })
        .then(response => response.json())
        .then(afficherblague)

    function afficherblague(data) {
        console.log(data)
        let afficherblagueHTML = document.getElementById("container-blague6")
        afficherblagueHTML.innerHTML = `
        <p class="joke-joke"> ${data.joke}</p>
        <p class="joke-answer"> ${data.answer} </p>
        `

    }
    // Au bout de X secondes, la notification disparaît
    setTimeout(() => {
        document.getElementById('container-blague6').style.display = 'none';
    }, 10000);
    setTimeout(() => {
        document.getElementById('container-blague6').style.display = 'flex';
    }, 1000);
})
//Blague 7 
document.getElementById('charErwin').addEventListener('click', event => {
    fetch('https://www.blagues-api.fr/api/type/dev/random ', {
        headers: {
            'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNDgxOTIyODkzNzE5MDExMzI4IiwibGltaXQiOjEwMCwia2V5IjoiTVZ5Uld4ekJTVmNEcG1PMkczNVhuUzlUTGx4SWxIOU81MlZVTWRtUWY4Q2ZPQUU4VnUiLCJjcmVhdGVkX2F0IjoiMjAyMS0wNC0yMlQyMDo1OTo0NCswMDowMCIsImlhdCI6MTYxOTEyNTE4NH0.n5KESLrqQOEpUruF7ROA2DRFyKJw3Zre0AdMICfG958
            `
        }
    })
        .then(response => response.json())
        .then(afficherblague)

    function afficherblague(data) {
        console.log(data)
        let afficherblagueHTML = document.getElementById("container-blague7")
        afficherblagueHTML.innerHTML = `
        <p class="joke-joke"> ${data.joke}</p>
        <p class="joke-answer"> ${data.answer} </p>
        `

    }
    // Au bout de X secondes, la notification disparaît
    setTimeout(() => {
        document.getElementById('container-blague7').style.display = 'none';
    }, 10000);
    setTimeout(() => {
        document.getElementById('container-blague7').style.display = 'flex';
    }, 1000);
})
//Blague 8 
document.getElementById('charConnie').addEventListener('click', event => {
    fetch('https://www.blagues-api.fr/api/type/dev/random ', {
        headers: {
            'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNDgxOTIyODkzNzE5MDExMzI4IiwibGltaXQiOjEwMCwia2V5IjoiTVZ5Uld4ekJTVmNEcG1PMkczNVhuUzlUTGx4SWxIOU81MlZVTWRtUWY4Q2ZPQUU4VnUiLCJjcmVhdGVkX2F0IjoiMjAyMS0wNC0yMlQyMDo1OTo0NCswMDowMCIsImlhdCI6MTYxOTEyNTE4NH0.n5KESLrqQOEpUruF7ROA2DRFyKJw3Zre0AdMICfG958
            `
        }
    })
        .then(response => response.json())
        .then(afficherblague)

    function afficherblague(data) {
        console.log(data)
        let afficherblagueHTML = document.getElementById("container-blague8")
        afficherblagueHTML.innerHTML = `
        <p class="joke-joke"> ${data.joke}</p>
        <p class="joke-answer"> ${data.answer} </p>
        `

    }
    // Au bout de X secondes, la notification disparaît
    setTimeout(() => {
        document.getElementById('container-blague8').style.display = 'none';
    },7000);
    setTimeout(() => {
        document.getElementById('container-blague8').style.display = 'flex';
    }, 1000);
})







//--------------------------------------------------------------------------------------TITANS---------------------------------------------------------------------
document.getElementById('gif1-milan').addEventListener('click', event => {
    fetch("https://api.giphy.com/v1/gifs?&api_key=AFul8cdfMMbTEgrdaCnmZhLx8KK6iR3s&ids=xUPGcjickCJB2QOcM0")
        .then((response) => response.json())
        .then((data) => {
            console.log(data);

            let gifContainer = document.getElementById("popup-gif-titan1")
            gifContainer.style.backgroundImage = "url(" + data.data[0].images.downsized.url + ")";
        });

    setTimeout(() => {
        document.getElementById('popup-gif-titan1').style.display = 'none';
    }, 4000);
    setTimeout(() => {
        document.getElementById('popup-gif-titan1').style.display = 'flex';
    }, 1000);
})
document.getElementById('gif2-milan').addEventListener('click', event => {
    fetch("https://api.giphy.com/v1/gifs?&api_key=AFul8cdfMMbTEgrdaCnmZhLx8KK6iR3s&ids=3ohzdUAEh2h35yNw1a")
        .then((response) => response.json())
        .then((data) => {
            console.log(data);

            let gifContainer = document.getElementById("popup-gif-titan2")
            gifContainer.style.backgroundImage = "url(" + data.data[0].images.downsized.url + ")";
        });

    setTimeout(() => {
        document.getElementById('popup-gif-titan2').style.display = 'none';
    }, 4000);
    setTimeout(() => {
        document.getElementById('popup-gif-titan2').style.display = 'flex';
    }, 1000);
})
document.getElementById('gif3-milan').addEventListener('click', event => {
    fetch("https://api.giphy.com/v1/gifs?&api_key=AFul8cdfMMbTEgrdaCnmZhLx8KK6iR3s&ids=3o7btQ8jDTPGDpgc6I")
        .then((response) => response.json())
        .then((data) => {
            console.log(data);

            let gifContainer = document.getElementById("popup-gif-titan3")
            gifContainer.style.backgroundImage = "url(" + data.data[0].images.downsized.url + ")";
        });

    setTimeout(() => {
        document.getElementById('popup-gif-titan3').style.display = 'none';
    }, 4000);
    setTimeout(() => {
        document.getElementById('popup-gif-titan3').style.display = 'flex';
    }, 1000);
})
document.getElementById('gif4-milan').addEventListener('click', event => {
    fetch("https://api.giphy.com/v1/gifs?&api_key=AFul8cdfMMbTEgrdaCnmZhLx8KK6iR3s&ids=VbT5nZY3ZjXQA")
        .then((response) => response.json())
        .then((data) => {
            console.log(data);

            let gifContainer = document.getElementById("popup-gif-titan4")
            gifContainer.style.backgroundImage = "url(" + data.data[0].images.downsized.url + ")";
        });

    setTimeout(() => {
        document.getElementById('popup-gif-titan4').style.display = 'none';
    }, 4000);
    setTimeout(() => {
        document.getElementById('popup-gif-titan4').style.display = 'flex';
    }, 1000);
})







// ********************************************** REQUÊTE AFFICHAGE PERSO BAS À DROITE **********************************************
let charResult = localStorage.getItem("prenom");

console.log(charResult)

// Requête API AniList
var query = `
query ($id: Int) { # Define which variables will be used in the query (id)
  Media (id: $id, type: ANIME) { # Insert our variables into the query arguments (id) (type: ANIME is hard-coded in the query)
    id   
    characters {
        edges {
          node { # The character data node
            name {
              first
              last
            }
            description
            isFavourite
            image {
                large
            }
          }
          role
        }
      }
  }
}
`;
// Define our query variables and values that will be used in the query request
var variables = {
    id: 16498
};
// Define the config we'll need for our Api request
var url = 'https://graphql.anilist.co',
    options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify({
            query: query,
            variables: variables
        })
    };
// Make the HTTP Api request
fetch(url, options)
    .then(handleResponse)
    .then(handleData)
    .catch(handleError);
function handleResponse(response) {
    return response.json().then(function (json) {
    return response.ok ? json : Promise.reject(json);
    });
}
//Attribuer à chaque perso un numéro de ligne
function handleData(data) {

    console.log(data);

    if(charResult === "Sasha"){
        const sasha = getChar(data, 0)
        showinfos(sasha)
    }
    else if(charResult === "Hange"){
        const zoë = getChar(data, 2)
        showinfos(zoë)
    }
    else if(charResult === "Levi"){
        const levi = getChar(data, 3)
        showinfos(levi)
    }
    else if(charResult === "Armin"){
        const armin = getChar(data, 4)
        showinfos(armin)
    }
    else if(charResult === "Erwin"){
        const erwin = getChar(data, 6)
        showinfos(erwin)
    }
    else if(charResult === "Connie"){
        const connie = getChar(data, 7)
        showinfos(connie)
    }
    else if(charResult === "Eren"){
        const eren = getChar(data, 10)
        showinfos(eren)
    }
    else if(charResult === "Mikasa"){
        const mikasa = getChar(data, 17)
        showinfos(mikasa)
    }

}

function getChar(data, id){
    let char = data.data.Media.characters.edges[id]
    return char
}

function showinfos(char){
  let charactersHTML = document.getElementById("characters")
  charactersHTML.innerHTML = `
          <div class="your-perso-name-div"><h2 class="your-perso-name"> Ton personnage : ${char.node.name.first}</h2></div>
      `
  const characterHTML = document.createElement("div")
  characterHTML.id = "characterResult" + char.node.name.first
  characterHTML.classList.add("card-perso")
  characterHTML.innerHTML = `
          <div class="overlay"></div>
      `
  characterHTML.style.backgroundImage = "url(" + char.node.image.large + ")";
  charactersHTML.append(characterHTML)
  
}
//RETURN ERROR
function handleError(error) {
    console.error(error);
}







// //API LOVE CALCULATOR
// fetch("https://love-calculator.p.rapidapi.com/getPercentage?fname=Eren&sname=Mikasa", {
//     "method": "GET",
//     "headers": {
//         "x-rapidapi-key": "30704ceb81mshc291e6f9f8ddd50p141e25jsna69ded8619cf",
//         "x-rapidapi-host": "love-calculator.p.rapidapi.com"
//     }
// })
//     .then(response => {
//         console.log(response);
//     })
//     .catch(err => {
//         console.error(err);
//     });