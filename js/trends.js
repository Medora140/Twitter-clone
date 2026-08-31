async function loadTrends() {
    try {
        const response = await fetch("http://localhost:3000/api/trends");

        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }

        const data = await response.json();

        const trendList = document.getElementById("trend-list");

        trendList.innerHTML = "";

        data.trends.forEach(trend => {

            const articleElement = document.createElement("article");

            articleElement.classList.add("trend_article");

            articleElement.innerHTML = `
                

                <div class="trend_meta">
                    <span>${trend.category}</span>
                    <span>
                    <button class="trend_meta_more" id="_6">
                        <svg viewBox="0 0 24 24" aria-hidden="true" class="r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-1xvli5t r-1hdv0qi"><g><path d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"></path></g></svg>
                    </button>
                </div>
                <h3>${trend.title}</h3>
            `;

            trendList.appendChild(articleElement);
        });

    } catch (error) {
        console.error("Failed to load trends:", error);
    }
}



loadTrends();