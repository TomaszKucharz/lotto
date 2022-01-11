const divNumbers = document.querySelector(`.numbers`);
const divSquare = document.querySelector(`.largeSquare`);

const arraySquare = [];

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

const lottery = (e) =>
{

   if (code.length === 0)
   {
      for (let i = 0; i < 6; i++)
      {
         const index = Math.floor(Math.random() * (49 - 1 + 1) + 1);
         code.push(index);
      }
      divNumbers.textContent = `your lucky numbers : ${ code }`;
   } else
   {
      alert(`Push - "clear number"`);
   }
   // counter();
}

const cleanList = () =>
{
   code = [];
   divNumbers.textContent = `your lucky numbers : ${ code }`;
}

counter();
/*dodaje pusty tekst */
document.querySelector(`.checkNumber`).addEventListener(`click`, lottery);

document.querySelector(`.cleanList`).addEventListener(`click`, cleanList);