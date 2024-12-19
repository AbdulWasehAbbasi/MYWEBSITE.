document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("userForm");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        // Retrieve form data
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const age = document.getElementById("age").value;
        const gender = document.getElementById("gender").value;
        const comments = document.getElementById("comments").value;

        // Basic form validation: check if all fields are filled
        if (!name || !email || !age || !gender || !comments) {
            alert("Please fill in all fields before submitting.");
            return; // Stop further execution if validation fails
        }

        // Save data to local storage
        try {
            const userData = { name, email, age, gender, comments };
            localStorage.setItem("userData", JSON.stringify(userData));

            // Alert user
            alert("Your data has been saved successfully!");

            // Optionally display saved data (for user feedback)
            const savedDataDiv = document.getElementById("savedData");
            savedDataDiv.innerHTML = `
                <h3>Saved Data:</h3>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Age:</strong> ${age}</p>
                <p><strong>Gender:</strong> ${gender}</p>
                <p><strong>Comments:</strong> ${comments}</p>
            `;

            // Reset form
            form.reset();

        } catch (error) {
            console.error("Error saving data to local storage:", error);
            alert("An error occurred while saving your data. Please try again.");
        }
    });
});
