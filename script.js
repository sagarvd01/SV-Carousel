var BG = (function(d,w){
    if(!typeof w || !typeof d) return;
    let options;
    let interval;
    init = function(obj){
        options = {};
        obj = (obj || {});
        options.interval = obj.hasOwnProperty('interval') ? obj.interval : 7000;
        options.count = obj.hasOwnProperty('count') ? obj.count : document.querySelectorAll('.slide').length;
        return this;
    }
    startSlide = function(){
        if(!typeof options) return;
        let index = 1;
        interval = w.setInterval( () => {
            if(index <= parseInt(options.count) - 1){
                let element = d.querySelector('.slide-active:nth-child('+index+')');
                element.classList.remove('slide-active');
                element.nextElementSibling.classList.add('slide-active');
                index++;
            }
            else{
                d.querySelector('.slide-active:nth-child('+index+')').classList.remove('slide-active');
                d.querySelector('.slide:nth-child(1)').classList.add('slide-active');
                index = 1;
            }
        },options.interval);
    };
    stopSlide = function(){
        w.clearInterval(interval);
    };
    return this;
})(document, window)
