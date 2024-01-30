const messageForm = document.getElementById("messageForm");

messageForm.addEventListener("submit", handleSubmitMessageForm); //event listener for submit buttong

function handleSubmitMessageForm(event) {
  event.preventDefault(); //prevents default settings !!!!REQUIRED!!!!!

  const formData = new FormData(messageForm);
  const message = formData.get("message");

  // fetch request to local host 3000. setup on server side
  fetch("http://localhost:3000/messages", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ message }), //stringify. JSON is async. so needs to be Stringified because we are POSTing. if GET then we use a async function
  });
}
