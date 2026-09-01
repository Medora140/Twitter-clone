async function loadFollowers() {

    try {

        const response = await fetch("./data/follow.json");

        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }

        const data = await response.json();

        const followContainer =
            document.querySelector("#follow-list");

        followContainer.innerHTML = "";

        data.follow.forEach(followers => {

            const followElement =
                document.createElement("article");

            followElement.classList.add("follow-card");

            followElement.innerHTML = `

                    <div class="follow-card_avatar">
                        <span class="material-symbols-outlined">
                            account_circle
                        </span>
                    </div>

                    <div class="follow-card_user">

                        <div class="follow-card_name">

                            <strong>
                                ${followers.name}
                            </strong>
                        </div>

                        <div class="follow-card_username">
                            ${followers.username}
                        </div>

                    </div>

                    <button class="follow-card_ppl">
                        ${followers.following ? "Following" : "Follow"}
                    </button>
            `;

            followContainer.appendChild(followElement);

        });

    } catch (error) {

        console.error(
            "Failed to load followers:",
            error
        );

    }
}

loadFollowers();