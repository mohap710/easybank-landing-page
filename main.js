const navToggler = document.querySelector(".nav-toggler");
const nav = document.querySelector("#navbar");
const header = document.querySelector("header");

function openNav() {
	navToggler.setAttribute("aria-expanded", "true");
	navToggler.classList.add("opened");
	nav.setAttribute("data-visible", "true");
	// prevent body from scrolling when menu is opened
	document.body.style.overflowY = "hidden";
}
function closeNav() {
	navToggler.setAttribute("aria-expanded", "false");
	navToggler.classList.remove("opened");
	nav.setAttribute("data-visible", "false");
	document.body.style.overflowY = "scroll";
}
function toggleNav() {
	const visibility = nav.getAttribute("data-visible");
	visibility === "false" ? openNav() : closeNav();
}