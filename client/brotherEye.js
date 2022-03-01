const brotherEye = (el) => {
  el.preventDefault();
  alert("Big Brother is Watching You.");
};
let eyeball = document.getElementById("brotherEye");
eyeball.addEventListener("click", brotherEye);

const newFortune = {
  id: 490,
  fortune: "A little leaven leaventh the whole lump.",
};
const addPost = (body) => {
  axios
    .post("http://localhost:4000/api/fortune", body)
    .then((res) => {
      console.log("It worked!");
      console.log(res.data);
    })
    .catch((error) => {
      console.log("It didn't work.");
    });
};
addPost(newFortune);
