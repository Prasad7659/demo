function toggleNav() {
    const sidenav = document.getElementById("mySidenav");
    if (sidenav.style.width === "250px") {
        sidenav.style.width = "0";
    } else {
        sidenav.style.width = "250px";
    }
}
function copyToClipboard(text) {
    const phoneNumber = "+91 9490278099";

        // Get the link element
        const phoneLink = document.getElementById("phoneLink");

        // Function to detect if the device is mobile
        function isMobileDevice() {
            return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        }

        // Add click event listener
        phoneLink.addEventListener("click", function(event) {
            if (!isMobileDevice()) {
                // Prevent the tel: link from doing anything on desktop
                event.preventDefault();

                // Copy to clipboard
                navigator.clipboard.writeText(phoneNumber)
                    .then(() => {
                        alert("Phone number copied to clipboard: " + phoneNumber);
                    })
                    .catch(err => {
                        console.error("Failed to copy: ", err);
                        alert("Failed to copy number. Here it is: " + phoneNumber);
                    });
            }
            // On mobile, do nothing extra—let the tel: link open the phone app
        });
}
function map(){
    var map = L.map("map").setView([17.354123258621595, 78.47698782286838], 15); // Replace with your coordinates
        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);
        L.marker([17.354123258621595, 78.47698782286838]).addTo(map).bindPopup("Land Surveyors").openPopup();
}
function recenterMap() {
    map.setView([17.354123258621595, 78.47698782286838], 13); // Reset to original location & zoom
}
function getDirections() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            var userLat = position.coords.latitude;
            var userLng = position.coords.longitude;
            
            // Open Google Maps with Directions
            var googleMapsUrl = `https://www.google.com/maps/dir/${userLat},${userLng}/17.354123258621595,78.47698782286838`;
            window.open(googleMapsUrl, "_blank");
        }, function(error) {
            alert("Geolocation not supported or permission denied.");
        });
    } else {
        alert("Geolocation is not supported by this browser.");
    }
}
map()
