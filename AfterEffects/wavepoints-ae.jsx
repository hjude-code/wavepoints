/*
After Effects Script: Create Circular Shape Layer

Description:
This script creates a new shape layer with a circular path containing 15 points.

Instructions:
1. Run this script in After Effects.
*/

(function() {
    if (!app) {
        alert("After Effects not running.");
        return;
    }

    var comp = app.project.activeItem;
    if (!comp || !(comp instanceof CompItem)) {
        alert("Please open a composition.");
        return;
    }

    comp.layers.addShape(); // Create a new shape layer
    var newShapeLayer = comp.selectedLayers[0];
    alert(newShapeLayer.name)
    

    var rootGroup = newShapeLayer.addProperty("ADBE Vector Shape Group");

    // var shapeGroup = rootGroup.addProperty("ADBE Vector Shape Group");

    // // Add this line to create the path property
    // var shapePath = shapeGroup.property("ADBE Vectors Group").addProperty("ADBE Vector Shape - Path");

    // var numPoints = 15;
    // var radius = 150; // Adjust the radius as needed
    // var center = [comp.width / 2, comp.height / 2]; // Center of the composition

    // var points = [];
    // var inTangents = [];
    // var outTangents = [];
    // var closed = true;

    // for (var i = 0; i < numPoints; i++) {
    //     var angle = (i / numPoints) * 2 * Math.PI;
    //     var x = center[0] + radius * Math.cos(angle);
    //     var y = center[1] + radius * Math.sin(angle);
    //     points.push([x, y]);

    //     // Calculate tangents for smooth curves (optional)
    //     var tangentLength = radius * 0.55; // Adjust for curve smoothness
    //     var inTangentX = x + tangentLength * Math.cos(angle - Math.PI / 2);
    //     var inTangentY = y + tangentLength * Math.sin(angle - Math.PI / 2);
    //     var outTangentX = x + tangentLength * Math.cos(angle + Math.PI / 2);
    //     var outTangentY = y + tangentLength * Math.sin(angle + Math.PI / 2);

    //     inTangents.push([inTangentX, inTangentY]);
    //     outTangents.push([outTangentX, outTangentY]);
    // }

    // var pathValue = {
    //     points: points,
    //     inTangents: inTangents,
    //     outTangents: outTangents,
    //     closed: closed
    // };

    // shapePath.property("ADBE Vector Shape").setValue(pathValue);

})();