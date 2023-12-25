var wms_layers = [];

var format_dissolve_kabupaten_0 = new ol.format.GeoJSON();
var features_dissolve_kabupaten_0 = format_dissolve_kabupaten_0.readFeatures(json_dissolve_kabupaten_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_dissolve_kabupaten_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_dissolve_kabupaten_0.addFeatures(features_dissolve_kabupaten_0);
var lyr_dissolve_kabupaten_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_dissolve_kabupaten_0, 
                style: style_dissolve_kabupaten_0,
                interactive: true,
                title: '<img src="styles/legend/dissolve_kabupaten_0.png" /> dissolve_kabupaten'
            });
var format_ADMINISTRASIDESA_AR_25K_1 = new ol.format.GeoJSON();
var features_ADMINISTRASIDESA_AR_25K_1 = format_ADMINISTRASIDESA_AR_25K_1.readFeatures(json_ADMINISTRASIDESA_AR_25K_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ADMINISTRASIDESA_AR_25K_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ADMINISTRASIDESA_AR_25K_1.addFeatures(features_ADMINISTRASIDESA_AR_25K_1);
var lyr_ADMINISTRASIDESA_AR_25K_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ADMINISTRASIDESA_AR_25K_1, 
                style: style_ADMINISTRASIDESA_AR_25K_1,
                interactive: true,
                title: '<img src="styles/legend/ADMINISTRASIDESA_AR_25K_1.png" /> ADMINISTRASIDESA_AR_25K'
            });
var lyr_Clip_DAS_Wonosobo_2 = new ol.layer.Image({
                            opacity: 1,
                            title: "Clip_DAS_Wonosobo",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Clip_DAS_Wonosobo_2.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [12217403.275966, -834356.893152, 12253202.859001, -809172.954253]
                            })
                        });
var lyr_DAS_Clip_3 = new ol.layer.Image({
                            opacity: 1,
                            title: "DAS_Clip",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/DAS_Clip_3.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [12217403.275970, -834356.893149, 12253202.859003, -809172.954253]
                            })
                        });
var format_DAS_Wonosobo_Vektor_4 = new ol.format.GeoJSON();
var features_DAS_Wonosobo_Vektor_4 = format_DAS_Wonosobo_Vektor_4.readFeatures(json_DAS_Wonosobo_Vektor_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DAS_Wonosobo_Vektor_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DAS_Wonosobo_Vektor_4.addFeatures(features_DAS_Wonosobo_Vektor_4);
var lyr_DAS_Wonosobo_Vektor_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DAS_Wonosobo_Vektor_4, 
                style: style_DAS_Wonosobo_Vektor_4,
                interactive: true,
                title: '<img src="styles/legend/DAS_Wonosobo_Vektor_4.png" /> DAS_Wonosobo_Vektor'
            });

lyr_dissolve_kabupaten_0.setVisible(true);lyr_ADMINISTRASIDESA_AR_25K_1.setVisible(true);lyr_Clip_DAS_Wonosobo_2.setVisible(true);lyr_DAS_Clip_3.setVisible(true);lyr_DAS_Wonosobo_Vektor_4.setVisible(true);
var layersList = [lyr_dissolve_kabupaten_0,lyr_ADMINISTRASIDESA_AR_25K_1,lyr_Clip_DAS_Wonosobo_2,lyr_DAS_Clip_3,lyr_DAS_Wonosobo_Vektor_4];
lyr_dissolve_kabupaten_0.set('fieldAliases', {'kabupaten': 'kabupaten', });
lyr_ADMINISTRASIDESA_AR_25K_1.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_DAS_Wonosobo_Vektor_4.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', });
lyr_dissolve_kabupaten_0.set('fieldImages', {'kabupaten': 'TextEdit', });
lyr_ADMINISTRASIDESA_AR_25K_1.set('fieldImages', {'KDPPUM': 'TextEdit', 'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'KDPBPS': 'TextEdit', 'FCODE': 'TextEdit', 'LUASWH': 'TextEdit', 'UUPP': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDBPUM': 'TextEdit', 'WADMKD': 'TextEdit', 'WIADKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WIADKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WIADKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADPR': 'TextEdit', 'TIPADM': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_DAS_Wonosobo_Vektor_4.set('fieldImages', {'fid': 'TextEdit', 'DN': 'Range', });
lyr_dissolve_kabupaten_0.set('fieldLabels', {'kabupaten': 'no label', });
lyr_ADMINISTRASIDESA_AR_25K_1.set('fieldLabels', {'KDPPUM': 'no label', 'NAMOBJ': 'no label', 'REMARK': 'no label', 'KDPBPS': 'no label', 'FCODE': 'no label', 'LUASWH': 'no label', 'UUPP': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDBBPS': 'no label', 'KDBPUM': 'no label', 'WADMKD': 'no label', 'WIADKD': 'no label', 'WADMKC': 'no label', 'WIADKC': 'no label', 'WADMKK': 'no label', 'WIADKK': 'no label', 'WADMPR': 'no label', 'WIADPR': 'no label', 'TIPADM': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_DAS_Wonosobo_Vektor_4.set('fieldLabels', {'fid': 'no label', 'DN': 'no label', });
lyr_DAS_Wonosobo_Vektor_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});