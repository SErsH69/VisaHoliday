import lightGallery from 'lightgallery';
import lgVideo from 'lightgallery/plugins/video/lg-video.es5.js';

const BlogBlock = class BlogBlock {
    constructor(){}
    initGallery() {
        document.addEventListener("DOMContentLoaded", function() {
            const lightgalleryElements = document.querySelectorAll('.js-light_gal');
            for (let i = 0; i < lightgalleryElements.length; i++) {
                lightGallery(lightgalleryElements[i], {
                    plugins: [lgVideo],
                    speed: 500,
                    selector: 'a'
                });
            }
        });
    }
    init() {
        this.initGallery();
    }
}

export default BlogBlock;