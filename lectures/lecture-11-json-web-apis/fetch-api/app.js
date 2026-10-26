const output = document.getElementById("output");

// Helper function to display results on the page
function showResult(message, data) {
  output.textContent = `${message}\n\n` + JSON.stringify(data, null, 2);
}

// 1. GET ALL: Fetch the list of all posts (100 items)
async function getAllPosts() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    showResult(`GET All Posts Successful (Total: ${data.length}):`, data);
  } catch (error) {
    showResult("Error fetching all posts:", error.message);
  }
}

// 2. GET SINGLE: Fetch data for post #1
async function getPost() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1",
    );
    const data = await response.json();
    showResult("GET Request Successful:", data);
  } catch (error) {
    showResult("Error fetching post:", error.message);
  }
}

// 3. POST: Create a new resource
async function createPost() {
  const newPost = {
    title: "My First Post",
    body: "Hello world!",
    userId: 1,
  };

  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPost),
    });
    const data = await response.json();
    showResult("POST Request Successful (Created):", data);
  } catch (error) {
    showResult("Error creating post:", error.message);
  }
}

// 4. PUT: Update an existing resource completely
async function updatePost() {
  const updatedPost = {
    id: 1,
    title: "Updated Title",
    body: "Updated body content.",
    userId: 1,
  };

  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1",
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedPost),
      },
    );
    const data = await response.json();
    showResult("PUT Request Successful (Updated):", data);
  } catch (error) {
    showResult("Error updating post:", error.message);
  }
}

// 5. DELETE: Delete resource #1
async function deletePost() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1",
      {
        method: "DELETE",
      },
    );

    if (response.ok) {
      showResult("DELETE Request Successful:", {
        status: response.status,
        message: "Post #1 deleted.",
      });
    }
  } catch (error) {
    showResult("Error deleting post:", error.message);
  }
}
