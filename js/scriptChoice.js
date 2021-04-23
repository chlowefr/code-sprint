document.getElementById('gif1-milan').addEventListener('click', event => {
    fetch("https://api.giphy.com/v1/gifs?&api_key=AFul8cdfMMbTEgrdaCnmZhLx8KK6iR3s&ids=xUPGcjickCJB2QOcM0")
    .then((response) => response.json())
    .then((data) => {
        console.log(data);

        let gifContainer = document.getElementById("popup-gif-titan1")
        gifContainer.style.backgroundImage = "url(" + data.data[0].images.downsized.url + ")";
    });

    setTimeout(() => {
        document.getElementById('popup-gif-titan1').style.display='none';
    },4000);
    setTimeout(() => {
        document.getElementById('popup-gif-titan1').style.display='flex';
    },1000);
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
        document.getElementById('popup-gif-titan2').style.display='none';
    },4000);
    setTimeout(() => {
        document.getElementById('popup-gif-titan2').style.display='flex';
    },1000);
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
        document.getElementById('popup-gif-titan3').style.display='none';
    },4000);
    setTimeout(() => {
        document.getElementById('popup-gif-titan3').style.display='flex';
    },1000);
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
        document.getElementById('popup-gif-titan4').style.display='none';
    },4000);
    setTimeout(() => {
        document.getElementById('popup-gif-titan4').style.display='flex';
    },1000);
})

