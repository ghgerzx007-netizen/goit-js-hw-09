const storageKey = "feedback-form-state";

const formData = {
  email: "",
  message: "",
};

const form = document.querySelector(".feedback-form");

form.addEventListener("input", event => {
  const name = event.target.name;
  const value = event.target.value;
  formData[name] = value;
  localStorage.setItem(storageKey, JSON.stringify(formData));
});
const savedData = localStorage.getItem(storageKey);
if (savedData !== null) {
  const parsedData = JSON.parse(savedData);

  formData.email = parsedData.email;
  formData.message = parsedData.message;
  form.elements.email.value = parsedData.email;
  form.elements.message.value = parsedData.message;
}

form.addEventListener("submit" , event => {
event.preventDefault();
if (formData.email.trim() === ""  || formData.message.trim() === ""){
  alert("Fill please all fields")
}else{
console.log(formData)
 formData.email = ""
  formData.message = ""
  form.reset()
  localStorage.removeItem(storageKey)
}
})
