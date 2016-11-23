(function() {
    // set up static variables
    // the dimensions of the visualization
    var width = 325,
        height = 250;

    // the "padding" space between the section content
    // and the visualization
    var padding = 25;

    var container = d3.select('#graph')
        .append('svg')
        .attr('id', 'container')
        .attr('width', width + padding * 2)
        .attr('height', height + padding * 2);

    var info = d3.select('#graph')
        .select('#info')
        .style('width', width + padding * 2);

    var viz = container.append('g')
        .attr('id', 'viz')
        .attr('transform',
            'translate(' + padding + ','
            + padding + ')');

    var tempScale = d3.scale.linear()
        .range([height, 0]);

    var rainScale = d3.scale.linear()
        .range([height, 0]);

    var xScale = d3.time.scale()
        .range([0, width]);

    var xAxis = d3.svg.axis()
        .scale(xScale)
        .orient("bottom")
        .tickFormat(d3.time.format("%b %Y"));

    var tempAxis = d3.svg.axis()
        .scale(tempScale)
        .orient("right")
        .tickFormat(function (d) {
            d = d.toString();
            return d.substr(0, d.length - 1) + '.' + d.substr(-1);
        });

    var rainAxis = d3.svg.axis()
        .scale(rainScale)
        .orient("left");

    var lineGenerator = d3.svg.line()
        .x(function (d) {
            return xScale(createDate(d.DATE));
        })
        .y(function (d) {
            return rainScale(d.PRCP);
        })
        .interpolate("linear");

    var bisectDate = d3.bisector(function (d) {
        return d.DATE;
    }).left;

    d3.select("#temp-key")
        .style('background', '#95cddf');


    d3.select("#rain-key")
        .style('background', '#cc627a');


    d3.csv('data/climate_data_truncated.csv', function (data) {


        // find min and max of data set
        // note, MaxTemp and MinTemp are two seperate
        // columns in our CSV
        tempScaleMax = d3.max(data, function (d) {
            return parseInt(d.TMAX)
        });

        tempScaleMin = d3.min(data, function (d) {
            return parseInt(d.TMIN)
        });

        // Now we will use the "extent" method to accomplish the same
        // thing but in one function!
        // Even though we have this nifty function, we'll still use
        // 0 as the domain initial value so that the visualization is
        // contextualized correctly
        rainScaleExtent = d3.extent(data, function (d) {
            return parseInt(d.PRCP)
        });
        // Set up the xScale, which is an extension of
        // the linear scale, but for time
        xScaleExtent = d3.extent(data, function (d) {
            return createDate(d.DATE)
        });

        // Format the scales, making them reach a bit wider
        // giving them a bit more room by multiplying the highest values
        // and lowest values
        tempScale.domain([parseInt(tempScaleMin), parseInt(tempScaleMax) * 1.1]);
        rainScale.domain([0, parseInt(rainScaleExtent[1])]);

        oneDayEarlier = function (date) {
            return date.setDate(date.getDate() - 1)
        };
        oneDayLater = function (date) {
            return date.setDate(date.getDate() + 1)
        };

        xScale.domain([oneDayEarlier(xScaleExtent[0]), oneDayLater(xScaleExtent[1])]);

        // create the x axis based on time
        viz.append('g')
            .attr('class', 'x axis')
            .attr('transform', 'translate(0,' + height + ')')
            .call(xAxis)
            .selectAll('text')
            .attr('y', 6) // move the text down 6px
            .attr('x', 6) // move the text to the right 6px
            .attr('transform', 'rotate(45)')
            .style('text-anchor', 'start');


        // create two y axis, one with the temp data on the right,
        // and one with the precipitation data on the left...
        viz.append('g')
            .attr('class', 'rain axis')
            .call(rainAxis);

        viz.append('g')
            .attr('class', 'temp axis')
            .attr('transform', 'translate(' + width + ', 0)')
            .call(tempAxis);

        // create lines representing the min, and max temp
        // for each month
        bars = viz.selectAll('g.bars')
            .data(data)
            .enter().append('g')
            .attr('class', 'bars')
            .attr('transform', function (d) {
                return 'translate(' + xScale(createDate(d.DATE)) + ','
                    + tempScale(d.TMIN) + ')'
            });

        bars.append('line')
            .attr('x1', 0)
            .attr('y1', 0)
            .attr('x2', 0)
            .attr('y2', function (d) {
                return tempScale(d.TMAX) - tempScale(d.TMIN)
            });

        // create a line representing the total precipitation
        // for each month
        rainLine = viz.append('path')
            .datum(data)
            .attr("id", "rain-line")
            .attr("d", lineGenerator);

        // create axis labels
        viz.append('text')
            .attr('transform', 'translate(' + -50 + ',' + -10 + ')' +
                'rotate(0)')
            .text('Rainfall (MM)')
            .attr('class', 'label')


        viz.append('text')
            .attr('transform', 'translate(' + width + ',' + -10 + ') ' +
                'rotate(0)')
            .text('Temp (\u2103)')
            .attr('class', 'label')

        viz.on("mousemove", vizMouseMove);

        function vizMouseMove() {
            x = d3.mouse(this)[0],
                date = xScale.invert(x),
                dateString = createString(date),
                i = bisectDate(data, dateString, 1),
                d = data[i];

            cursor = viz.select('#cursor');
            currentData = d3.select('#current-data')
                .select('h2');

            if (cursor.empty()) {
                cursor = viz.append('line')
                    .attr('id', 'cursor')
                    .attr('y1', 0)
                    .attr('y2', height);
            }
            ;
            cursor.attr('x1', x)
                .attr('x2', x)

            tempMin = d.TMIN;
            tempMin = tempMin.substr(0, tempMin.length - 1) + '.' + tempMin.substr(-1)
            tempMax = d.TMAX
            tempMax = tempMax.substr(0, tempMax.length - 1) + '.' + tempMax.substr(-1)

            displayDay = d3.time.format("%a., %b. %e, %Y");
            currentData.html("On " + displayDay(date) +
                " there was " + d.PRCP + "MM of rainfall," +
                " and a temperature ranging from " + tempMin +
                "(\u2103) to " + tempMax + "(\u2103)");


        }
    });

    function createDate(dateString) {
        // create a formatter based on how we expect
        // the data from our data set
        var format = d3.time.format("%Y%m%d");
        // create a JavaScript data object based on
        // the string
        return format.parse(dateString);
    };

    function createString(date) {
        // return a string from a date object
        var format = d3.time.format("%Y%m%d");
        return format(date)
    };
})();