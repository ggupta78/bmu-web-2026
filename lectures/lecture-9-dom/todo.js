const input = document.querySelector("#task-input");
const addBtn = document.querySelector("#add-btn");
const taskList = document.querySelector("#task-list");

addBtn.addEventListener("click", () => {
  const taskText = input.value.trim();
  if (!taskText) return;

  // 1. CREATE element structure
  const li = document.createElement("li");
  const span = document.createElement("span");
  const deleteBtn = document.createElement("button");

  span.textContent = taskText;
  deleteBtn.textContent = "Delete";

  // 2. CONFIGURE remove handler
  deleteBtn.addEventListener("click", () => {
    li.remove(); // Self-removes the entire list item when clicked
  });

  // 3. ASSEMBLE elements
  li.append(span, deleteBtn);

  // 4. APPEND to list
  taskList.append(li);

  // Clear input field
  input.value = "";
});
