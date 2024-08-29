const RSS_URL = 'http://localhost:3001/proxy';

fetch(RSS_URL)
    .then(response => response.text())
    .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
    .then(data => {
        const items = data.querySelectorAll("item");
        let html = ``;
        items.forEach(el => {
            const link = el.querySelector("link").textContent;
            const title = el.querySelector("title").textContent;
            const description = el.querySelector("description").textContent;
            const pubDate = new Date(el.querySelector("pubDate").textContent).toLocaleDateString(); // Format date

            html += `
              <article class="blog-post">
                <h2>
                  <a href="${link}" target="_blank" rel="noopener">
                    ${title}
                  </a>
                </h2>
                <p class="date">${pubDate}</p>
                <p class="description">${description}</p>
              </article>
            `;
        });
        document.body.insertAdjacentHTML("beforeend", html);
    })
    .catch(error => console.error('Error fetching the RSS feed:', error));
