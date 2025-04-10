export class ShowElementOnScroll {

    constructor(el, position, classname){
        this.$el = $(el);
        this.$window = $(window);
        this.position = position;
        this.classname = classname;
        this.init();
    }

    init(){
        this.$window.on('scroll touchmove', ()=>{
            const scrollTop = this.getScrollTop();
            this.ctrClassname(scrollTop, this.classname);
        });
    }

    getScrollTop(){
        return this.$window.scrollTop();
    }

    ctrClassname(scrollTop, classname){
		if( scrollTop > this.position ){
			this.$el.addClass(classname);
		}else{
			this.$el.removeClass(classname);
		}
    }

}