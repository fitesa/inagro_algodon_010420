var size = 0;
var placement = 'point';

var style_IndicedeVegetacion_4 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("NDVI");
    var labelText = "";
    size = 0;
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    if (value >= 0.086732 && value <= 0.215904) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(215,25,28,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 0.215904 && value <= 0.345076) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(253,174,97,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 0.345076 && value <= 0.474248) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(255,255,191,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 0.474248 && value <= 0.603421) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(171,221,164,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 0.603421 && value <= 0.732593) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(43,131,186,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    };

    return style;
};
