const uploadBox = document.querySelector('.upload-box');
const fileInput = document.getElementById('fileInput');
const uploadIcon = document.getElementById('uploadIcon');
const uploadText = document.getElementById('uploadText');

// When user clicks the box, trigger file input
uploadBox.addEventListener('click', () => {
  fileInput.click();
});

// When file is selected
fileInput.addEventListener('change', () => {
  const file = fileInput.files[0];

  if (file) {
    if (file.size > 500 * 1024) {
      uploadText.textContent = "File too large. please upload upload a photo under 500kb";
      uploadText.style.color = "red";
      return;
    }

    // File is valid
    const reader = new FileReader();
    reader.onload = function (e) {
      // Replace the upload icon with the image
      uploadedImageURL = e.target.result
      const img = document.createElement('img');
      img.src = e.target.result;
      img.style.width = "100%";
      img.style.height = "100%";
      img.style.objectFit = "cover";

      const innerBox = document.querySelector('.upload-inner-box');
      innerBox.innerHTML = ""; // Clear the icon
      innerBox.appendChild(img); // Add image


      
    };

    reader.readAsDataURL(file);
  }
});


const submit = document.getElementById("submit")
submit.addEventListener("click", function(event) {
    event.preventDefault()
    let userName = document.getElementById("userName").value;
    let userEmail = document.getElementById("userEmail").value;
    let ticketName = document.getElementById("ticketName")
    let ticketEmail = document.getElementById("ticketEmail")
    let ticketN = document.getElementById("ticket-name")
    let ticketE = document.getElementById("ticket-email")
    let formWrap = document.getElementById("formWrap")
    let ticketWrap = document.getElementById("ticketWrap")
    let ticketId = document.getElementById("ticketID")
    let emailError = document.getElementById("emailError")   
    
    

    const email = userEmail.trim();
    const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!validEmail.test(email)) {
        emailError.style.display = 'block';
        return
      }

    formWrap.style.display = "none";
    ticketWrap.style.display = "block";
    ticketName.innerHTML = userName;
    ticketEmail.innerHTML = userEmail;
    ticketN.innerHTML = userName;
    ticketE.innerHTML = userEmail;
    if (uploadedImageURL) {
      document.getElementById('ticketImage').src = uploadedImageURL;
    }
    const randomNumber = Math.floor(Math.random() * 900000 );
    ticketId.innerHTML = `TKT #${randomNumber}`
})