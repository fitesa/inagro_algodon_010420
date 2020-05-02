var size = 0;
var placement = 'point';

var style_EvolucionIndicedeHumedad_1 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("E_NDMI");
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
    if (value >= -0.137455 && value <= -0.067651) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(253,231,37,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= -0.067651 && value <= 0.002154) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(93,201,98,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 0.002154 && value <= 0.071958) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(32,144,141,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 0.071958 && value <= 0.141763) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(58,82,139,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 0.141763 && value <= 0.211568) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(68,1,84,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    };

    return style;
};
