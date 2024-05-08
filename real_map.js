var map = L.map("map").setView([51.5, -0.09], 9);
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// var marker1 = L.marker([51.497, -0.09],{title:"marker_1"}).addTo(map).bindPopup("Marker 1");
// // // var marker2 = L.marker([51.4, -0.08], {icon: myIcon});
// // // var marker3 = L.marker([51.3, -0.07], {icon: myIcon});
//  marker1.on('mouseover',function(ev) {
//       marker1.openPopup();
// });

// //Popup bind on marker
// marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
// marker2.bindPopup("Hello Bootstrap template");
// marker3.bindPopup("Hello Tailwind template");

// marker.addTo(map);
// marker2.addTo(map);
// marker3.addTo(map);

// Loop

var Listings = [
  [
    listingsData(
      "Diana's Restaurant",
      "Address Street, New York",
      "https://images.unsplash.com/photo-1529636120425-66f3708694e7?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8dmVudWV8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    ),
    51.5,
    -0.09,
    marker_1
  ],
  [
    listingsData(
      "Miana's Restaurant",
      "Address Street, Chicago",
      "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    ),
    51.4,
    -0.08,
    marker_2
  ],
  [
    listingsData(
      "Niana's Restaurant",
      "Address Street, Washington, D.C.",
      "https://images.unsplash.com/photo-1529636798458-92182e662485?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80"
    ),
    51.2,
    -0.07,
    marker_3
  ],
  [
    listingsData(
      "Jiana's Restaurant",
      "Address Street, San Francisco",
      "https://images.unsplash.com/photo-1529636695044-9e93499f4de3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    ),
    51.1,
    -0.05,
    marker_4
  ]
];

// Create HTML for ListingData
function listingsData(locationTitle, locationAddress, locationimg) {
  return (
    "" +
    "<img src=" +
    locationimg +
    "</img>" +
    "<h1>" +
    locationTitle +
    "</h1>" +
    "<span>" +
    locationAddress +
    "</span>"
  );
}
// Loop for Listings
for (var i = 0; i < Listings.length; i++) {
  // Icon Map
  var myIcon = L.icon({
    iconUrl:
      "https://preview.easetemplate.com/rentkit/assets/images/map-pin.png",
    iconSize: [28, 39]
  });

  // Marker to map
  var marker = new L.marker([Listings[i][1], Listings[i][2]], { icon: myIcon })
    .addTo(map)
    .bindPopup(Listings[i][0]);
} // Loop Close

// For understanding loop
for (let i in Listings) {
  console.log(Listings[i][3]);
}
