const button = document.querySelector(".bars");

button.addEventListener("click", () => {
	const wasOpen = button.classList.contains("open");

	button.classList.remove("open");
	button.classList.remove("closed");

	requestAnimationFrame(() => {
		wasOpen ? button.classList.add("closed") : button.classList.add("open");
	});
});
