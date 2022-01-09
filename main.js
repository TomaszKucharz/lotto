const btn = document.querySelector(`.checkNumber`);
const div = document.querySelector(`div`);


const lottery = () =>
{
   let code = [];
   for (let i = 0; i < 6; i++)
   {
      const index = Math.floor(Math.random() * (49 - 1 + 1) + 1);
      code.push(index);

   }
   div.textContent = `your numbers are : ${ code }`;

}

const cleanList = () =>
{
   div.textContent = ``;
}

/*dodaje pusty tekst */
btn.addEventListener(`click`, lottery);
