const button = document.getElementById("Explore-offers");

button.addEventListener("click", function() {
	
	const review = document.getElementById("review");

	if (review.classList.contains("d-none")) {
		review.classList.remove("d-none");
		button.textContent = "Close offers";
	}
		else {
			review.classList.add("d-none");
			button.textContent = "See Offers";
                   }
        });
	

		
