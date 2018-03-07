import axios from "axios";

export default {
  // Gets all books
  getSavedPlaces: function () {
    return axios.get("/api/savedplaces");
  },
  // Gets the brewery with the given id
  getSavedPlace: function (id) {
    console.log("getting to api for place detail")
    console.log(id)
    return axios.get("/api/savedplaces/" + id);
  },
  // Deletes the book with the given id

  deleteSavedPlaceByBreweryId: function(breweryId) {
    console.log("im in deleteSavedPlace brewery_id: " + breweryId);
    return axios.delete("/api/savedplaces/" + breweryId);
  },
  // Saves a place to the database
  savePlace: function(savedPlacesData) {
    console.log("im in savePlace on the client side");
    return axios.post("/api/savedplaces"  + savedPlacesData.brewery_id, savedPlacesData);
    
  deleteSavedPlace: function (id) {
    return axios.delete("/api/savedplaces/" + id);
  },
  beenToPlace: function (id) {
    console.log("got to beentoplace in api.js")
    return axios.put("/api/savedplaces/" + id, {
      been_there: true
    })
  },
  haveNotBeenToPlace: function (id) {
    console.log("got to beentoplace in api.js")
    return axios.put("/api/savedplaces/" + id, {
      been_there: false
    })

  },
  // Saves a book to the database
  // savePlace: function(savedPlacesData) {
  //   return axios.post("/api/savedplaces", savedPlacesData.been_there);
  // },
  // search: function(query) {
  //   console.log("im in search on the client side");
  //   console.log(BASEURL + APIKEY + FORMAT + POSTAL + query);
  //   return axios.fetch(BASEURL + APIKEY + FORMAT + POSTAL + query);
  // },

  getApiPlaces: function(query) {
    console.log("query: " + query);
   return axios.get("/api/apiplaces/" + query)
  }

  // saveBrewery: function(breweryData) {
  //   console.log("im in saveBrewery on the client side");
  //   return axios.post("/api/savebrewery/" + breweryData.brewery_name, breweryData);
  // }
};

