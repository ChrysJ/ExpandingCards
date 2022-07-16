let boxes = document.querySelectorAll('.boxes');

boxes.forEach((box) => {
	box.addEventListener('click', (e) => {
		removeClassBox();
		e.target.classList.add('active');
	});
});

const removeClassBox = () => {
	boxes.forEach((box) => {
		box.classList.remove('active');
	});
};


