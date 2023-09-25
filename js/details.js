const detailsEl = document.querySelector('.details');
const deleteEl = document.querySelector('.delete');
const id = new URLSearchParams(window.location.search).get('id');

const renderDetails = async () => {
	const response = await fetch(`http://localhost:3000/posts/${id}`);
	const data = await response.json();

	const template = `
    <h1>${data.title}</h1>
    <p>${data.body}</p>
    `;

	detailsEl.innerHTML = template;
};

deleteEl.addEventListener('click', async (e) => {
	await fetch(`http://localhost:3000/posts/${id}`, {
		method: 'DELETE',
	});
	window.location.replace('/');
});

window.addEventListener('DOMContentLoaded', () => renderDetails());
