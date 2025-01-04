document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('modal');
    const openModalButton = document.getElementById('open-modal');
    const closeModalButton = document.getElementById('close-modal');
    const nextPageButton = document.getElementById('next-page');
    const prevPageButton = document.getElementById('prev-page');
    const pages = document.querySelectorAll('.modal-page');

    let currentPage = 0;

    // Open the modal
    openModalButton.addEventListener('click', () => {
        modal.classList.remove('hidden');
        showPage(0); // Start with the first page
    });

    // Close the modal
    closeModalButton.addEventListener('click', () => {
        modal.classList.add('hidden');
    });

    // Show a specific page
    function showPage(index) {
        pages.forEach((page, i) => {
            if (i === index) {
                page.classList.remove('hidden');
            } else {
                page.classList.add('hidden');
            }
        });

        // Update button visibility
        prevPageButton.classList.toggle('hidden', index === 0);
        nextPageButton.textContent = index === pages.length - 1 ? 'Finish' : 'Next';
        currentPage = index; // Update the current page tracker
    }

    // Navigate to the next page
    nextPageButton.addEventListener('click', () => {
        if (currentPage < pages.length - 1) {
            currentPage++;
            showPage(currentPage);
        } else {
            modal.classList.add('hidden'); // Close modal on the last page
        }
    });

    // Navigate to the previous page
    prevPageButton.addEventListener('click', () => {
        if (currentPage > 0) {
            currentPage--;
            showPage(currentPage);
        }
    });

    function updateFluff(selectId, fluffId) {
        const selectElement = document.getElementById(selectId);
        const fluffElement = document.getElementById(fluffId);

        selectElement.addEventListener('change', (e) => {
            const selectedOption = e.target.options[e.target.selectedIndex];
            const fluffText = selectedOption.getAttribute('data-fluff');
            fluffElement.textContent = fluffText;
        });
    }

    // Update fluff text for class, race, and background
    updateFluff('class-select', 'class-fluff');
    updateFluff('race-select', 'race-fluff');
    updateFluff('background-select', 'background-fluff');


    const bonuses = {
        str: 0,
        dex: 1,
        con: 2,
        wis: 0,
        int: 0,
        cha: 1,
    };

    // Function to update total based on slider and bonus
    const updateTotal = (ability) => {
        const slider = document.getElementById(`${ability}-slider`);
        const valueDisplay = document.getElementById(`${ability}-value`);
        const bonusDisplay = document.getElementById(`${ability}-bonus`);
        const totalDisplay = document.getElementById(`${ability}-total`);

        const sliderValue = parseInt(slider.value, 10);
        const bonusValue = bonuses[ability];
        const totalValue = sliderValue + bonusValue;

        // Update the displays
        valueDisplay.textContent = sliderValue;
        bonusDisplay.textContent = `+${bonusValue}`;
        totalDisplay.textContent = totalValue;
    };

    // Attach event listeners to all sliders
    ["str", "dex", "con", "wis", "int", "cha"].forEach((ability) => {
        const slider = document.getElementById(`${ability}-slider`);
        slider.addEventListener("input", () => updateTotal(ability));
        updateTotal(ability); // Initialize values on page load
    });
});