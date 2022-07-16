let boxes = document.querySelectorAll('.boxes');

boxes.forEach((box) => {
	box.addEventListener('click', (e) => {
		console.log(e.target);
		removeClassBox();
		e.target.classList.add('active');
	});
});

const removeClassBox = () => {
	boxes.forEach((box) => {
		box.classList.remove('active');
	});
};


