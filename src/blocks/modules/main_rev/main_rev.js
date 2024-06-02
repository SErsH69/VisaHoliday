import $ from 'jquery';
import 'slick-carousel';

const MainRev = class MainRev {
    constructor(){}
    initSlider() {
        document.addEventListener('DOMContentLoaded', () => {
            $('.js-rev-slider').slick({
                slidesToShow: 4,
                slidesToScroll: 1,
                arrows: true,
                infinite: true,
                dots: false,
                responsive: [
                  {
                    breakpoint: 768,
                    settings: {
                      slidesToShow: 1,
                      arrows: false,
                      variableWidth: true
                    }
                  },
                ]
            });
        });
    }
    init() {
        this.initSlider();
    }
}

export default MainRev;