var APP_DATA = {
  "scenes": [
    {
      "id": "0-winter",
      "name": "Winter",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 3749,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.015493586325096231,
          "pitch": 0.030040838380031687,
          "rotation": 6.283185307179586,
          "target": "1-fall"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.4392351570298576,
          "pitch": 0.13682251793503397,
          "title": "CobbsHill Researvoir",
          "text": "Text"
        }
      ]
    },
    {
      "id": "1-fall",
      "name": "Fall",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 3750,
      "initialViewParameters": {
        "yaw": 0.07675806520738959,
        "pitch": 0.013038644092910445,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.07675806520738959,
          "pitch": 0.013038644092910445,
          "rotation": 0,
          "target": "0-winter"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "CobbsHill_Demo",
  "settings": {
    "mouseViewMode": "qtvr",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
