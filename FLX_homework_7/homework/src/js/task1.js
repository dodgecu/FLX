const currentTime = new Date().getHours();
const username = prompt("Please, enter your username");

if (username === null || username === "") {
  alert("Canceled");
} else {
  if (username.length < 4) {
    alert("I don't know any users having name length less than 4 symbols");
  } else if (username === "User") {
    const password = prompt("Enter your password");
    if (password === null || password === "") {
      alert("Canceled");
    } else {
      if (password === "UserPass") {
        alert(
          currentTime >= 20
            ? "Good evening, dear User!"
            : "Good day, dear User!"
        );
      } else {
        alert("Wrong password");
      }
    }
  } else if (username === "Admin") {
    const password = prompt("Enter your password");
    if (password === null || password === "") {
      alert("Canceled");
    } else {
      if (password === "RootPass") {
        alert(
          currentTime >= 20
            ? "Good evening, dear Admin!"
            : "Good day, dear Admin!"
        );
      } else {
        alert("Wrong password");
      }
    }
  } else {
    alert("I don't know you!");
  }
}
