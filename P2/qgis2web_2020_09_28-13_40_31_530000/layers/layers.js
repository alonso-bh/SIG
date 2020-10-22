var wms_layers = [];
var format_pantanosGR_0 = new ol.format.GeoJSON();
var features_pantanosGR_0 = format_pantanosGR_0.readFeatures(json_pantanosGR_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pantanosGR_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_pantanosGR_0.addFeatures(features_pantanosGR_0);var lyr_pantanosGR_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_pantanosGR_0, 
                style: style_pantanosGR_0,
                title: '<img src="styles/legend/pantanosGR_0.png" /> pantanos GR'
            });var format_redhidrograficaGR_1 = new ol.format.GeoJSON();
var features_redhidrograficaGR_1 = format_redhidrograficaGR_1.readFeatures(json_redhidrograficaGR_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_redhidrograficaGR_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_redhidrograficaGR_1.addFeatures(features_redhidrograficaGR_1);var lyr_redhidrograficaGR_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_redhidrograficaGR_1, 
                style: style_redhidrograficaGR_1,
                title: '<img src="styles/legend/redhidrograficaGR_1.png" /> red hidrografica GR'
            });var format_municipioscensoGR_2 = new ol.format.GeoJSON();
var features_municipioscensoGR_2 = format_municipioscensoGR_2.readFeatures(json_municipioscensoGR_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_municipioscensoGR_2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_municipioscensoGR_2.addFeatures(features_municipioscensoGR_2);var lyr_municipioscensoGR_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_municipioscensoGR_2, 
                style: style_municipioscensoGR_2,
    title: 'municipios censo GR<br />\
    <img src="styles/legend/municipioscensoGR_2_0.png" />  2 - 40 <br />\
    <img src="styles/legend/municipioscensoGR_2_1.png" />  40 - 84 <br />\
    <img src="styles/legend/municipioscensoGR_2_2.png" />  84 - 180 <br />\
    <img src="styles/legend/municipioscensoGR_2_3.png" />  180 - 324 <br />\
    <img src="styles/legend/municipioscensoGR_2_4.png" />  324 - 544 <br />'
        });

lyr_pantanosGR_0.setVisible(true);lyr_redhidrograficaGR_1.setVisible(true);lyr_municipioscensoGR_2.setVisible(true);
var layersList = [lyr_pantanosGR_0,lyr_redhidrograficaGR_1,lyr_municipioscensoGR_2];
lyr_pantanosGR_0.set('fieldAliases', {'id_emb': 'id_emb', 'nombre': 'nombre', 'shape_leng': 'shape_leng', 'cod_ent': 'cod_ent', 'cota_mxem': 'cota_mxem', 'shape_le_1': 'shape_le_1', 'shape_area': 'shape_area', });
lyr_redhidrograficaGR_1.set('fieldAliases', {'nombre': 'nombre', 'jerarquÃ½a': 'jerarquÃ½a', 'shape_leng': 'shape_leng', 'cod_ent': 'cod_ent', 'shape_le_1': 'shape_le_1', });
lyr_municipioscensoGR_2.set('fieldAliases', {'municipio': 'municipio', 'provincia': 'provincia', 'cod_ent': 'cod_ent', 'shape_leng': 'shape_leng', 'shape_area': 'shape_area', 'cod_mun': 'cod_mun', 'Superficie': 'Superficie', 'Ce2014T': 'Ce2014T', 'Ce2014H': 'Ce2014H', 'Ce2014M': 'Ce2014M', 'Ce2015T': 'Ce2015T', 'Ce2015H': 'Ce2015H', 'Ce2015M': 'Ce2015M', 'Ce2016T': 'Ce2016T', 'Ce2016H': 'Ce2016H', 'Ce2016M': 'Ce2016M', 'Ce2017T': 'Ce2017T', 'Ce2017H': 'Ce2017H', 'Ce2017M': 'Ce2017M', 'Ce2018T': 'Ce2018T', 'Ce2018H': 'Ce2018H', 'Ce2018M': 'Ce2018M', '2018a15T': '2018a15T', });
lyr_pantanosGR_0.set('fieldImages', {'id_emb': 'TextEdit', 'nombre': 'TextEdit', 'shape_leng': 'TextEdit', 'cod_ent': 'TextEdit', 'cota_mxem': 'TextEdit', 'shape_le_1': 'TextEdit', 'shape_area': 'TextEdit', });
lyr_redhidrograficaGR_1.set('fieldImages', {'nombre': 'TextEdit', 'jerarquÃ½a': 'TextEdit', 'shape_leng': 'TextEdit', 'cod_ent': 'TextEdit', 'shape_le_1': 'TextEdit', });
lyr_municipioscensoGR_2.set('fieldImages', {'municipio': 'TextEdit', 'provincia': 'TextEdit', 'cod_ent': 'TextEdit', 'shape_leng': 'TextEdit', 'shape_area': 'TextEdit', 'cod_mun': 'TextEdit', 'Superficie': 'TextEdit', 'Ce2014T': 'TextEdit', 'Ce2014H': 'TextEdit', 'Ce2014M': 'TextEdit', 'Ce2015T': 'TextEdit', 'Ce2015H': 'TextEdit', 'Ce2015M': 'TextEdit', 'Ce2016T': 'TextEdit', 'Ce2016H': 'TextEdit', 'Ce2016M': 'TextEdit', 'Ce2017T': 'TextEdit', 'Ce2017H': 'TextEdit', 'Ce2017M': 'TextEdit', 'Ce2018T': 'TextEdit', 'Ce2018H': 'TextEdit', 'Ce2018M': 'TextEdit', '2018a15T': 'TextEdit', });
lyr_pantanosGR_0.set('fieldLabels', {'id_emb': 'no label', 'nombre': 'no label', 'shape_leng': 'no label', 'cod_ent': 'no label', 'cota_mxem': 'no label', 'shape_le_1': 'no label', 'shape_area': 'no label', });
lyr_redhidrograficaGR_1.set('fieldLabels', {'nombre': 'no label', 'jerarquÃ½a': 'no label', 'shape_leng': 'no label', 'cod_ent': 'no label', 'shape_le_1': 'no label', });
lyr_municipioscensoGR_2.set('fieldLabels', {'municipio': 'no label', 'provincia': 'no label', 'cod_ent': 'no label', 'shape_leng': 'no label', 'shape_area': 'no label', 'cod_mun': 'no label', 'Superficie': 'no label', 'Ce2014T': 'no label', 'Ce2014H': 'no label', 'Ce2014M': 'no label', 'Ce2015T': 'no label', 'Ce2015H': 'no label', 'Ce2015M': 'no label', 'Ce2016T': 'no label', 'Ce2016H': 'no label', 'Ce2016M': 'no label', 'Ce2017T': 'no label', 'Ce2017H': 'no label', 'Ce2017M': 'no label', 'Ce2018T': 'no label', 'Ce2018H': 'no label', 'Ce2018M': 'no label', '2018a15T': 'no label', });
lyr_municipioscensoGR_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});