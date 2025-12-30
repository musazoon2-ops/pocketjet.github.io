fetch("airports.json")
  .then(res => res.json())
  .then(airports => {

    function setup(inputId, listId) {
      const input = document.getElementById(inputId);
      const list = document.getElementById(listId);

      input.addEventListener("input", () => {
        const value = input.value.toLowerCase();
        list.innerHTML = "";

        if (!value) return;

        airports
          .filter(a => a.toLowerCase().includes(value))
          .slice(0, 6)
          .forEach(match => {
            const div = document.createElement("div");
            div.textContent = match;
            div.onclick = () => {
              input.value = match;
              list.innerHTML = "";
            };
            list.appendChild(div);
          });
      });
    }

    setup("from", "from-list");
    setup("to", "to-list");
  });
