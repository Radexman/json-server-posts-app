const blogsEl = document.querySelector('.blogs');
const uri = 'http://localhost:3000/posts';

const renderPosts = async () => {
	const response = await fetch(uri);
	const data = await response.json();

	let template = '';

	data.forEach((post) => {
		template += `
            <div class="post">
                <h2>${post.title}</h2>
                <p>${post.likes} likes</p>
                <p>${post.body.slice(0, 200)}</p>
                <a href='/details.html?id=${post.id}'>read more... </a>
            </div>
        `;

		blogsEl.innerHTML = template;
	});
};

window.addEventListener('DOMContentLoaded', () => renderPosts());
