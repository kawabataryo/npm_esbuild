import { isDevice } from "./modules/_isDevice";
import { ShowElementOnScroll } from "./modules/_showElementOnScroll";
// import jquery from "jquery";
// window.$ = window.jQuery = jquery;


console.log(isDevice());
// console.log($('#test'));

window.matchMedia('(orientation: landscape)').addEventListener('change', function(e){
	if(e.matchs){
		location.reload();
	}else{
		location.reload();
	}
});