// Accueil JavaScript	
const buttons = document.querySelectorAll(".toggle-btn");
const imgs = document.querySelectorAll(".img-btn");

buttons.forEach(button => {

	button.addEventListener("click", () => { 

		const target = document.getElementById(button.dataset.target);
		const isOpen = target.classList.contains("show");

		document.querySelectorAll(".content").forEach(el => {
			el.classList.remove("unshow");
		});

		document.querySelectorAll(".toggle-btn").forEach(btn => {
			btn.classList.add("unshow");
		});

		if(isOpen) {

			if (button.dataset.target == "subDesc") {
				document.getElementById("img2").classList.remove("unshow");
				document.getElementById("title").classList.remove("unshow");
				document.getElementById("title2").classList.remove("unshow");
				document.getElementById("title1").classList.remove("unshow");

				document.querySelectorAll(".toggle-btn").forEach(btn => {
					btn.classList.remove("unshow");
				});
				button.classList.remove("bx-list-minus");
				button.classList.add("bx-list-plus");	

				target.classList.remove("show");

			} else {

				document.getElementById("img1").classList.remove("unshow");
				document.getElementById("title").classList.remove("unshow");
				document.getElementById("title1").classList.remove("unshow");
				document.getElementById("title2").classList.remove("unshow");

				document.querySelectorAll(".toggle-btn").forEach(btn => {
					btn.classList.remove("unshow");
				});
				button.classList.remove("bx-list-minus");
				button.classList.add("bx-list-plus");

				target.classList.remove("show");

			}

		} else {

			if (button.dataset.target == "subDesc") {
		
				document.getElementById("img2").classList.add("unshow");
				document.getElementById("title").classList.add("unshow");
				document.getElementById("title2").classList.add("unshow");
				document.getElementById("title1").classList.add("unshow");

				button.classList.remove("bx-list-plus");
				button.classList.add("bx-list-minus");
				button.classList.remove("unshow");

				target.classList.add("show");
	
			} else {

				document.getElementById("img1").classList.add("unshow");
				document.getElementById("title").classList.add("unshow");
				document.getElementById("title1").classList.add("unshow");
				document.getElementById("title2").classList.add("unshow");

				button.classList.remove("bx-list-plus");
				button.classList.add("bx-list-minus");
				button.classList.remove("unshow");

				target.classList.add("show");

			}

		}

	});	
});

imgs.forEach(img => {

	img.addEventListener("click", () => { 

		const target = document.getElementById(img.dataset.target);
		const isOpen = target.classList.contains("show");
		var button = (img.dataset.target =="subDesc") ? document.getElementById("btn1"):document.getElementById("btn2");

		document.querySelectorAll(".content").forEach(el => {
			el.classList.remove("unshow");
		});

		document.querySelectorAll(".toggle-btn").forEach(btn => {
			btn.classList.add("unshow");
		});

		if(isOpen) {

			if (img.dataset.target == "subDesc") {
				document.getElementById("img2").classList.remove("unshow");
				document.getElementById("title").classList.remove("unshow");
				document.getElementById("title2").classList.remove("unshow");
				document.getElementById("title1").classList.remove("unshow");

				document.querySelectorAll(".toggle-btn").forEach(btn => {
					btn.classList.remove("unshow");
				});
				button.classList.remove("bx-list-minus");
				button.classList.add("bx-list-plus");	

				target.classList.remove("show");

			} else {

				document.getElementById("img1").classList.remove("unshow");
				document.getElementById("title").classList.remove("unshow");
				document.getElementById("title1").classList.remove("unshow");
				document.getElementById("title2").classList.remove("unshow");

				document.querySelectorAll(".toggle-btn").forEach(btn => {
					btn.classList.remove("unshow");
				});
				button.classList.remove("bx-list-minus");
				button.classList.add("bx-list-plus");

				target.classList.remove("show");

			}

		} else {

			if (img.dataset.target == "subDesc") {
		
				document.getElementById("img2").classList.add("unshow");
				document.getElementById("title").classList.add("unshow");
				document.getElementById("title2").classList.add("unshow");
				document.getElementById("title1").classList.add("unshow");

				button.classList.remove("bx-list-plus");
				button.classList.add("bx-list-minus");
				button.classList.remove("unshow");

				target.classList.add("show");
	
			} else {

				document.getElementById("img1").classList.add("unshow");
				document.getElementById("title").classList.add("unshow");
				document.getElementById("title1").classList.add("unshow");
				document.getElementById("title2").classList.add("unshow");

				button.classList.remove("bx-list-plus");
				button.classList.add("bx-list-minus");
				button.classList.remove("unshow");

				target.classList.add("show");

			}

		}

	});	
});

// Couleur JavaScript
window.update = function update(picker) {
					if (picker.toString()=='#000000' || picker.toString()=='#FFFFFF') {
						document.body.style.backgroundImage = `url('${'https://www.publicdomainpictures.net/pictures/40000/nahled/black-background-1365087945eJf.jpg'}')`;
					} else {
						document.body.style.background = picker.toString();
					}
}

if (typeof jscolor != "undefined") {
    jscolor.trigger('input'); // triggers 'onInput' on all color pickers when they are ready
} 

// Position JavaScript
const leftBtn = document.getElementById("left");
const centerBtn = document.getElementById("center");
const rightBtn = document.getElementById("right");
const text = document.getElementById("SidoDiv");

leftBtn.addEventListener("click", () => {
	if (text.style.textAlign == "right") {
        text.style.textAlign = "";
    }
	if (text.style.textAlign == "center") {
        text.style.textAlign = "";
    }
	text.style.textAlign = "left";

});

centerBtn.addEventListener("click", () => {
	if (text.style.textAlign == "left") {
        text.style.textAlign = "";
    }
	if (text.style.textAlign == "right") {
        text.style.textAlign = "";
    }
	text.style.textAlign = "center";

});

rightBtn.addEventListener("click", () => {
	if (text.style.textAlign == "left") {
        text.style.textAlign = "";
    }
	if (text.style.textAlign == "center") {
        text.style.textAlign = "";
    }
	text.style.textAlign = "right";
});
