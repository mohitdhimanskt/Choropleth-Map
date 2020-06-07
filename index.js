const projectName = "choropleth";
localStorage.setItem('example_project', 'D3: Choropleth');


var body = d3.select("body");

var svg = d3.select("svg"),
width = +svg.attr("width"),
height = +svg.attr("height");
