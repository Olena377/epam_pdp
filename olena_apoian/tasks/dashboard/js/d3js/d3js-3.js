(function() {
    function name(d) { return d.name; }
    function group(d) { return d.group; }

    var color = d3.scale.category10();
    function colorByGroup(d) { return color(group(d)); }

    var width = 480,
        height = 250;

    var svg = d3.select('.d3js-1')
        .append('svg')
        .attr('width', width)
        .attr('height', height);

    var node, link;

    var voronoi = d3.geom.voronoi()
        .x(function(d) { return d.x; })
        .y(function(d) { return d.y; })
        .clipExtent([[-5, -5], [width+5, height+5]]);

    function recenterVoronoi(nodes) {
        var shapes = [];
        voronoi(nodes).forEach(function(d) {
            if ( !d.length ) return;
            var n = [];
            d.forEach(function(c){
                n.push([ c[0] - d.point.x, c[1] - d.point.y ]);
            });
            n.point = d.point;
            shapes.push(n);
        });
        return shapes;
    }

    var force = d3.layout.force()
        .charge(-1000)
        .friction(0.15)
        .linkDistance(25)
        .size([width, height]);

    force.on('tick', function() {
        node.attr('transform', function(d) { return 'translate('+d.x+','+d.y+')'; })
            .attr('clip-path', function(d) { return 'url(#clip-'+d.index+')'; });

        link.attr('x1', function(d) { return d.source.x; })
            .attr('y1', function(d) { return d.source.y; })
            .attr('x2', function(d) { return d.target.x; })
            .attr('y2', function(d) { return d.target.y; });

        var clip = svg.selectAll('.clip')
            .data( recenterVoronoi(node.data()), function(d) { return d.point.index; } );

        clip.enter().append('clipPath')
            .attr('id', function(d) { return 'clip-'+d.point.index; })
            .attr('class', 'clip');
        clip.exit().remove()

        clip.selectAll('path').remove();
        clip.append('path')
            .attr('d', function(d) { return 'M'+d.join(',')+'Z'; });
    });

    d3.json('data/miserables.json', function(err, data) {

        data.nodes.forEach(function(d, i) {
            d.id = i;
        });

        link = svg.selectAll('.link')
            .data( data.links )
            .enter().append('line')
            .attr('class', 'link')
            .style("stroke-width", function(d) { return Math.sqrt(d.value); });

        node = svg.selectAll('.node')
            .data( data.nodes )
            .enter().append('g')
            .attr('title', name)
            .attr('class', 'node')
            .call( force.drag );

        node.append('circle')
            .attr('r', 15)
            .attr('fill', colorByGroup)
            .attr('fill-opacity', 0.5);

        node.append('circle')
            .attr('r', 2)
            .attr('stroke', 'black');

        force
            .nodes( data.nodes )
            .links( data.links )
            .start();
    });
})();