const divNumbers = document.querySelector(`.numbers`);
const divSquare = document.querySelector(`.largeSquare`);

let arraySquare = [];

const counter = () =>
{
   for (let i = 1; i <= 49; i++)
   {
      arraySquare.push(i);
      const newDiv = document.createElement(`div`);
      divSquare.appendChild(newDiv).textContent = [i];
   }

}

let code = [];

const lottery = () =>
{

   if (code.length === 0)
   {
      for (let i = 0; i < 6; i++)
      {
         const index = Math.floor(Math.random() * (49 - 1 + 1) + 1);

         if (code.includes(index))
         {
            console.log("not ok");
            --i;
         } else
         {
            console.log("ok");
            code.push(index);
         }
         console.log(code);
      }
      divNumbers.textContent = `your lucky numbers : ${ code }`;
   } else
   {
      alert(`Push - "clear number"`);
   }
}

const cleanList = (e) =>
{
   code = [];
   divNumbers.textContent = `your lucky numbers : ${ code }`;
}

counter();
document.querySelector(`.checkNumber`).addEventListener(`click`, lottery);
document.querySelector(`.cleanList`).addEventListener(`click`, cleanList);
