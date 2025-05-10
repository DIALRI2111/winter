document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("replyForm");
    const input = document.getElementById("replyInput");
    const repliesContainer = document.getElementById("replies");
  
    // Tampilkan balasan yang sudah tersimpan
    function loadReplies() {
      const replies = JSON.parse(localStorage.getItem("replies") || "[]");
      repliesContainer.innerHTML = "";
      replies.forEach((reply) => {
        const div = document.createElement("div");
        div.className = "reply";
        div.textContent = reply;
        repliesContainer.appendChild(div);
      });
    }
  
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const reply = input.value.trim();
      if (reply) {
        const replies = JSON.parse(localStorage.getItem("replies") || "[]");
        replies.push(reply);
        localStorage.setItem("replies", JSON.stringify(replies));
        input.value = "";
        loadReplies();
      }
    });
  
    loadReplies();
  });
  