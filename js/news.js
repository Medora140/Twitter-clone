async function loadNews() {
    try {
        const response = await fetch("./data/news.json");

        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }

        const data = await response.json();

        const newsList = document.getElementById("news-list");

        newsList.innerHTML = "";

        data.articles.forEach(article => {

            const articleElement = document.createElement("article");

            articleElement.classList.add("news_article");

            articleElement.innerHTML = `
                <h3>${article.title}</h3>

                <div class="news_meta">
                    <span>${article.source.name}</span>
                    <span>·</span>
                    <span>${formatTime(article.publishedAt)}</span>
                </div>
            `;

            newsList.appendChild(articleElement);
        });

    } catch (error) {
        console.error("Failed to load news:", error);
    }
}

function formatTime(date) {
    const published = new Date(date);
    const now = new Date();

    const difference = Math.floor(
        (now - published) / 1000 / 60 / 60
    );

    if (difference < 1) {
        return "Just now";
    }

    if (difference < 24) {
        return `${difference}h ago`;
    }

    return published.toLocaleDateString();
}

loadNews();