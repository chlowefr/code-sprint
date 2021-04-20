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

    let characterHTML = document.getElementById("character1")
        characterHTML.innerHTML = `
            <h2>${data.data.Media.characters.edges[0].node.name.first}</h2>
        `
    characterHTML.style.backgroundImage = "url(" + data.data.Media.characters.edges[0].node.image.large + ")";

    //Hover afficher la data de la description
    characterHTML.addEventListener("mouseover", function( event ) {
        characterHTML.innerHTML = `
            <p>${data.data.Media.characters.edges[0].node.isFavourite}</p>
        `
      });

      characterHTML.addEventListener("mouseleave", function( event ) {
        // on cible la cible de mouseleave
        event.target.style.opacity = "1";});

    let character2HTML = document.getElementById("character2")
        character2HTML.innerHTML = `
            <h2>${data.data.Media.characters.edges[2].node.name.first}</h2>
        `
        character2HTML.style.backgroundImage = "url(" + data.data.Media.characters.edges[2].node.image.large + ")";

    let character3HTML = document.getElementById("character3")
        character3HTML.innerHTML = `
            <h2>${data.data.Media.characters.edges[3].node.name.first}</h2>
        `
        character3HTML.style.backgroundImage = "url(" + data.data.Media.characters.edges[3].node.image.large + ")";

    let character4HTML = document.getElementById("character4")
        character4HTML.innerHTML = `
            <h2>${data.data.Media.characters.edges[4].node.name.first}</h2>
        `
        character4HTML.style.backgroundImage = "url(" + data.data.Media.characters.edges[4].node.image.large + ")";

    let character5HTML = document.getElementById("character5")
        character5HTML.innerHTML = `
            <h2>${data.data.Media.characters.edges[6].node.name.first}</h2>
        `
        character5HTML.style.backgroundImage = "url(" + data.data.Media.characters.edges[6].node.image.large + ")";

    let character6HTML = document.getElementById("character6")
        character6HTML.innerHTML = `
            <h2>${data.data.Media.characters.edges[7].node.name.first}</h2>
        `
        character6HTML.style.backgroundImage = "url(" + data.data.Media.characters.edges[7].node.image.large + ")";

    let character7HTML = document.getElementById("character7")
        character7HTML.innerHTML = `
            <h2>${data.data.Media.characters.edges[10].node.name.first}</h2>
        `
        character7HTML.style.backgroundImage = "url(" + data.data.Media.characters.edges[10].node.image.large + ")";

    let character8HTML = document.getElementById("character8")
        character8HTML.innerHTML = `
            <h2>${data.data.Media.characters.edges[17].node.name.first}</h2>
        `
        character8HTML.style.backgroundImage = "url(" + data.data.Media.characters.edges[17].node.image.large + ")";

}


// function handleData(data) {

//     console.log(data);

//     const sasha = getChar(data, 0)
//     showinfos(sasha)

//     const zoë = getChar(data, 2)
//     showinfos(zoë)

//     const levi = getChar(data, 3)
//     showinfos(levi)

//     const armin = getChar(data, 4)
//     showinfos(armin)

//     const erwin = getChar(data, 6)
//     showinfos(erwin)

//     const connie = getChar(data, 7)
//     showinfos(connie)

//     const eren = getChar(data, 10)
//     showinfos(eren)

//     const mikasa = getChar(data, 17)
//     showinfos(mikasa)

//     const reiner = getChar(data, 20)
//     showinfos(reiner)

// }

// function getChar(data, id){
//     let char = data.data.Media.characters.edges[id]
//     return char
// }
// function showinfos(char){
//     let characterHTML = document.getElementById("character8")
//     characterHTML.innerHTML = `
//             <h3>${char.node.name.first}</h3>
//             <img src="${char.node.image.large}" alt=""/>
//         `
// }

//RETURN ERROR

function handleError(error) {
    console.error(error);
}