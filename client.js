document.addEventListener("DOMContentLoaded", () => {
  const formVideoRequest = document.getElementById("formVideoRequest");
  formVideoRequest.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(formVideoRequest);
    fetch("http://localhost:7777/video-request", {
      method: "POST",
      body: formData,
    })
      .then((boldData) => boldData.json())
      .then((data) => {
        console.log(data);
      });
  });
});
