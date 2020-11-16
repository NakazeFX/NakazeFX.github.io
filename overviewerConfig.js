var overviewerConfig = {
    "CONST": {
        "tileSize": 384,
        "image": {
            "defaultMarker": "signpost.png",
            "signMarker": "signpost_icon.png",
            "bedMarker": "bed.png",
            "spawnMarker": "markers/marker_home.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "queryMarker": "markers/marker_location.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "3": "compass_lower-left.png",
                "2": "compass_lower-right.png"
            }
        },
        "mapDivId": "mcmap",
        "UPPERLEFT": 0,
        "UPPERRIGHT": 1,
        "LOWERLEFT": 3,
        "LOWERRIGHT": 2
    },
    "worlds": [
        "RF_MC - overworld"
    ],
    "map": {
        "debug": false,
        "cacheTag": "1605541319",
        "north_direction": "lower-left",
        "controls": {
            "pan": true,
            "zoom": true,
            "spawn": true,
            "compass": true,
            "mapType": true,
            "overlays": true,
            "coordsBox": true
        }
    },
    "tilesets": [
        {
            "name": "RF_MC Day",
            "zoomLevels": 6,
            "defaultZoom": 1,
            "maxZoom": 6,
            "path": "Day",
            "base": "",
            "bgcolor": "#1a1a1a",
            "world": "RF_MC - overworld",
            "last_rendertime": 1605526696,
            "imgextension": "png",
            "isOverlay": false,
            "poititle": "Markers",
            "showlocationmarker": true,
            "center": [
                240,
                64,
                169
            ],
            "minZoom": 0,
            "spawn": [
                240,
                64,
                169
            ],
            "north_direction": 0
        },
        {
            "name": "RF_MC Night",
            "zoomLevels": 6,
            "defaultZoom": 1,
            "maxZoom": 6,
            "path": "Night",
            "base": "",
            "bgcolor": "#1a1a1a",
            "world": "RF_MC - overworld",
            "last_rendertime": 1605526696,
            "imgextension": "png",
            "isOverlay": false,
            "poititle": "Markers",
            "showlocationmarker": true,
            "center": [
                240,
                64,
                169
            ],
            "minZoom": 0,
            "spawn": [
                240,
                64,
                169
            ],
            "north_direction": 0
        },
        {
            "name": "RF_MC Cave",
            "zoomLevels": 6,
            "defaultZoom": 1,
            "maxZoom": 6,
            "path": "Cave",
            "base": "",
            "bgcolor": "#1a1a1a",
            "world": "RF_MC - overworld",
            "last_rendertime": 1605526696,
            "imgextension": "png",
            "isOverlay": false,
            "poititle": "Markers",
            "showlocationmarker": true,
            "center": [
                240,
                64,
                169
            ],
            "minZoom": 0,
            "spawn": [
                240,
                64,
                169
            ],
            "north_direction": 0
        }
    ]
};
