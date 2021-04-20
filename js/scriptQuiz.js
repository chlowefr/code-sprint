fetch("questions.json")
.then((response) => response.json())
.then((data) => {
  data.records.map((item) => {
    console.log(item.geometry.coordinates);

    var el = document.createElement("div");
    el.className = "marker";

    new mapboxgl.Marker(el)
      .setLngLat(item.geometry.coordinates)
      .addTo(map);
  });
});