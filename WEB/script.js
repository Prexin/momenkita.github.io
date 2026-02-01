const video = document.querySelector('#videoElement');
const captureButton = document.querySelector('#captureButton');
const canvas = document.querySelector('#canvas');
const photo = document.querySelector('#photo');

// Access the camera
if (navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices.getUserMedia({ video: true })
        .then(function (stream) {
            video.srcObject = stream;
        })
        .catch(function (err0r) {
            console.log("Something went wrong!", err0r);
        });
}

// Capture a photo from the video feed
captureButton.addEventListener('click', function() {
    const context = myCanvas.getContext('2d');
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    context.drawImage(video, 0, 0, canvas.width, canvas.height);

    // Convert the canvas image to a data URL and display it in the img tag
    photo.src = canvas.toDataURL('image/png');
    photo.style.display = 'block';
});
// script.js
const canvas = document.getElementById("myCanvas");

document.getElementById("resizeBtn").addEventListener("click", () => {
  canvas.width = 500;   // ✅ now works
  canvas.height = 300;
});




