(function () {
  const example = document.getElementById("example");
  const cw1 = document.getElementById("cw1");
  const cw2 = document.getElementById("cw2");
  const cw3 = document.getElementById("cw3");
  const answer = document.getElementById("answer");

  example.addEventListener("click", function () {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((array) => {
        console.log(array);
        answer.innerHTML = JSON.stringify(array);
      });
  });

  cw1.addEventListener("click", function () {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((array) => {
        let tableHTML =
          '<table border="1" style="width: 100%; text-align: center; border-collapse: collapse; margin-top: 20px;">';
        tableHTML +=
          '<tr><th>ID</th><th style="color: red;">Title</th><th style="color: green;">Body</th></tr>';

        array.forEach((post) => {
          tableHTML += `<tr>
            <td>${post.id}</td>
             <td style="color: red;">${post.title}</td>
             <td style="color: green;">${post.body}</td>
          </tr>`;
        });

        tableHTML += "</table>";

        answer.innerHTML = tableHTML;
      });
  });

  cw2.addEventListener("click", function () {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => response.json())
      .then((post) => {
        console.log("Dane wybranego posta:", post);
      });
  });

  cw3.addEventListener("click", function () {
    const popup = document.createElement("div");
    popup.textContent = "Loading...";

    popup.style.position = "fixed";
    popup.style.top = "50%";
    popup.style.left = "50%";
    popup.style.transform = "translate(-50%, -50%)";
    popup.style.backgroundColor = "blue";
    popup.style.color = "white";
    popup.style.padding = "20px 40px";
    popup.style.borderRadius = "10px";
    popup.style.fontWeight = "bold";
    popup.style.fontSize = "24px";
    popup.style.zIndex = "9999";

    document.body.appendChild(popup);
    answer.innerHTML = "";

    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((array) => {
        setTimeout(() => {
          if (document.body.contains(popup)) {
            document.body.removeChild(popup);
          }

          answer.innerHTML = "Ukonczono ladowanie";
        }, 1000);
      });
  });
})();
