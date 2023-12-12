        function setDynamicMargins() {
            // Calculate the total height of the document
            var totalHeight = document.documentElement.scrollHeight;

            // Set the top and bottom margins of the body based on the total height
            document.body.style.marginTop = totalHeight * 0.054 + 'px'; // 10% of the total height
            document.body.style.marginBottom = totalHeight * 0.06 + 'px'; // 10% of the total height
        }

        // Initial setup
        setDynamicMargins();

        // Attach an event listener to the window's resize event
        window.addEventListener('resize', setDynamicMargins);


