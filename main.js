
        let count = 1;

        function addItem(position) {
        
            let newItem = document.createElement("div");
            newItem.className = "item " + (count % 2 === 0 ? "blue" : "bluedark");
            newItem.textContent = "new item " + count;
            let delBtn = document.createElement("button");
            delBtn.textContent = "del";
            delBtn.className = "delete-btn";
            delBtn.onclick = function () {
                newItem.remove();
            };
            newItem.appendChild(delBtn);
            let container = document.getElementById("container");
            if (position === "start") {
                container.prepend(newItem);
            } else {
                container.appendChild(newItem);
            }

            count++;
        }
