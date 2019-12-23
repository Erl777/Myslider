


class Slider {

    constructor( settings ) {

        const init =  settings || {};
        console.log(settings);
        this.settings = {
            number_of_slides : document.querySelectorAll('.js-slide').length,
            autoplay : init.autoplay || false,
            buttons : init.buttons === undefined ? true : init.buttons,
            speed : init.speed || 2000
        };
        console.log(this.settings);
        this.count = 0;
        this.max = this.settings.number_of_slides - 1;
        this.min = 0;
        this.str = '00%';

        this.slide_arr = document.querySelectorAll('.js-slide');
        this.svg_l = '<svg version="1.1" id="left" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px"\n         viewBox="0 0 512.003 512.003" style="width: 40px; height: 40px; transform: rotate(180deg)" xml:space="preserve">\n\t<polygon style="fill:#A4C2F7;" points="432.764,256.003 79.24,499.813 79.24,260.441 79.24,12.194 \t"/>\n        <polygon style="fill:#E3E7F2;" points="79.24,54.227 79.24,457.78 371.811,256.003 \t"/>\n        <path style="fill:#428DFF;" d="M79.24,512.003c-3.234,0.003-6.336-1.281-8.623-3.567c-2.287-2.287-3.57-5.389-3.567-8.623V12.194\n\t\tc-0.002-4.532,2.51-8.69,6.522-10.797c4.012-2.107,8.862-1.814,12.591,0.761l353.524,243.81c3.299,2.276,5.268,6.028,5.268,10.036\n\t\tc0,4.008-1.969,7.759-5.268,10.036L86.162,509.849C84.126,511.251,81.712,512.003,79.24,512.003z M91.43,35.408v441.19\n\t\tl319.863-220.595L91.43,35.408z"/>\n\n</svg>';
        this.svg_r = '<svg version="1.1" id="right" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px"\n         viewBox="0 0 512.003 512.003" style="width: 40px; height: 40px" xml:space="preserve">\n\n\t<polygon style="fill:#A4C2F7;" points="432.764,256.003 79.24,499.813 79.24,260.441 79.24,12.194 \t"/>\n        <polygon style="fill:#E3E7F2;" points="79.24,54.227 79.24,457.78 371.811,256.003 \t"/>\n        <path style="fill:#428DFF;" d="M79.24,512.003c-3.234,0.003-6.336-1.281-8.623-3.567c-2.287-2.287-3.57-5.389-3.567-8.623V12.194\n\t\tc-0.002-4.532,2.51-8.69,6.522-10.797c4.012-2.107,8.862-1.814,12.591,0.761l353.524,243.81c3.299,2.276,5.268,6.028,5.268,10.036\n\t\tc0,4.008-1.969,7.759-5.268,10.036L86.162,509.849C84.126,511.251,81.712,512.003,79.24,512.003z M91.43,35.408v441.19\n\t\tl319.863-220.595L91.43,35.408z"/>\n\n</svg>';

    }

    method1() {

        if (this.settings.buttons === true){
            let slider = document.querySelector('.js-slider');
            slider.insertAdjacentHTML('beforeEnd', this.svg_l);
            slider.insertAdjacentHTML('beforeEnd', this.svg_r);

            let right = document.getElementById('right');
            right.addEventListener('click', this.move_r);

            let left = document.getElementById('left');
            left.addEventListener('click', this.move_l);

        }

        if(this.settings.autoplay === true){
            let timerId = setInterval( this.move_r, this.settings.speed );
        }


    }

    move_r = () => {

        this.count++;
        if (this.count > this.max) {
            this.count = this.min;
            for(let i=0; i < this.slide_arr.length; i++){
                let elem = this.slide_arr[i];
                    elem.style.transform = 'translate(0%)';
            }
        }

        for(let i=0; i < this.slide_arr.length; i++){
            let elem = this.slide_arr[i];

            let translate_val = '-' + this.count + this.str;
            elem.style.transform = `translate(${translate_val})`;

        }

    };

    move_l = () => {

        this.count--;

        if (this.count < this.min) {
            this.count = this.max;
            for(let i=0; i < this.slide_arr.length; i++){
                let elem = this.slide_arr[i];

                let translate_val = '-' + this.max + this.str;
                elem.style.transform = `translate(${translate_val})`;

            }
        }

        for(let i=0; i < this.slide_arr.length; i++){
            let elem = this.slide_arr[i];

            let translate_val = '-' + this.count + this.str;
            elem.style.transform = `translate(${translate_val})`;

        }

    };

    initialize() {

        this.method1();

    }

}

let slider = new Slider({
    // number_of_slides : 4,
    // autoplay : true,
    // buttons : false,
    // speed : 1000
});
slider.initialize();