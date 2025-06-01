(function() {
  const question = "Do you want to throw away your time on YouTube Shorts? (yes/no)";
  const answer = prompt(question);

  // Check if the user agreed.
  if (!answer || answer.toLowerCase() !== "yes") {
    alert("Alright, redirecting you away from YouTube Shorts.")
    chrome.runtime.sendMessage({ action: "closeTab" });
  }
})();
