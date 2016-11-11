window.onload = init;

function init(){
  require([
    "esri/Map",
    "esri/views/MapView",
    "esri/widgets/BasemapToggle",
    "esri/widgets/Search",
    "esri/widgets/Home",
    "esri/widgets/Locate",
    "dojo/domReady!"
  ], 

  function(Map, MapView, BasemapToggle, Search, Home, Locate) {
    var map = new Map({
      basemap: "streets"
    });
    var view = new MapView({
      container: "map-container",  // Reference to the DOM node that will contain the view
      map: map,  // References the map object created in step 3
      zoom: 12,  // Sets the zoom level based on level of detail (LOD)
      center: [-7.9955131, 12.6125912]  // Sets the center point of view in lon/lat         
    });


    // BasemapToggle Widget
    var toggle = new BasemapToggle({
      view: view,
      nextBasemap: "hybrid"
    });
    toggle.startup();
    view.ui.add(toggle, "bottom-left");

    // Search widget
    var searchWidget = new Search({
      view: view
    });
    searchWidget.startup();
    view.ui.add(searchWidget, {
      position: "top-right",
      index: 0
    });

    // Home Button
    var homeBtn = new Home({
      view: view
    });
    homeBtn.startup();
    view.ui.add(homeBtn, "top-left");

    // Geo-location Button
    var locateBtn = new Locate({
      view: view
    });
    locateBtn.startup();
    view.ui.add(locateBtn, {
      position: "top-left",
      index: 0
    });

  });
}