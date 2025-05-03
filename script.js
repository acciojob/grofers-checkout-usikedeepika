const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
  const prices = document.querySelectorAll(".price");
    let ans = 0;

   if(!prices){
	   return;
   }
  
    prices.forEach(price => {
      ans += parseFloat(price.textContent) || 0; // Convert text to number
    });
  


   
      let mytable=document.querySelector("table")

      let row=document.createElement('tr');

      row.innerHTML=` <td>Total price</td><td>${ans}</td>`;
       mytable.appendChild(row);

  
};

getSumBtn.addEventListener("click", getSum);

