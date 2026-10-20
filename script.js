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
    //TODO
  });

  cw3.addEventListener("click", function () {
    //TODO
  });
})();
