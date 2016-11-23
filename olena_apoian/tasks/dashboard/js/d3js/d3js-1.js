(function(){
    var width = 480,
        height = 250;

    var svg = d3.select("#venn").append("svg")
        .attr("width", width)
        .attr("height", height);

    svg.append("circle")
        .attr("cx", 175)
        .attr("cy", 100)
        .attr("r", 100)
        .style("fill", "brown")
        .style("fill-opacity", ".5");

    svg.append("circle")
        .attr("cx", 275)
        .attr("cy", 100)
        .attr("r", 100)
        .style("fill", "steelblue")
        .style("fill-opacity", ".5");

    svg.append("circle")
        .attr("cx", 225)
        .attr("cy", 150)
        .attr("r", 100)
        .style("fill", "green")
        .style("fill-opacity", ".5");
})();