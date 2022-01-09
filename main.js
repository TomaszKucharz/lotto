// const btn = document.querySelector(`.checkNumber`);
const div = document.querySelector(`div`);

let code = [];

const lottery = () =>
{

   if (code.length === 0)
   {
      for (let i = 0; i < 6; i++)
      {
         const index = Math.floor(Math.random() * (49 - 1 + 1) + 1);
         code.push(index);
      }
      div.textContent = `your numbers : ${ code }`;
   } else
   {
      alert(`Push - "clear number"`);
   }
}

const cleanList = () =>
{
   code = [];
   div.textContent = `your numbers : ${ code }`;
}

/*dodaje pusty tekst */
document.querySelector(`.checkNumber`).addEventListener(`click`, lottery);

document.querySelector(`.cleanList`).addEventListener(`click`, cleanList);