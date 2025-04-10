export class Pjax {

	constructor(link, target, delaytime){
		this.link = link;
		this.target = target;
		this.delaytime = delaytime;
		this.els = document.querySelectorAll(link);
		this.init();
	}

	init(){
		window.addEventListener("load", () => {
			this.onLoad();
		});

		this.els.forEach((link) => {
			link.addEventListener('click', (e) => {
				this.onClick(e, e.target);
			});
		});

		window.addEventListener('popstate',(e) => {
			this.onPopState(e);
		});
	}

	onClick(e, self){
		e.preventDefault();
		const path = self.getAttribute('href');
		const title = '';
		if(path === ''){
			console.log(false);
		}else{
			this.beforeFetch();

			history.pushState(this.pushStateObj(path), title, path);
			setTimeout(() => {
				this.getData(path);
			}, this.delaytime);
		}
	}

	onPopState(e){
		this.beforeFetch();
		setTimeout(() => {
			this.getData(this.getTarget(e));
		}, this.delaytime)
	}

	getData(path){
		const promise = fetch(path);
		promise.then((response) => {
			return response.text();
		}).then((data) => {
			const Parser = new DOMParser();
			const html = Parser.parseFromString(data, "text/html");
			this.changeTitle(html);
			this.changeBodyClass(html);
			this.changeContents(html);
			this.afterFetch();
		});
	}

	pushStateObj(path){
		const state = {'path': path};
		return state;
	}

	getTarget(e){
		const state = e.state;
		return state.path;
	}

	changeTitle(html){
		const el = html.querySelector('title');
		const nextTitle = el.innerText;
		document.title = nextTitle;
	}
	changeBodyClass(html){
		const htmlBody = html.querySelector('body');
		const el = document.querySelector('body');
		const bodyClassList = htmlBody.classList['value'];
		el.setAttribute('class', bodyClassList);
	}

	changeContents(html){
		const htmlTarget = html.querySelector(this.target);
		const el = document.querySelector(this.target);
		const nextContents =  htmlTarget.innerHTML;
		el.innerHTML = nextContents;
	}

	onLoad(){}

	beforeFetch(){}

	afterFetch(){}

}
