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