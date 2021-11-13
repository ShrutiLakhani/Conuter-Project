let count = 0;
const valBtn = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");
  
btns.forEach(function (btn){
  btn.addEventListener("click", function (e)
  {
    const styles = e.currentTarget.classList;
    if (styles.contains("decrease"))
    {
      count--;
    }
    else if(styles.contains("reset"))
    {
      count = 0;
    }
    else if(styles.contains("increase"))
    {
      count++;
    }
    if (count > 0)
    {
      valBtn.style.color = "green";
    }
    else if (count < 0)
    {
      valBtn.style.color = "red";
    }
    else if (count === 0)
    {
      valBtn.style.color = "black";
    }

    valBtn.textContent = count;
  });

});