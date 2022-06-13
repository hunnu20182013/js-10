import './style.css';
import { Map } from 'leaflet';

// Write Javascript code!
//创建高德Map
const amap = new AMap.Map('amap', {
  fadeOnZoom: false,
  navigationMode: 'classic',
  optimizePanAnimation: false,
  animateEnable: false,
  dragEnable: false,
  zoomEnable: false,
  resizeEnable: true,
  doubleClickZoom: false,
  keyboardEnable: false,
  scrollWheel: false,
  expandZoomRange: true,
  zooms: [1, 20],
  mapStyle: 'amap://styles/1e65d329854a3cf61b568b7a4e2267fd',
  features: ['road', 'point', 'bg'],
  viewMode: '2D'
});
//创建Leaflet Map
const map = new Map('map');

map.on('zoom', evt => {
  amap.setZoom(evt.target.getZoom());
});

map.on('move', evt => {
  const pt = evt.target.getCenter();
  amap.setZoomAndCenter(evt.target.getZoom(), [pt.lng, pt.lat]);
});

map.setView([39.909186, 116.397411], 10);
