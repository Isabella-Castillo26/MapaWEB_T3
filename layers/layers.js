ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32718").setExtent([-45300.170613, 9107999.817255, 202082.632855, 9457493.820452]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_ProvinciasdeCajamarca_1 = new ol.format.GeoJSON();
var features_ProvinciasdeCajamarca_1 = format_ProvinciasdeCajamarca_1.readFeatures(json_ProvinciasdeCajamarca_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32718'});
var jsonSource_ProvinciasdeCajamarca_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ProvinciasdeCajamarca_1.addFeatures(features_ProvinciasdeCajamarca_1);
var lyr_ProvinciasdeCajamarca_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ProvinciasdeCajamarca_1, 
                style: style_ProvinciasdeCajamarca_1,
                popuplayertitle: 'Provincias de Cajamarca',
                interactive: true,
                title: '<img src="styles/legend/ProvinciasdeCajamarca_1.png" /> Provincias de Cajamarca'
            });
var format_Rios_Quebradas_Cajamarca_2 = new ol.format.GeoJSON();
var features_Rios_Quebradas_Cajamarca_2 = format_Rios_Quebradas_Cajamarca_2.readFeatures(json_Rios_Quebradas_Cajamarca_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32718'});
var jsonSource_Rios_Quebradas_Cajamarca_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rios_Quebradas_Cajamarca_2.addFeatures(features_Rios_Quebradas_Cajamarca_2);
var lyr_Rios_Quebradas_Cajamarca_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rios_Quebradas_Cajamarca_2, 
                style: style_Rios_Quebradas_Cajamarca_2,
                popuplayertitle: 'Rios_Quebradas_Cajamarca',
                interactive: true,
    title: 'Rios_Quebradas_Cajamarca<br />\
    <img src="styles/legend/Rios_Quebradas_Cajamarca_2_0.png" /> Quebrada Húmeda<br />\
    <img src="styles/legend/Rios_Quebradas_Cajamarca_2_1.png" /> Quebrada Seca<br />\
    <img src="styles/legend/Rios_Quebradas_Cajamarca_2_2.png" /> Río Principal<br />\
    <img src="styles/legend/Rios_Quebradas_Cajamarca_2_3.png" /> Río Secundario<br />' });
var format_RVD_Cajamarca_3 = new ol.format.GeoJSON();
var features_RVD_Cajamarca_3 = format_RVD_Cajamarca_3.readFeatures(json_RVD_Cajamarca_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32718'});
var jsonSource_RVD_Cajamarca_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RVD_Cajamarca_3.addFeatures(features_RVD_Cajamarca_3);
var lyr_RVD_Cajamarca_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RVD_Cajamarca_3, 
                style: style_RVD_Cajamarca_3,
                popuplayertitle: 'RVD_Cajamarca',
                interactive: true,
                title: '<img src="styles/legend/RVD_Cajamarca_3.png" /> RVD_Cajamarca'
            });
var format_RVV_Cajamarca_4 = new ol.format.GeoJSON();
var features_RVV_Cajamarca_4 = format_RVV_Cajamarca_4.readFeatures(json_RVV_Cajamarca_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32718'});
var jsonSource_RVV_Cajamarca_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RVV_Cajamarca_4.addFeatures(features_RVV_Cajamarca_4);
var lyr_RVV_Cajamarca_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RVV_Cajamarca_4, 
                style: style_RVV_Cajamarca_4,
                popuplayertitle: 'RVV_Cajamarca',
                interactive: true,
                title: '<img src="styles/legend/RVV_Cajamarca_4.png" /> RVV_Cajamarca'
            });
var format_cajamarca_iiee_5 = new ol.format.GeoJSON();
var features_cajamarca_iiee_5 = format_cajamarca_iiee_5.readFeatures(json_cajamarca_iiee_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32718'});
var jsonSource_cajamarca_iiee_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_cajamarca_iiee_5.addFeatures(features_cajamarca_iiee_5);
var lyr_cajamarca_iiee_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_cajamarca_iiee_5, 
                style: style_cajamarca_iiee_5,
                popuplayertitle: 'cajamarca_iiee',
                interactive: true,
    title: 'cajamarca_iiee<br />\
    <img src="styles/legend/cajamarca_iiee_5_0.png" /> <br />' });

lyr_OSMStandard_0.setVisible(true);lyr_ProvinciasdeCajamarca_1.setVisible(true);lyr_Rios_Quebradas_Cajamarca_2.setVisible(true);lyr_RVD_Cajamarca_3.setVisible(true);lyr_RVV_Cajamarca_4.setVisible(true);lyr_cajamarca_iiee_5.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_ProvinciasdeCajamarca_1,lyr_Rios_Quebradas_Cajamarca_2,lyr_RVD_Cajamarca_3,lyr_RVV_Cajamarca_4,lyr_cajamarca_iiee_5];
lyr_ProvinciasdeCajamarca_1.set('fieldAliases', {'fid': 'fid', 'COUNT': 'COUNT', 'FIRST_IDPR': 'FIRST_IDPR', 'NOMBPROV': 'Nombre de la Provincia:', 'FIRST_NOMB': 'FIRST_NOMB', 'LAST_DCTO': 'LAST_DCTO', 'LAST_LEY': 'LAST_LEY', 'FIRST_FECH': 'FIRST_FECH', 'LAST_FECHA': 'LAST_FECHA', 'MIN_SHAPE_': 'MIN_SHAPE_', 'ha': 'ha', 'INEI': 'INEI:', 'Gobierno regional': 'Gobierno Regional de la provincia:', 'foto': 'foto turísticas', });
lyr_Rios_Quebradas_Cajamarca_2.set('fieldAliases', {'fid': 'fid', 'Rasgo_Prin': 'Rasgo_Prin', 'Rasgo_Secu': 'Rasgo_Secu', 'Nombre': 'Nombre', 'Longitud': 'Longitud', });
lyr_RVD_Cajamarca_3.set('fieldAliases', {'fid': 'fid', 'RODADURA': 'RODADURA', 'COD_DS11': 'COD_DS11', 'COD_DS12': 'COD_DS12', 'TRAY_DS12': 'TRAY_DS12', 'TRAY_DS11': 'TRAY_DS11', 'UBIGEO': 'UBIGEO', 'DEP': 'DEP', 'PROV': 'PROV', 'COD_DEP': 'COD_DEP', 'COD_PROV': 'COD_PROV', 'LONG_KM': 'LONG_KM', 'OBS': 'OBS', 'SENTIDO': 'SENTIDO', 'BASE': 'BASE', 'DATA': 'DATA', 'FECHA_ACTU': 'FECHA_ACTU', 'FUENTE': 'FUENTE', 'COD_RODADU': 'COD_RODADU', 'NOMBDIST': 'NOMBDIST', 'CAPITAL': 'CAPITAL', });
lyr_RVV_Cajamarca_4.set('fieldAliases', {'fid': 'fid', 'COD_DS11': 'COD_DS11', 'COD_DS12': 'COD_DS12', 'TRAY_DS12': 'TRAY_DS12', 'TRAY_DS11': 'TRAY_DS11', 'UBIGEO': 'UBIGEO', 'DEP': 'DEP', 'PROV': 'PROV', 'COD_DEP': 'COD_DEP', 'COD_PROV': 'COD_PROV', 'LONG_KM': 'LONG_KM', 'OBS': 'OBS', });
lyr_cajamarca_iiee_5.set('fieldAliases', {'Código Modular': 'Código Modular', 'Anexo': 'Anexo', 'Nombre de SS.EE.': 'Nombre de SS.EE.', 'Ubigeo': 'Ubigeo', 'Departamento': 'Departamento', 'Provincia': 'Provincia', 'Distrito': 'Distrito', 'Código DRE/UGEL': 'Código DRE/UGEL', 'DRE / UGEL': 'DRE / UGEL', 'Centro Poblado': 'Centro Poblado', 'Código Centro Poblado': 'Código Centro Poblado', 'Código Local': 'Código Local', 'Dirección': 'Dirección', 'Nivel / Modalidad': 'Nivel / Modalidad', 'Gestion / Dependencia': 'Gestion / Dependencia', 'Altitud': 'Altitud', 'Fuente de coordenadas': 'Fuente de coordenadas', });
lyr_ProvinciasdeCajamarca_1.set('fieldImages', {'fid': 'Hidden', 'COUNT': 'Hidden', 'FIRST_IDPR': 'TextEdit', 'NOMBPROV': 'TextEdit', 'FIRST_NOMB': 'Hidden', 'LAST_DCTO': 'Hidden', 'LAST_LEY': 'Hidden', 'FIRST_FECH': 'Hidden', 'LAST_FECHA': 'Hidden', 'MIN_SHAPE_': 'Hidden', 'ha': 'Hidden', 'INEI': 'TextEdit', 'Gobierno regional': 'TextEdit', 'foto': 'ExternalResource', });
lyr_Rios_Quebradas_Cajamarca_2.set('fieldImages', {'fid': '', 'Rasgo_Prin': '', 'Rasgo_Secu': '', 'Nombre': '', 'Longitud': '', });
lyr_RVD_Cajamarca_3.set('fieldImages', {'fid': '', 'RODADURA': '', 'COD_DS11': '', 'COD_DS12': '', 'TRAY_DS12': '', 'TRAY_DS11': '', 'UBIGEO': '', 'DEP': '', 'PROV': '', 'COD_DEP': '', 'COD_PROV': '', 'LONG_KM': '', 'OBS': '', 'SENTIDO': '', 'BASE': '', 'DATA': '', 'FECHA_ACTU': '', 'FUENTE': '', 'COD_RODADU': '', 'NOMBDIST': '', 'CAPITAL': '', });
lyr_RVV_Cajamarca_4.set('fieldImages', {'fid': '', 'COD_DS11': '', 'COD_DS12': '', 'TRAY_DS12': '', 'TRAY_DS11': '', 'UBIGEO': '', 'DEP': '', 'PROV': '', 'COD_DEP': '', 'COD_PROV': '', 'LONG_KM': '', 'OBS': '', });
lyr_cajamarca_iiee_5.set('fieldImages', {'Código Modular': '', 'Anexo': '', 'Nombre de SS.EE.': '', 'Ubigeo': '', 'Departamento': '', 'Provincia': '', 'Distrito': '', 'Código DRE/UGEL': '', 'DRE / UGEL': '', 'Centro Poblado': '', 'Código Centro Poblado': '', 'Código Local': '', 'Dirección': '', 'Nivel / Modalidad': '', 'Gestion / Dependencia': '', 'Altitud': '', 'Fuente de coordenadas': '', });
lyr_ProvinciasdeCajamarca_1.set('fieldLabels', {'fid': 'no label', 'COUNT': 'no label', 'FIRST_IDPR': 'header label - always visible', 'NOMBPROV': 'header label - always visible', 'FIRST_NOMB': 'no label', 'LAST_DCTO': 'no label', 'LAST_LEY': 'no label', 'FIRST_FECH': 'no label', 'LAST_FECHA': 'no label', 'MIN_SHAPE_': 'no label', 'ha': 'no label', 'INEI': 'header label - always visible', 'Gobierno regional': 'header label - always visible', 'foto': 'header label - always visible', });
lyr_Rios_Quebradas_Cajamarca_2.set('fieldLabels', {'fid': 'no label', 'Rasgo_Prin': 'no label', 'Rasgo_Secu': 'no label', 'Nombre': 'no label', 'Longitud': 'no label', });
lyr_RVD_Cajamarca_3.set('fieldLabels', {'fid': 'no label', 'RODADURA': 'no label', 'COD_DS11': 'no label', 'COD_DS12': 'no label', 'TRAY_DS12': 'no label', 'TRAY_DS11': 'no label', 'UBIGEO': 'no label', 'DEP': 'no label', 'PROV': 'no label', 'COD_DEP': 'no label', 'COD_PROV': 'no label', 'LONG_KM': 'no label', 'OBS': 'no label', 'SENTIDO': 'no label', 'BASE': 'no label', 'DATA': 'no label', 'FECHA_ACTU': 'no label', 'FUENTE': 'no label', 'COD_RODADU': 'no label', 'NOMBDIST': 'no label', 'CAPITAL': 'no label', });
lyr_RVV_Cajamarca_4.set('fieldLabels', {'fid': 'no label', 'COD_DS11': 'no label', 'COD_DS12': 'no label', 'TRAY_DS12': 'no label', 'TRAY_DS11': 'no label', 'UBIGEO': 'no label', 'DEP': 'no label', 'PROV': 'no label', 'COD_DEP': 'no label', 'COD_PROV': 'no label', 'LONG_KM': 'no label', 'OBS': 'no label', });
lyr_cajamarca_iiee_5.set('fieldLabels', {'Código Modular': 'no label', 'Anexo': 'no label', 'Nombre de SS.EE.': 'no label', 'Ubigeo': 'no label', 'Departamento': 'no label', 'Provincia': 'no label', 'Distrito': 'no label', 'Código DRE/UGEL': 'no label', 'DRE / UGEL': 'no label', 'Centro Poblado': 'no label', 'Código Centro Poblado': 'no label', 'Código Local': 'no label', 'Dirección': 'no label', 'Nivel / Modalidad': 'no label', 'Gestion / Dependencia': 'no label', 'Altitud': 'no label', 'Fuente de coordenadas': 'no label', });
lyr_cajamarca_iiee_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});