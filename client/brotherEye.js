const brotherEye = (el) => {
    el.preventDefault();
    alert("Big Brother is Watching You.");
  };
  let eyeball = document.getElementById("brotherEye")
  eyeball.addEventListener("click", brotherEye);

  
  