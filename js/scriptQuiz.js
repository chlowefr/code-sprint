// Here we define our query as a multi-line string
// Storing it in a separate .graphql/.gql file is also possible
// Requête 
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

function handleData(data) {

    console.log(data);

    const sasha = getChar(data, 0)
    showinfos(sasha)

    const zoë = getChar(data, 2)
    showinfos(zoë)

    const levi = getChar(data, 3)
    showinfos(levi)

    const armin = getChar(data, 4)
    showinfos(armin)

    const erwin = getChar(data, 6)
    showinfos(erwin)

    const connie = getChar(data, 7)
    showinfos(connie)

    const eren = getChar(data, 10)
    showinfos(eren)

    const mikasa = getChar(data, 17)
    showinfos(mikasa)

}

function getChar(data, id){
    let char = data.data.Media.characters.edges[id]
    return char
}

function showinfos(char){
  let charactersHTML = document.getElementById("characters")
  const characterHTML = document.createElement("div")
  characterHTML.id = "character" + char.node.name.first
  characterHTML.classList.add("card-perso")
  characterHTML.innerHTML = `
          <h2>${char.node.name.first}</h2>
          <div class="overlay"></div>
      `
  characterHTML.style.backgroundImage = "url(" + char.node.image.large + ")";
  charactersHTML.append(characterHTML)
}

//RETURN ERROR

function handleError(error) {
    console.error(error);
}


// ************************************************************************* AFFICHER QUESTIONNAIRE *************************************************************************

document.getElementById('choice').addEventListener('click', event => {
  document.getElementById('container-choice').style.display = "none"
  document.getElementById('container-quiz').style.display = "flex"
});


// ************************************************************************* QUESTIONNAIRE DE PERSONNALITÉ *************************************************************************

//INITIALISATION DES SCORES
var sasha = 0;
var hange = 0;
var levi = 0;
var armin = 0;
var erwin = 0;
var connie = 0;
var eren = 0;
var mikasa = 0;

//  APIKEY GIPHY  : AFul8cdfMMbTEgrdaCnmZhLx8KK6iR3s

// ************************************ First question ************************************

fetch("https://api.giphy.com/v1/gifs?&api_key=AFul8cdfMMbTEgrdaCnmZhLx8KK6iR3s&ids=AsvEmVkAkQE7e")
  .then((response) => response.json())
  .then((data) => {
    // console.log(data);

    let gifContainer = document.getElementById("fir-quest1")
    gifContainer.style.backgroundImage = "url(" + data.data[0].images.downsized.url + ")";

  });

  fetch("https://api.giphy.com/v1/gifs?&api_key=AFul8cdfMMbTEgrdaCnmZhLx8KK6iR3s&ids=CDQV3DNjdn6ms")
  .then((response) => response.json())
  .then((data) => {
    // console.log(data);

    let gifContainer = document.getElementById("fir-quest2")
    gifContainer.style.backgroundImage = "url(" + data.data[0].images.downsized.url + ")";

  });
  fetch("https://api.giphy.com/v1/gifs?&api_key=AFul8cdfMMbTEgrdaCnmZhLx8KK6iR3s&ids=3ohzdQkhlYlY7njhSM")
  .then((response) => response.json())
  .then((data) => {
    // console.log(data);

    let gifContainer = document.getElementById("fir-quest3")
    gifContainer.style.backgroundImage = "url(" + data.data[0].images.downsized.url + ")";

  });
  fetch("https://api.giphy.com/v1/gifs?&api_key=AFul8cdfMMbTEgrdaCnmZhLx8KK6iR3s&ids=3ohzdZoopZ5e6UMpdS")
  .then((response) => response.json())
  .then((data) => {
    // console.log(data);

    let gifContainer = document.getElementById("fir-quest4")
    gifContainer.style.backgroundImage = "url(" + data.data[0].images.downsized.url + ")";


  });

  document.getElementById('quest1Choice1').addEventListener('click', event => {
      levi = levi + 3
      erwin = erwin + 2
      console.log("Résultats après question 1")
      console.log('levi' + levi)
      console.log('erwin' + erwin)
      document.getElementById('first-question').style.display = "none"
      document.getElementById('second-question').style.display = "block"
  });
  document.getElementById('quest1Choice2').addEventListener('click', event => {
      sasha = sasha + 1
      mikasa = mikasa + 0
      console.log("Résultats après question 1")
      console.log('sasha' + sasha)
      console.log('mikasa' + mikasa)
      document.getElementById('first-question').style.display = "none"
      document.getElementById('second-question').style.display = "block"
  });
  document.getElementById('quest1Choice3').addEventListener('click', event => {
      connie = connie + 0
      hange = hange + 1
      console.log("Résultats après question 1")
      console.log('connie ' + connie)
      console.log('hange ' + hange)
      document.getElementById('first-question').style.display = "none"
      document.getElementById('second-question').style.display = "block"
  });
  document.getElementById('quest1Choice4').addEventListener('click', event => {
      armin = armin + 1
      eren = eren + 2
      console.log("Résultats après question 1")
      console.log('armin ' + armin)
      console.log('eren ' + eren)
      document.getElementById('first-question').style.display = "none"
      document.getElementById('second-question').style.display = "block"
  });



// ************************************ Second question ************************************

fetch("https://api.giphy.com/v1/gifs?&api_key=AFul8cdfMMbTEgrdaCnmZhLx8KK6iR3s&ids=RttyQGOi3sYak")
  .then((response) => response.json())
  .then((data) => {
    // console.log(data);

    let gifContainer = document.getElementById("sec-quest1")
    gifContainer.style.backgroundImage = "url(" + data.data[0].images.downsized.url + ")";

  });

  fetch("https://api.giphy.com/v1/gifs?&api_key=AFul8cdfMMbTEgrdaCnmZhLx8KK6iR3s&ids=sDtYOO3Tv5aG4")
  .then((response) => response.json())
  .then((data) => {
    // console.log(data);

    let gifContainer = document.getElementById("sec-quest2")
    gifContainer.style.backgroundImage = "url(" + data.data[0].images.downsized.url + ")";

  });
  fetch("https://api.giphy.com/v1/gifs?&api_key=AFul8cdfMMbTEgrdaCnmZhLx8KK6iR3s&ids=GISoZGkcy57H2")
  .then((response) => response.json())
  .then((data) => {
    // console.log(data);

    let gifContainer = document.getElementById("sec-quest3")
    gifContainer.style.backgroundImage = "url(" + data.data[0].images.downsized.url + ")";

  });
  fetch("https://api.giphy.com/v1/gifs?&api_key=AFul8cdfMMbTEgrdaCnmZhLx8KK6iR3s&ids=X9AwpgTzquMDnpWbRY")
  .then((response) => response.json())
  .then((data) => {
    // console.log(data);

    let gifContainer = document.getElementById("sec-quest4")
    gifContainer.style.backgroundImage = "url(" + data.data[0].images.downsized.url + ")";


  });

document.getElementById('quest2Choice1').addEventListener('click', event => {
    mikasa = mikasa + 1
    armin = armin + 2
    console.log("Résultats après question 2")
    console.log('mikasa' + mikasa)
    console.log('armin' + armin)
    document.getElementById('second-question').style.display = "none"
    document.getElementById('third-question').style.display = "block"
});
document.getElementById('quest2Choice2').addEventListener('click', event => {
    connie = connie + 1
    sasha = sasha + 2
    console.log("Résultats après question 2")
    console.log('connie' + connie)
    console.log('sasha' + sasha)
    document.getElementById('second-question').style.display = "none"
    document.getElementById('third-question').style.display = "block"
});
document.getElementById('quest2Choice3').addEventListener('click', event => {
    eren = eren + 1
    levi = levi + 2
    console.log("Résultats après question 2")
    console.log('eren ' + eren)
    console.log('levi ' + levi)
    document.getElementById('second-question').style.display = "none"
    document.getElementById('third-question').style.display = "block"
});
document.getElementById('quest2Choice4').addEventListener('click', event => {
    erwin = erwin + 2
    hange = hange + 1
    console.log("Résultats après question 2")
    console.log('erwin ' + erwin)
    console.log('hange ' + hange)
    document.getElementById('second-question').style.display = "none"
    document.getElementById('third-question').style.display = "block"
});



// ************************************ Third question ************************************

fetch("https://api.giphy.com/v1/gifs?&api_key=AFul8cdfMMbTEgrdaCnmZhLx8KK6iR3s&ids=l0Iy6cMi1aPIBzP32")
  .then((response) => response.json())
  .then((data) => {
    // console.log(data);

    let gifContainer = document.getElementById("thi-quest1")
    gifContainer.style.backgroundImage = "url(" + data.data[0].images.downsized.url + ")";

  });

  fetch("https://api.giphy.com/v1/gifs?&api_key=AFul8cdfMMbTEgrdaCnmZhLx8KK6iR3s&ids=Ku1FyPdoBXVg4")
  .then((response) => response.json())
  .then((data) => {
    // console.log(data);

    let gifContainer = document.getElementById("thi-quest2")
    gifContainer.style.backgroundImage = "url(" + data.data[0].images.downsized.url + ")";

  });
  fetch("https://api.giphy.com/v1/gifs?&api_key=AFul8cdfMMbTEgrdaCnmZhLx8KK6iR3s&ids=7YP3LrfbfoSJO")
  .then((response) => response.json())
  .then((data) => {
    // console.log(data);

    let gifContainer = document.getElementById("thi-quest3")
    gifContainer.style.backgroundImage = "url(" + data.data[0].images.downsized.url + ")";

  });
  fetch("https://api.giphy.com/v1/gifs?&api_key=AFul8cdfMMbTEgrdaCnmZhLx8KK6iR3s&ids=3vvbzzWHdszk2jHdbC")
  .then((response) => response.json())
  .then((data) => {
    // console.log(data);

    let gifContainer = document.getElementById("thi-quest4")
    gifContainer.style.backgroundImage = "url(" + data.data[0].images.downsized.url + ")";


  });

document.getElementById('quest3Choice1').addEventListener('click', event => {
  sasha = sasha + 2
  armin = armin + 1
  console.log("Résultats après question 3")
  console.log('sasha' + sasha)
  console.log('armin' + armin)
  document.getElementById('third-question').style.display = "none"
  document.getElementById('fourth-question').style.display = "block"
});
document.getElementById('quest3Choice2').addEventListener('click', event => {
  eren = eren + 2
  erwin = erwin + 1
  console.log("Résultats après question 3")
  console.log('eren' + eren)
  console.log('erwin' + erwin)
  document.getElementById('third-question').style.display = "none"
  document.getElementById('fourth-question').style.display = "block"
});
document.getElementById('quest3Choice3').addEventListener('click', event => {
  hange = hange + 3
  levi = levi + 1
  console.log("Résultats après question 3")
  console.log('hange ' + hange)
  console.log('levi ' + levi)
  document.getElementById('third-question').style.display = "none"
  document.getElementById('fourth-question').style.display = "block"
});
document.getElementById('quest3Choice4').addEventListener('click', event => {
  mikasa = mikasa + 2
  connie = connie + 2
  console.log("Résultats après question 3")
  console.log('mikasa ' + mikasa)
  console.log('connie ' + connie)
  document.getElementById('third-question').style.display = "none"
  document.getElementById('fourth-question').style.display = "block"
});



// ************************************ Fourth question ************************************

fetch("https://api.giphy.com/v1/gifs?&api_key=AFul8cdfMMbTEgrdaCnmZhLx8KK6iR3s&ids=GyChnsTnX8bDi")
  .then((response) => response.json())
  .then((data) => {
    // console.log(data);

    let gifContainer = document.getElementById("fou-quest1")
    gifContainer.style.backgroundImage = "url(" + data.data[0].images.downsized.url + ")";

  });

  fetch("https://api.giphy.com/v1/gifs?&api_key=AFul8cdfMMbTEgrdaCnmZhLx8KK6iR3s&ids=Ojb0IbEqC0Xa8")
  .then((response) => response.json())
  .then((data) => {
    // console.log(data);

    let gifContainer = document.getElementById("fou-quest2")
    gifContainer.style.backgroundImage = "url(" + data.data[0].images.downsized.url + ")";

  });
  fetch("https://api.giphy.com/v1/gifs?&api_key=AFul8cdfMMbTEgrdaCnmZhLx8KK6iR3s&ids=yvJU1F2Ve8j0Q")
  .then((response) => response.json())
  .then((data) => {
    // console.log(data);

    let gifContainer = document.getElementById("fou-quest3")
    gifContainer.style.backgroundImage = "url(" + data.data[0].images.downsized.url + ")";

  });
  fetch("https://api.giphy.com/v1/gifs?&api_key=AFul8cdfMMbTEgrdaCnmZhLx8KK6iR3s&ids=c4sF8kUpkL1Cw")
  .then((response) => response.json())
  .then((data) => {
    // console.log(data);

    let gifContainer = document.getElementById("fou-quest4")
    gifContainer.style.backgroundImage = "url(" + data.data[0].images.downsized.url + ")";


  });

document.getElementById('quest4Choice1').addEventListener('click', event => {
  mikasa = mikasa + 1
  sasha = sasha + 2
  console.log("Résultats après question 4")
  console.log('mikasa' + mikasa)
  console.log('sasha' + sasha)
  document.getElementById('fourth-question').style.display = "none"
  document.getElementById('fifth-question').style.display = "block"
});
document.getElementById('quest4Choice2').addEventListener('click', event => {
  eren = eren + 1
  armin = armin + 2
  console.log("Résultats après question 4")
  console.log('eren' + eren)
  console.log('armin' + armin)
  document.getElementById('fourth-question').style.display = "none"
  document.getElementById('fifth-question').style.display = "block"
});
document.getElementById('quest4Choice3').addEventListener('click', event => {
  erwin = erwin + 2
  levi = levi + 2
  console.log("Résultats après question 4")
  console.log('erwin ' + erwin)
  console.log('levi ' + levi)
  document.getElementById('fourth-question').style.display = "none"
  document.getElementById('fifth-question').style.display = "block"
});
document.getElementById('quest4Choice4').addEventListener('click', event => {
  hange = hange + 0
  connie = connie + 1
  console.log("Résultats après question 4")
  console.log('hange ' + hange)
  console.log('connie ' + connie)
  document.getElementById('fourth-question').style.display = "none"
  document.getElementById('fifth-question').style.display = "block"
});



// ************************************ Fifth question ************************************

fetch("https://api.giphy.com/v1/gifs?&api_key=AFul8cdfMMbTEgrdaCnmZhLx8KK6iR3s&ids=3o7buiXTKpaF9KS92g")
  .then((response) => response.json())
  .then((data) => {
    // console.log(data);

    let gifContainer = document.getElementById("fif-quest1")
    gifContainer.style.backgroundImage = "url(" + data.data[0].images.downsized.url + ")";

  });

  fetch("https://api.giphy.com/v1/gifs?&api_key=AFul8cdfMMbTEgrdaCnmZhLx8KK6iR3s&ids=HobOkJveyfBWU")
  .then((response) => response.json())
  .then((data) => {
    // console.log(data);

    let gifContainer = document.getElementById("fif-quest2")
    gifContainer.style.backgroundImage = "url(" + data.data[0].images.downsized.url + ")";

  });
  fetch("https://api.giphy.com/v1/gifs?&api_key=AFul8cdfMMbTEgrdaCnmZhLx8KK6iR3s&ids=VbT5nZY3ZjXQA")
  .then((response) => response.json())
  .then((data) => {
    // console.log(data);

    let gifContainer = document.getElementById("fif-quest3")
    gifContainer.style.backgroundImage = "url(" + data.data[0].images.downsized.url + ")";

  });
  fetch("https://api.giphy.com/v1/gifs?&api_key=AFul8cdfMMbTEgrdaCnmZhLx8KK6iR3s&ids=3ohze3K0G3eC6hENvG")
  .then((response) => response.json())
  .then((data) => {
    // console.log(data);

    let gifContainer = document.getElementById("fif-quest4")
    gifContainer.style.backgroundImage = "url(" + data.data[0].images.downsized.url + ")";


  });


document.getElementById('quest5Choice1').addEventListener('click', event => {
  mikasa = mikasa + 2
  sasha = sasha + 1
  console.log("Résultats du test")
  console.log('sasha ' + sasha)
  console.log('hange ' + hange)
  console.log('levi ' + levi)
  console.log('armin ' + armin)
  console.log('erwin ' + erwin)
  console.log('connie ' + connie)
  console.log('eren ' + eren)
  console.log('mikasa ' + mikasa)
  document.getElementById('fifth-question').style.display = "none"

  if(sasha > hange && sasha > levi && sasha > armin && sasha > erwin && sasha > connie && sasha > eren  && sasha > mikasa){
    document.getElementById('result-sasha').style.display = "block"
    console.log("Je suis Sasha)")

  //   showinfosResult(sasha)

  //   function showinfosResult(char){
  //     let resultHTML = document.getElementById("sasha-desc")
  //     resultHTML.innerHTML = `
  //         <h2>Bravo, tu es : ${char.node.name.first}</h2>
  //         <div class="result-name"></div>
  //         <div class="result-description">${char.node.description}</div>
  //         `
  //     document.getElementById("sasha-img").style.backgroundImage = "url(" + char.node.image.large + ")";
  // }


  }
  else if(hange > sasha && hange > levi && hange > armin && hange > erwin && hange > connie && hange > eren  && hange > mikasa){
    document.getElementById('result-hange').style.display = "block"
    console.log("Je suis Hange)")
  }
  else if(levi > sasha && levi > hange && levi > armin && levi > erwin && levi > connie && levi > eren  && levi > mikasa){
    document.getElementById('result-levi').style.display = "block"
    console.log("Je suis Levi)")
  }
  else if(armin > sasha && armin > hange && armin > levi && armin > erwin && armin > connie && armin > eren  && armin > mikasa){
    document.getElementById('result-armin').style.display = "block"
    console.log("Je suis Armin")
  }
  else if(erwin > sasha && erwin > hange && erwin > levi && erwin > armin && erwin > connie && erwin > eren  && erwin > mikasa){
    document.getElementById('result-erwin').style.display = "block"
    console.log("Je suis Erwin)")
  }
  else if(connie > sasha && connie > hange && connie > levi && connie > armin && connie > erwin && connie > eren  && connie > mikasa){
    document.getElementById('result-connie').style.display = "block"
    console.log("Je suis Connie)")
  }
  else if(eren > sasha && eren > hange && eren > levi && eren > armin && eren > erwin && eren > connie  && eren > mikasa){
    document.getElementById('result-eren').style.display = "block"
    console.log("Je suis Eren)")
  }
  else if(mikasa > sasha && mikasa > hange && mikasa > levi && eren > armin && mikasa > erwin && mikasa > connie  && mikasa > eren){
    document.getElementById('result-mikasa').style.display = "block"
    console.log("Je suis Mikasa)")
  }

  // document.getElementById('result-section').style.display = "block"
});
document.getElementById('quest5Choice2').addEventListener('click', event => {
  eren = eren + 2
  armin = armin + 2
  console.log("Résultats du test")
  console.log('sasha ' + sasha)
  console.log('hange ' + hange)
  console.log('levi ' + levi)
  console.log('armin ' + armin)
  console.log('erwin ' + erwin)
  console.log('connie ' + connie)
  console.log('eren ' + eren)
  console.log('mikasa ' + mikasa)
  document.getElementById('fifth-question').style.display = "none"

  if(sasha > hange && sasha > levi && sasha > armin && sasha > erwin && sasha > connie && sasha > eren  && sasha > mikasa){
    document.getElementById('result-sasha').style.display = "block"
    console.log("Je suis Sasha)")
  }
  else if(hange > sasha && hange > levi && hange > armin && hange > erwin && hange > connie && hange > eren  && hange > mikasa){
    document.getElementById('result-hange').style.display = "block"
    console.log("Je suis Hange)")
  }
  else if(levi > sasha && levi > hange && levi > armin && levi > erwin && levi > connie && levi > eren  && levi > mikasa){
    document.getElementById('result-levi').style.display = "block"
    console.log("Je suis Levi)")
  }
  else if(armin > sasha && armin > hange && armin > levi && armin > erwin && armin > connie && armin > eren  && armin > mikasa){
    document.getElementById('result-armin').style.display = "block"
    console.log("Je suis Armin")
  }
  else if(erwin > sasha && erwin > hange && erwin > levi && erwin > armin && erwin > connie && erwin > eren  && erwin > mikasa){
    document.getElementById('result-erwin').style.display = "block"
    console.log("Je suis Erwin)")
  }
  else if(connie > sasha && connie > hange && connie > levi && connie > armin && connie > erwin && connie > eren  && connie > mikasa){
    document.getElementById('result-connie').style.display = "block"
    console.log("Je suis Connie)")
  }
  else if(eren > sasha && eren > hange && eren > levi && eren > armin && eren > erwin && eren > connie  && eren > mikasa){
    document.getElementById('result-eren').style.display = "block"
    console.log("Je suis Eren)")
  }
  else if(mikasa > sasha && mikasa > hange && mikasa > levi && eren > armin && mikasa > erwin && mikasa > connie  && mikasa > eren){
    document.getElementById('result-mikasa').style.display = "block"
    console.log("Je suis Mikasa)")
  }

  // document.getElementById('result-section').style.display = "block"
});
document.getElementById('quest5Choice3').addEventListener('click', event => {
  erwin = erwin + 2
  levi = levi + 2
  console.log("Résultats du test")
  console.log('sasha ' + sasha)
  console.log('hange ' + hange)
  console.log('levi ' + levi)
  console.log('armin ' + armin)
  console.log('erwin ' + erwin)
  console.log('connie ' + connie)
  console.log('eren ' + eren)
  console.log('mikasa ' + mikasa)
  document.getElementById('fifth-question').style.display = "none"

  if(sasha > hange && sasha > levi && sasha > armin && sasha > erwin && sasha > connie && sasha > eren  && sasha > mikasa){
    document.getElementById('result-sasha').style.display = "block"
    console.log("Je suis Sasha)")
  }
  else if(hange > sasha && hange > levi && hange > armin && hange > erwin && hange > connie && hange > eren  && hange > mikasa){
    document.getElementById('result-hange').style.display = "block"
    console.log("Je suis Hange)")
  }
  else if(levi > sasha && levi > hange && levi > armin && levi > erwin && levi > connie && levi > eren  && levi > mikasa){
    document.getElementById('result-levi').style.display = "block"
    console.log("Je suis Levi)")
  }
  else if(armin > sasha && armin > hange && armin > levi && armin > erwin && armin > connie && armin > eren  && armin > mikasa){
    document.getElementById('result-armin').style.display = "block"
    console.log("Je suis Armin")
  }
  else if(erwin > sasha && erwin > hange && erwin > levi && erwin > armin && erwin > connie && erwin > eren  && erwin > mikasa){
    document.getElementById('result-erwin').style.display = "block"
    console.log("Je suis Erwin)")
  }
  else if(connie > sasha && connie > hange && connie > levi && connie > armin && connie > erwin && connie > eren  && connie > mikasa){
    document.getElementById('result-connie').style.display = "block"
    console.log("Je suis Connie)")
  }
  else if(eren > sasha && eren > hange && eren > levi && eren > armin && eren > erwin && eren > connie  && eren > mikasa){
    document.getElementById('result-eren').style.display = "block"
    console.log("Je suis Eren)")
  }
  else if(mikasa > sasha && mikasa > hange && mikasa > levi && eren > armin && mikasa > erwin && mikasa > connie  && mikasa > eren){
    document.getElementById('result-mikasa').style.display = "block"
    console.log("Je suis Mikasa)")
  }
  // document.getElementById('result-section').style.display = "block"
});
document.getElementById('quest5Choice4').addEventListener('click', event => {
  hange = hange + 2
  connie = connie + 3
  console.log("Résultats du test")
  console.log('sasha ' + sasha)
  console.log('hange ' + hange)
  console.log('levi ' + levi)
  console.log('armin ' + armin)
  console.log('erwin ' + erwin)
  console.log('connie ' + connie)
  console.log('eren ' + eren)
  console.log('mikasa ' + mikasa)
  document.getElementById('fifth-question').style.display = "none"

  if(sasha > hange && sasha > levi && sasha > armin && sasha > erwin && sasha > connie && sasha > eren  && sasha > mikasa){
    document.getElementById('result-sasha').style.display = "block"
    console.log("Je suis Sasha)")
  }
  else if(hange > sasha && hange > levi && hange > armin && hange > erwin && hange > connie && hange > eren  && hange > mikasa){
    document.getElementById('result-hange').style.display = "block"
    console.log("Je suis Hange)")
  }
  else if(levi > sasha && levi > hange && levi > armin && levi > erwin && levi > connie && levi > eren  && levi > mikasa){
    document.getElementById('result-levi').style.display = "block"
    console.log("Je suis Levi)")
  }
  else if(armin > sasha && armin > hange && armin > levi && armin > erwin && armin > connie && armin > eren  && armin > mikasa){
    document.getElementById('result-armin').style.display = "block"
    console.log("Je suis Armin")
  }
  else if(erwin > sasha && erwin > hange && erwin > levi && erwin > armin && erwin > connie && erwin > eren  && erwin > mikasa){
    document.getElementById('result-erwin').style.display = "block"
    console.log("Je suis Erwin)")
  }
  else if(connie > sasha && connie > hange && connie > levi && connie > armin && connie > erwin && connie > eren  && connie > mikasa){
    document.getElementById('result-connie').style.display = "block"
    console.log("Je suis Connie)")
  }
  else if(eren > sasha && eren > hange && eren > levi && eren > armin && eren > erwin && eren > connie  && eren > mikasa){
    document.getElementById('result-eren').style.display = "block"
    console.log("Je suis Eren)")
  }
  else if(mikasa > sasha && mikasa > hange && mikasa > levi && eren > armin && mikasa > erwin && mikasa > connie  && mikasa > eren){
    document.getElementById('result-mikasa').style.display = "block"
    console.log("Je suis Mikasa)")
  }
  // document.getElementById('result-section').style.display = "block"
});

