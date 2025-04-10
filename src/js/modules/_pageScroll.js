export class PageScroll {

    constructor(el ,duration, num, easing = 'swing'){
        this.$el = $(el);
        this.duration = duration;
        this.easing = easing;
        this.num = num;
        this.event();
    }

    event(){
        this.$el.on('click', (e) => {
            e.preventDefault();
            const hash = $(e.currentTarget).attr('href');
            this.animation(hash);
        });
    }

    animation(hash){
        $('html,body').animate({ scrollTop: $(hash).offset().top - this.num}, this.duration, this.easing);
    }
	
}