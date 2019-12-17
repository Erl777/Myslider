
let slide_arr = document.querySelectorAll('.slide');

let but_left = document.createElement('svg');
but_left.innerHTML = `<svg version="1.1" id="left" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px"
         viewBox="0 0 512.003 512.003" style="width: 40px; height: 40px; transform: rotate(180deg)" xml:space="preserve">
\t<polygon style="fill:#A4C2F7;" points="432.764,256.003 79.24,499.813 79.24,260.441 79.24,12.194 \t"/>
        <polygon style="fill:#E3E7F2;" points="79.24,54.227 79.24,457.78 371.811,256.003 \t"/>
        <path style="fill:#428DFF;" d="M79.24,512.003c-3.234,0.003-6.336-1.281-8.623-3.567c-2.287-2.287-3.57-5.389-3.567-8.623V12.194
\t\tc-0.002-4.532,2.51-8.69,6.522-10.797c4.012-2.107,8.862-1.814,12.591,0.761l353.524,243.81c3.299,2.276,5.268,6.028,5.268,10.036
\t\tc0,4.008-1.969,7.759-5.268,10.036L86.162,509.849C84.126,511.251,81.712,512.003,79.24,512.003z M91.43,35.408v441.19
\t\tl319.863-220.595L91.43,35.408z"/>

</svg>`;
let but_right = document.createElement('svg');
but_right.innerHTML = `<svg version="1.1" id="right" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px"
         viewBox="0 0 512.003 512.003" style="width: 40px; height: 40px" xml:space="preserve">

\t<polygon style="fill:#A4C2F7;" points="432.764,256.003 79.24,499.813 79.24,260.441 79.24,12.194 \t"/>
        <polygon style="fill:#E3E7F2;" points="79.24,54.227 79.24,457.78 371.811,256.003 \t"/>
        <path style="fill:#428DFF;" d="M79.24,512.003c-3.234,0.003-6.336-1.281-8.623-3.567c-2.287-2.287-3.57-5.389-3.567-8.623V12.194
\t\tc-0.002-4.532,2.51-8.69,6.522-10.797c4.012-2.107,8.862-1.814,12.591,0.761l353.524,243.81c3.299,2.276,5.268,6.028,5.268,10.036
\t\tc0,4.008-1.969,7.759-5.268,10.036L86.162,509.849C84.126,511.251,81.712,512.003,79.24,512.003z M91.43,35.408v441.19
\t\tl319.863-220.595L91.43,35.408z"/>

</svg>`;

class Slider {

    constructor( number_of_slides, autoplay, buttons ) {
        this.count = 0;
        this.max = number_of_slides - 1;
        this.autoplay = autoplay;
        this.min = 0;
        this.str = '00%';
        this.buttons = buttons;
    }

    method1() {

        if (this.buttons === true){
            let slider = document.querySelector('.slider');
            slider.appendChild(but_left);
            slider.appendChild(but_right);

            let right = document.getElementById('right');
            right.addEventListener('click', this.move_r);

            let left = document.getElementById('left');
            left.addEventListener('click', this.move_l);

        }

        if(this.autoplay === true){
            let timerId = setInterval( this.move_r, 2000  );
        }


    }

    move_r = () => {

        this.count++;

        if (this.count > this.max) {
            this.count = this.min;
            for(let i=0; i < slide_arr.length; i++){
                let elem = slide_arr[i];
                    elem.style.transform = 'translate(0%)';
            }
        }

        for(let i=0; i < slide_arr.length; i++){
            let elem = slide_arr[i];

            let translate_val = '-' + this.count + this.str;
            elem.style.transform = `translate(${translate_val})`;

        }

    };

    move_l = () => {

        this.count--;

        if (this.count < this.min) {
            this.count = this.max;
            for(let i=0; i < slide_arr.length; i++){
                let elem = slide_arr[i];

                let translate_val = '-' + this.max + this.str;
                elem.style.transform = `translate(${translate_val})`;

            }
        }

        console.log(this.count);

        for(let i=0; i < slide_arr.length; i++){
            let elem = slide_arr[i];

            let translate_val = '-' + this.count + this.str;
            elem.style.transform = `translate(${translate_val})`;

        }

    };

    initialize() {

        this.method1();

    }

}

let slider = new Slider(4, false, true);
slider.initialize();