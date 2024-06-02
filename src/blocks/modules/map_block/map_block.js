import $ from 'jquery';

const MapBlock = class MapBlock {
    constructor() {}
    mapContact() {
        if ($('#map').length) {
            ymaps.ready(function () {
                var myMap = new ymaps.Map('map', {
                    center: [55.782491, 37.580481],
                    zoom: 16,
                    controls: ['zoomControl', 'fullscreenControl', 'geolocationControl']
                }, {
                    searchControlProvider: 'yandex#search'
                });
            
                var myPlacemark2 = new ymaps.Placemark([55.782491, 37.580481], {
                    hintContent: 'Москва, 3-я улица Ямского поля, 18',
                    balloonContent: 'Москва, 3-я улица Ямского поля, 18'
                }, {
                    iconLayout: 'default#image',
                    iconImageHref: '../img/svg/marker.svg',
                    iconImageSize: [65, 64],
                    iconImageOffset: [-32, -64]
                });
            
                myMap.geoObjects.add(myPlacemark2);
            });
        }
    }
    init() {
        this.mapContact();
    }
}

export default MapBlock;