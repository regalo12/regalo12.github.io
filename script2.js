document.addEventListener("DOMContentLoaded", () => {
    const sections = {
        gameSelection: document.getElementById("gameSelection"),
        puzzleGame: document.getElementById("puzzleGame"),
        memoryGame: document.getElementById("memoryGame"),
        riddleGame: document.getElementById("riddleGame"),
        surprise: document.getElementById("surprise"),
    };

    const gameItems = document.querySelectorAll(".game-item");
    const backButtons = document.querySelectorAll(".backBtn");
    const finalSurpriseBtn = document.getElementById("finalSurpriseBtn");
    const nextButtons = document.querySelectorAll(".nextBtn");

    let completedGames = 0;

    // Navegación entre secciones
    gameItems.forEach((item) => {
        item.addEventListener("click", () => {
            const gameId = item.dataset.game;
            showSection(gameId);
        });
    });

    backButtons.forEach((btn) => {
        btn.addEventListener("click", () => {
            const backSection = btn.dataset.back;
            showSection(backSection);
        });
    });

    nextButtons.forEach((btn) => {
        btn.addEventListener("click", () => {
            completedGames++;
            showSection("gameSelection");
            if (completedGames >= 3) {
                finalSurpriseBtn.classList.remove("hidden");
            }
        });
    });

    finalSurpriseBtn.addEventListener("click", () => showSection("surprise"));

    function showSection(sectionId) {
        Object.values(sections).forEach((section) => section.classList.remove("active"));
        sections[sectionId].classList.add("active");
    }
});
