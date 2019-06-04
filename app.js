let arrowBtns = document.getElementsByClassName("fas");
let whenBtns = document.getElementsByClassName("when");

function updateTitle() {
	let switchingOrder = document.getElementById("switching-order").value;
	document.title = switchingOrder;
}

for (let i = 0; i < whenBtns.length; i++) {
	whenBtns[i].addEventListener("click", function() {
		console.log(whenBtns[i]);
		switch (whenBtns[i].innerHTML) {
			case "":
				console.log("test");
				whenBtns[i].innerHTML = "Before";
				break;
			case "<span>Before/span>":
				whenBtns[i].innerHTML = "<span>Tied</span>";
				break;
			case "<span>- - -</span>":
				whenBtns[i].innerHTML = "<span>Adjusted</span>";
				break;
			case "<span>- - -</span>":
				whenBtns[i].innerHTML = "<span>After</span>";
				break;
			case "<span>- - -</span>":
				whenBtns[i].innerHTML = "<span>- - -</span>";
				break;
			default:
				break;
		}
	});
}

for (let i = 0; i < arrowBtns.length; i++) {
	arrowBtns[i].addEventListener("click", function() {
		switch (arrowBtns[i].classList.value) {
			case "fas fa-arrow-left fa-lg dark-grey":
				arrowBtns[i].classList.value = "fas fa-arrow-left fa-lg green";
				break;
			case "fas fa-arrow-left fa-lg green":
				arrowBtns[i].classList.value = "fas fa-arrow-left fa-lg dark-grey";
				break;
			case "fas fa-arrow-right fa-lg dark-grey":
				arrowBtns[i].classList.value = "fas fa-arrow-right fa-lg green";
				break;
			case "fas fa-arrow-right fa-lg green":
				arrowBtns[i].classList.value = "fas fa-arrow-right fa-lg dark-grey";
				break;
			case "fas fa-print fa-2x print":
				window.print();
				break;
			case "fas fa-square fa-2x":
				arrowBtns[i].classList.value = "fas fa-check-square fa-2x red";
				break;
			case "fas fa-check-square fa-2x red":
				arrowBtns[i].classList.value = "fas fa-square fa-2x";
				break;
			default:
				break;
		}
	});
}
