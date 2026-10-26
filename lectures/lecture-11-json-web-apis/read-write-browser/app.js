// Keep track of the active file handle so we can directly overwrite it
let fileHandle = null;

const btnOpen = document.getElementById("btnOpen");
const btnSave = document.getElementById("btnSave");
const btnSaveAs = document.getElementById("btnSaveAs");
const jsonEditor = document.getElementById("jsonEditor");
const statusDiv = document.getElementById("status");

// Filter options to restrict file dialogs to JSON files
const filePickerOptions = {
  types: [
    {
      description: "JSON Files",
      accept: { "application/json": [".json"] },
    },
  ],
};

// ==========================================
// 1. READ FILE: showOpenFilePicker()
// ==========================================
btnOpen.addEventListener("click", async () => {
  try {
    // Prompt user to pick a file from their disk
    [fileHandle] = await window.showOpenFilePicker(filePickerOptions);

    // Retrieve the actual File object
    const file = await fileHandle.getFile();
    const content = await file.text();

    // Optional: Validate that it's valid JSON before placing in UI
    const parsed = JSON.parse(content);
    jsonEditor.value = JSON.stringify(parsed, null, 2);

    statusDiv.textContent = `Opened: "${file.name}"`;
  } catch (err) {
    if (err.name !== "AbortError") {
      console.error(err);
      statusDiv.textContent = "Error reading file.";
    }
  }
});

// ==========================================
// 2. WRITE / OVERWRITE FILE
// ==========================================
btnSave.addEventListener("click", async () => {
  // If no file has been opened yet, fall back to "Save As"
  if (!fileHandle) {
    return btnSaveAs.click();
  }

  try {
    await writeJsonToFile(fileHandle, jsonEditor.value);
    const file = await fileHandle.getFile();
    statusDiv.textContent = `Saved directly to: "${file.name}"`;
  } catch (err) {
    console.error(err);
    statusDiv.textContent = "Error writing to file.";
  }
});

// ==========================================
// 3. SAVE AS NEW FILE: showSaveFilePicker()
// ==========================================
btnSaveAs.addEventListener("click", async () => {
  try {
    // Prompt user to choose where to save the new file
    fileHandle = await window.showSaveFilePicker({
      suggestedName: "data.json",
      ...filePickerOptions,
    });

    await writeJsonToFile(fileHandle, jsonEditor.value);
    const file = await fileHandle.getFile();
    statusDiv.textContent = `Saved as new file: "${file.name}"`;
  } catch (err) {
    if (err.name !== "AbortError") {
      console.error(err);
      statusDiv.textContent = "Error saving new file.";
    }
  }
});

// Helper method to write formatted JSON data into a file handle stream
async function writeJsonToFile(handle, rawText) {
  // Validate string input as proper JSON
  const parsedData = JSON.parse(rawText);
  const formattedJson = JSON.stringify(parsedData, null, 2);

  // Create a writable stream and overwrite the file contents
  const writableStream = await handle.createWritable();
  await writableStream.write(formattedJson);
  await writableStream.close();
}
