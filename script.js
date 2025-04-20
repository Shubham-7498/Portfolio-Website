function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }

function downloadCV() {
  const link = document.createElement('a');
  link.href = './assets/Shubham_Resume.pdf';
  link.download = 'Shubham_Resume.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link)
}



// const form = document.querySelector("form");
// statusTxt = form.querySelector(".buttonarea span");

// form.onsubmit = (e) => {
//   e.preventDefault(); 
//   statusTxt.style.color = "#0d6efd";
//   statusTxt.style.display = "inline-block"; 

//   let xhr = new XMLHttpRequest(); 
//   xhr.open("POST", "message.php", true); 
//   xhr.onload = () => { 
//     if (xhr.readyState == 4 && xhr.status == 200) { 
//       let response = xhr.response; 
//       if (response.indexOf("All fields are required!") != -2 || response.indexOf("Invalid email format!") || response.indexOf("Failed to send email!")){ 
//         statusTxt.style.color = "red"; 
//       }else{
//         form.reset();
//         setTimeout(() => {
//           statusTxt.style.display = "none"; 
//         }, 3000);
//       }
//       statusTxt.innerText = response
//     }
//   };

//   let formData = new FormData(form);
//   xhr.send(formData); 
// }


  <script src="https://cdn.emailjs.com/dist/email.min.js"></script>

  (function () {
  emailjs.init("whbbLIls9IT_HnxDY"); // Replace with your public key

  const form = document.getElementById("contact-form");
  const sendBtn = document.getElementById("send-btn");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    sendBtn.disabled = true;
    sendBtn.textContent = "Sending...";

    emailjs.sendForm("service_5b4focc", "template_v5h3cux", form)
      .then(() => {
        form.reset();
        sendBtn.textContent = "Send Message";
        sendBtn.disabled = false;
      })
      .catch(() => {
        sendBtn.textContent = "Send Message";
        sendBtn.disabled = false;
      });
  });
});


