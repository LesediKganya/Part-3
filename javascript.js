    // Wait for the DOM to fully load before executing the script
document.addEventListener("DOMContentLoaded", function() {
    // Select the form element from the document
    const form = document.querySelector("form");

    // Add an event listener for the form's submit event
    form.addEventListener("submit", function(event) {
        // Prevent the form from submitting to allow for validation
        event.preventDefault();

        // Get the values from the form inputs
        const name = document.getElementById("name").value; // Get the name input value
        const email = document.getElementById("email").value; // Get the email input value
        const phone = document.getElementById("phone").value; // Get the phone input value
        const grade = document.getElementById("grade").value; // Get the grade input value
        const inquiryType = document.getElementById("inquiry_type").value; // Get the inquiry type input value
        const message = document.getElementById("message").value; // Get the message input value
        const consent = document.querySelector('input[name="consent"]').checked; // Check if consent is given

        // Validate that all required fields are filled and consent is given
        if (!name || !email || !phone || !grade || !inquiryType || !message || !consent) {
            // Alert the user to fill in all required fields
            alert("Please fill in all required fields and give consent.");
            return; // Exit the function if validation fails
        }

        // Display the entered information for demonstration purposes
        alert(`Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nGrade Level: ${grade}\nInquiry Type: ${inquiryType}\nMessage: ${message}\nConsent: ${consent ? "Yes" : "No"}`);

        // If everything is valid, you can submit the form
        // Uncomment the line below to allow form submission
        // form.submit();
    });
});
https://maps.app.goo.gl/yuKuGX3ur8tiJosT6

  // Wait for the DOM to fully load before executing the script
document.addEventListener("DOMContentLoaded", function () {
    // Select the span element where the current year will be displayed
    const yearSpan = document.getElementById("currentYear");

    // Set the text content of the yearSpan to the current year
    yearSpan.textContent = new Date().getFullYear();
});
 
    
  // Wait for the DOM to fully load before executing the script
document.addEventListener("DOMContentLoaded", function () {
    // Display a welcome message when the page loads
    alert("Welcome to Kiddies Time! Thank you for visiting our page.");

    // Select all social media links with the class 'social-link'
    const socialLinks = document.querySelectorAll('.social-link');

    // Loop through each social media link
    socialLinks.forEach(link => {
        // Add a click event listener to each link
        link.addEventListener('click', function () {
            // Alert the user that they are being redirected to the link's URL
            alert("You are being redirected to " + this.href);
        });
    });

    // Dynamically set the current year in the footer
    const yearSpan = document.getElementById("currentYear");
    if (yearSpan) {
        // Get the current year and set it as the text content of the yearSpan element
        yearSpan.textContent = new Date().getFullYear();
    }
});
 
  