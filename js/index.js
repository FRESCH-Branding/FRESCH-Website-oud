// // Initialize and add the map
// let map;

// async function initMap() {
//   // The location of Uluru

//   map = new google.maps.Map(document.getElementById("map"), {
//     zoom: 2,
//     center: {
//       lat: -34.397,
//       lng: 150.644,
//     },
//     mapTypeControl: false,
//   });
//   // Request needed libraries.
//   //@ts-ignore
//   const { Map } = await google.maps.importLibrary("maps");
//   const { AdvancedMarkerView } = await google.maps.importLibrary("marker");

//   // The map, centered at Uluru
//   map = new Map(document.getElementById("map"), {
//     zoom: 4,
//     center: position,
//     mapId: "DEMO_MAP_ID",
//   });

//   // The marker, positioned at Uluru
//   const marker = new AdvancedMarkerView({
//     map: map,
//     position: position,
//     title: "Uluru",
//   });
// }

// initMap();

// // The marker, positioned at Uluru
// const marker = new AdvancedMarkerView({
//   map: map,
//   position: position,
//   title: "Uluru",
// });

// Initialize and add the map
let map;

async function initMap() {
  // The location of Uluru
  const position = {
    lat: 51.64617,
    lng: 5.94058,
  };

  const { Map } = await google.maps.importLibrary("maps");
  const image = "/input/images/Icons/marker.png";

  // The map, centered at Uluru
  map = new Map(document.getElementById("map"), {
    zoom: 18,
    center: position,
    // mapId: "DEMO_MAP_ID",
    disableDefaultUI: true,
    styles: [
      {
        featureType: "poi",
        stylers: [{ visibility: "off" }],
      },
    ],
  });

  const contentString =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h3 id="firstHeading" class="firstHeading">FRESCH BRANDING</h3>' +
    '<div id="bodyContent">' +
    "<a href=https://www.google.nl/maps/place/Bakelgeertstraat+15,+5831+CS+Boxmeer/@51.6461836,5.9380245,17z/data=!3m1!4b1!4m6!3m5!1s0x47c713a685457eab:0x24115b1b7616bac1!8m2!3d51.6461803!4d5.9405994!16s%2Fg%2F11c4w_jsfd target=_blanc>" +
    "<p>Bakelgeertstraat 15</p>" +
    "<p>5831 CS, Boxmeer</p>" +
    "</a>" +
    "<br/>" +
    "<p>info@freschbranding.nl</p>" +
    "<p>06 13 33 53 42</p>" +
    "</div>" +
    "</div>";
  const infowindow = new google.maps.InfoWindow({
    content: contentString,
    ariaLabel: "Uluru",
  });

  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    map: map,
    position: position,
    title: "Uluru",
    icon: image,
    streetViewControl: false,
  });

  marker.addListener("click", () => {
    infowindow.open({
      anchor: marker,
      map,
    });
  });
}

initMap();
