var wms_layers = [];

    var projection_Basemap_0 = ol.proj.get('EPSG:3857');
    var projectionExtent_Basemap_0 = projection_Basemap_0.getExtent();
    var size_Basemap_0 = ol.extent.getWidth(projectionExtent_Basemap_0) / 256;
    var resolutions_Basemap_0 = new Array(14);
    var matrixIds_Basemap_0 = new Array(14);
    for (var z = 0; z < 14; ++z) {
        // generate resolutions and matrixIds arrays for this WMTS
        resolutions_Basemap_0[z] = size_Basemap_0 / Math.pow(2, z);
        matrixIds_Basemap_0[z] = z;
    }
    var lyr_Basemap_0 = new ol.layer.Tile({
                            source: new ol.source.WMTS(({
                              url: "https://api.mapbox.com/styles/v1/coronadom2294/cjg67oj2j03dk2rqic36b6e9b/wmts?access_token=pk.eyJ1IjoiY29yb25hZG9tMjI5NCIsImEiOiJjamc2NjVnbW8wZXBoMnFsaHdhYWFvNWRjIn0.sqeyDBeYRC0EFjqFaYUFqA",
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
                                "layer": "cjg67oj2j03dk2rqic36b6e9b",
                                "TILED": "true",
             matrixSet: 'EPSG:3857',
             format: 'image/png',
              projection: projection_Basemap_0,
              tileGrid: new ol.tilegrid.WMTS({
                origin: ol.extent.getTopLeft(projectionExtent_Basemap_0),
                resolutions: resolutions_Basemap_0,
                matrixIds: matrixIds_Basemap_0
              }),
              style: 'default',
              wrapX: true,
                                "VERSION": "1.0.0",
                            })),
                            title: "Basemap",
                            opacity: 1.0,
                            
                            
                          });var format_OpportunityZones_1 = new ol.format.GeoJSON();
var features_OpportunityZones_1 = format_OpportunityZones_1.readFeatures(json_OpportunityZones_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OpportunityZones_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_OpportunityZones_1.addFeatures(features_OpportunityZones_1);var lyr_OpportunityZones_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_OpportunityZones_1, 
                style: style_OpportunityZones_1,
                title: '<img src="styles/legend/OpportunityZones_1.png" /> Opportunity Zones'
            });var format_cb_2017_us_county_5m_2 = new ol.format.GeoJSON();
var features_cb_2017_us_county_5m_2 = format_cb_2017_us_county_5m_2.readFeatures(json_cb_2017_us_county_5m_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_cb_2017_us_county_5m_2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_cb_2017_us_county_5m_2.addFeatures(features_cb_2017_us_county_5m_2);var lyr_cb_2017_us_county_5m_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_cb_2017_us_county_5m_2, 
                style: style_cb_2017_us_county_5m_2,
                title: '<img src="styles/legend/cb_2017_us_county_5m_2.png" /> cb_2017_us_county_5m'
            });

lyr_Basemap_0.setVisible(true);lyr_OpportunityZones_1.setVisible(true);lyr_cb_2017_us_county_5m_2.setVisible(true);
var layersList = [lyr_Basemap_0,lyr_OpportunityZones_1,lyr_cb_2017_us_county_5m_2];
lyr_OpportunityZones_1.set('fieldAliases', {'GEOID10': 'GEOID10', 'STATENAME': 'STATENAME', 'COUNTYNAME': 'COUNTYNAME', 'QOZ': 'QOZ', });
lyr_cb_2017_us_county_5m_2.set('fieldAliases', {'STATEFP': 'STATEFP', 'COUNTYFP': 'COUNTYFP', 'COUNTYNS': 'COUNTYNS', 'AFFGEOID': 'AFFGEOID', 'GEOID': 'GEOID', 'NAME': 'NAME', 'LSAD': 'LSAD', 'ALAND': 'ALAND', 'AWATER': 'AWATER', });
lyr_OpportunityZones_1.set('fieldImages', {'GEOID10': 'TextEdit', 'STATENAME': 'TextEdit', 'COUNTYNAME': 'TextEdit', 'QOZ': 'TextEdit', });
lyr_cb_2017_us_county_5m_2.set('fieldImages', {'STATEFP': 'TextEdit', 'COUNTYFP': 'TextEdit', 'COUNTYNS': 'TextEdit', 'AFFGEOID': 'TextEdit', 'GEOID': 'TextEdit', 'NAME': 'TextEdit', 'LSAD': 'TextEdit', 'ALAND': 'TextEdit', 'AWATER': 'TextEdit', });
lyr_OpportunityZones_1.set('fieldLabels', {'GEOID10': 'no label', 'STATENAME': 'no label', 'COUNTYNAME': 'no label', 'QOZ': 'no label', });
lyr_cb_2017_us_county_5m_2.set('fieldLabels', {'STATEFP': 'no label', 'COUNTYFP': 'no label', 'COUNTYNS': 'no label', 'AFFGEOID': 'no label', 'GEOID': 'no label', 'NAME': 'no label', 'LSAD': 'no label', 'ALAND': 'no label', 'AWATER': 'no label', });
lyr_cb_2017_us_county_5m_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});