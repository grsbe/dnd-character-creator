document.addEventListener("DOMContentLoaded", () => {
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