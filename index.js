const projectName = "choropleth";
localStorage.setItem('example_project', 'D3: Choropleth');


var body = d3.select("body");

var svg = d3.select("svg"),
width = +svg.attr("width"),
height = +svg.attr("height");

var tooltip = body.append("div").
attr("class", "tooltip").
attr("id", "tooltip").
style("opacity", 0);

var unemployment = d3.map();

var path = d3.geoPath();

var x = d3.scaleLinear().
domain([2.6, 75.1]).
rangeRound([600, 860]);

var color = d3.scaleThreshold().
domain(d3.range(2.6, 75.1, (75.1 - 2.6) / 8)).
range(d3.schemeGreens[9]);

var g = svg.append("g").
attr("class", "key").
attr("id", "legend").
attr("transform", "translate(0,40)");

g.selectAll("rect").
data(color.range().map(function (d) {
  d = color.invertExtent(d);
  if (d[0] == null) d[0] = x.domain()[0];
  if (d[1] == null) d[1] = x.domain()[1];
  return d;
})).
enter().append("rect").
attr("height", 8).
attr("x", function (d) {return x(d[0]);}).
attr("width", function (d) {return x(d[1]) - x(d[0]);}).
attr("fill", function (d) {return color(d[0]);});
