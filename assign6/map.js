    var mapboxTiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {attribution: 'Map data &copy; <a href="https://openstreetmap.org">OpenStreetMap</a>', maxZoom: 18,})

    var map = L.map('map')
          .addLayer(mapboxTiles)
          .setView([33.6168592, 114.5836234], 5);

    var items = [];
    var airtable_read_endpoint = "https://api.airtable.com/v0/appdKlfv4HAjmlZGI/Json?api_key=key3P4gTMtrDY1ylx";
    var data = [];
    $.getJSON(airtable_read_endpoint, function(result) {
           $.each(result.records, function(key,value) {
               items = {};
                   items["name"] = value.fields.Companies;
                   items["url"] = value.fields.Weibo_Links;
                   items["image_url"] = value.fields.Logos;
                   items["latitud"] = value.fields.Lat;
                   items["longitud"] = value.fields.Lng;
                   data.push(items);
                   console.log(items);
            }); // end .each
    }); // end getJSON

function show_districts(){

  for (var i in data) {
      var latlng = L.latLng({ lat: data[i].latitud, lng: data[i].longitud });
      L.marker( latlng )
          .bindPopup( '<a href="' + data[i].url + '" target="_blank">' + '<img src="' + data[i].image_url+'" width = "80px"><br>'+data[i].name + '</a>' )
          .addTo(map);
  }
}
