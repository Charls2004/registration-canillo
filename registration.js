function submitData(event) {
  event.preventDefault();

  // Collect input values
  let firstname = document.querySelector("#Firstname").value.trim();
  let lastname = document.querySelector("#Lastname").value.trim();
  let username = document.querySelector("#Username").value.trim();
  let password = document.querySelector("#Password").value;
  let confirmPassword = document.querySelector("#Con-password").value;
  let email = document.querySelector("#Email").value.trim();
  let phone = document.querySelector("#Number").value.trim();
  let religion = document.querySelector("#religion").value;
  let address = document.querySelector("#address").value.trim();
  let birthday = document.querySelector("#Birthday").value;
  let file = document.querySelector("#file").value;
  let agree = document.querySelector("#agree").checked;
  let gender = document.querySelector("input[name='gender']:checked")?.value;
  //trim is para i ignore ang spaces sa unahan ug sa katapusan

  //checks sa mga requirements
  if (!agree) {
    alert("Please agree to the Data Privacy Policy");
    return;
  }

  if (
    !firstname ||
    !lastname ||
    !username ||
    !password ||
    !confirmPassword ||
    !email ||
    !phone ||
    !gender ||
    !religion ||
    !address ||
    !birthday
  ) {
    alert("Please fill in all required fields");
    return;
  }

  if (username.length < 5 || username.length > 12) {
    alert("Username must be between 5 and 12 characters");
    return;
  }

  if (
    password.length < 8 ||
    password.length > 16 ||
    confirmPassword.length < 8 ||
    confirmPassword.length > 16
  ) {
    alert("Password must be between 8 and 16 characters");
    return;
  }
  if (password !== confirmPassword) {
    alert("Confirm Password is not correct");
    return;
  }

  if (phone.length !== 11) {
    alert("Phone number must be exactly 11 digits");
    return;
  }

  if (!email.endsWith("@dnsc.edu.ph")) {
    alert("Email must end with @dnsc.edu.ph");
    return;
  }

  // Format birthday to dd/mm/yyyy
  let formattedBirthday = "";
  if (birthday.includes("-")) {
    const [year, month, day] = birthday.split("-");
    formattedBirthday = `${day}/${month}/${year}`;
  } else {
    formattedBirthday = birthday;
  }

  //Success alert
  alert(
    "Registration was successfully submitted!\n\n" +
      "Name: " +
      firstname +
      " " +
      lastname +
      "\n" +
      "Username: " +
      username +
      "\n" +
      "Email: " +
      email +
      "\n" +
      "Phone: " +
      phone +
      "\n" +
      "Gender: " +
      gender +
      "\n" +
      "Religion: " +
      religion +
      "\n" +
      "Address: " +
      address +
      "\n" +
      "Birthday: " +
      formattedBirthday
  );

  registrationForm.reset(); // Reset the form after submission
}
