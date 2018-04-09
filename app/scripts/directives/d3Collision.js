/**
 * Created by lxb200709 on 2/25/17.
 */

'use strict';
angular.module('myphdresearchApp')
  .directive('d3Collision',  ['d3',function() {
    return {
      restrict: 'EA',
      scope: {
        data: "=",
        label: "@",
        onClick: "&"
      },
      link: function() {
        var width = 1680,
            height = 850;

        /* var chartDiv = document.getElementById("chart");
        var svg = d3.select(chartDiv).append("svg");
        // Extract the width and height that was computed by CSS.
        var width = chartDiv.clientWidth;
        var height = chartDiv.clientHeight;
  
        function redraw(){
          // Use the extracted size to set the size of an SVG element.
          svg
            .attr("width", width)
            .attr("height", height);
  
          // Draw an X to show that the size is correct.
          var lines = svg.selectAll("line").data([
            {x1: 0, y1: 0, x2: width, y2: height},
            {x1: 0, y1: height, x2: width, y2: 0}
          ]);
          lines
            .enter().append("line")
              .style("stroke-width", 50)
              .style("stroke-opacity", 0.4)
              .style("stroke", "black")
            .merge(lines)
              .attr("x1", function (d) { return d.x1; })
              .attr("y1", function (d) { return d.y1; })
              .attr("x2", function (d) { return d.x2; })
              .attr("y2", function (d) { return d.y2; })
            ;
        }
  
        // Draw for the first time to initialize.
        redraw();
  
        // Redraw based on the new size whenever the browser window is resized.
        window.addEventListener("resize", redraw); */

        var nodes = d3.range(200).map(function() { return {radius: Math.random() * 12 + 4}; }),
          root = nodes[0],
          color = d3.scale.category10();

        root.radius = 0;
        root.fixed = true;

        var force = d3.layout.force()
          .gravity(0.05)
          .charge(function(d, i) { return i ? 0 : -2000; })
          .nodes(nodes)
          .size([width, height]);

        force.start();

        var svg = d3.select("#collision-window").append("svg")
          .attr("width", width)
          .attr("height", height);



        svg.selectAll("circle")
          .data(nodes.slice(1))
          .enter().append("circle")
          .attr("r", function(d) { return d.radius; })
          .style("fill", function(d, i) { return color(i % 3); });

        force.on("tick", function() {
          var q = d3.geom.quadtree(nodes),
            i = 0,
            n = nodes.length;

          while (++i < n) {
            q.visit(collide(nodes[i]));
          }

          svg.selectAll("circle")
            .attr("cx", function(d) { return d.x; })
            .attr("cy", function(d) { return d.y; });
        });

        svg.on("mousemove", function() {
          var p1 = d3.mouse(this);
          root.px = p1[0];
          root.py = p1[1];
          force.resume();
        });


        function collide(node) {
          var r = node.radius + 16,
            nx1 = node.x - r,
            nx2 = node.x + r,
            ny1 = node.y - r,
            ny2 = node.y + r;
          return function(quad, x1, y1, x2, y2) {
            if (quad.point && (quad.point !== node)) {
              var x = node.x - quad.point.x,
                y = node.y - quad.point.y,
                l = Math.sqrt(x * x + y * y),
                r = node.radius + quad.point.radius;
              if (l < r) {
                l = (l - r) / l * 0.5;
                node.x -= x *= l;
                node.y -= y *= l;
                quad.point.x += x;
                quad.point.y += y;
              }
            }
            return x1 > nx2 || x2 < nx1 || y1 > ny2 || y2 < ny1;
          };
        }

      }
    };
  }]);
