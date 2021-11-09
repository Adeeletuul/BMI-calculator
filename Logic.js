function saveFile() {
  // Get the data from each element on the form.
  const name = document.getElementById("name").value;
  const height = document.getElementById("height").value;
  const weight = document.getElementById("weight").value;
  const gender = document.getElementById("gender").value;
  const adult = document.getElementById("adult").checked;
  localStorage.setItem('name',name)
  console.log(adult);

  // This variable stores all the data.
  let data = "\r Name: " + name + " \r\n " + "Height: " + height + " \r\n " + "Weight: " + weight + " \r\n " + "Gender: " + gender + " \r\n " + "Adult: " + adult;
  console.log(data); //printing form data into the console
  // Convert the text to BLOB.

  if (isAdult(adult)) {
    console.log(height);
    let bmi = calculate(height, weight);
    localStorage.setItem('bmi',bmi.toFixed(2))
    console.log(bmi);
    window.location.href="./Second_page.html";
    var newName = document.getElementById("name").value;
  } else {
    document.write("You are not old enough");
  }
};

function calculate(height, weight) {
  return (parseInt(weight) / parseInt(height) / parseInt(height)) * 10000;
}

function isAdult(adult, height, weight) {
  if (adult === true) {
    return true;
  } else {
    return false;
  }
}

function init() {
  // Retrieving the text input's value which was stored into localStorage
  const name =localStorage.getItem("name");
  const bmi =localStorage.getItem("bmi");
  document.getElementById("name").textContent=name;
  document.getElementById("bmi").textContent=bmi;
}
