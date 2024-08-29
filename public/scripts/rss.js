const RSS_URL = 'http://localhost:3001/proxy';

fetch(RSS_URL)
  .then(response => response.text())
  .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
  .then(data => {
    const items = data.querySelectorAll("item");
    let html = ``;
    items.forEach(el => {
      html += `
  <article>
    <img src="https://via.placeholder.com/800x400" alt="Placeholder Image">
    <h2>
      <a href="${el.querySelector("link").textContent}" target="_blank" rel="noopener">
        ${el.querySelector("title").textContent}
      </a>
    </h2>
  </article>
            `;
    });
    document.body.insertAdjacentHTML("beforeend", html);
  })
  .catch(error => console.error('Error fetching the RSS feed:', error));
