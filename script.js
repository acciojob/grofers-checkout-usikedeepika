const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
  const prices = document.querySelectorAll(".price");
    let totalPrice = 0;


  
    prices.forEach(price => {
      totalPrice += parseFloat(price.textContent) || 0; // Convert text to number
    });
  

    console.log("Total Price:", totalPrice);
   
      let mytable=document.getElementById("my-table")

      let row=document.createElement('tr');

      row.innerHTML=` <td>Total price</td><td>${totalPrice}</td>`;
       mytable.appendChild(row);

  
};

getSumBtn.addEventListener("click", getSum);

