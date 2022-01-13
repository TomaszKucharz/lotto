const divNumbers = document.querySelector(`.numbers`);
const divSquare = document.querySelector(`.largeSquare`);
// wstawiam tablicę arraySquare , którą wykorzytuję do zbudowania graficznego kwadratu z liczbami do skreslenia w LOTTO
let arraySquare = [];
// funkcja COUNTER wypełnia tablicę liczbami do 49 
const counter = () =>
{
   for (let i = 1; i <= 49; i++)
   {
      arraySquare.push(i);
      const newDiv = document.createElement(`div`);
      divSquare.appendChild(newDiv).textContent = [i];
   }

}
// deklaracja tablicy CODE , tablica do obsługi losowanych liczb (6 z 49)
let code = [];
// główna funkcja, uruchamia losowanie , wprowadza warunki nie powtarzania się losowanych liczb. Wylosowane liczby push'uje do tablicy CODE. Na końcu wyświetla ją w  DIVNUMBERS. 
const lottery = () =>
{

   if (code.length === 0)
   {
      for (let i = 0; i < 6; i++)
      {
         const index = Math.floor(Math.random() * (49 - 1 + 1) + 1);

         if (code.includes(index))
         {
            --i;
         } else
         {
            code.push(index);
         }
      }
      divNumbers.textContent = `your lucky numbers : ${ code }`;
   } else
   {
      alert(`Push - "clear number"`);
   }
   colorCounter();
}
//funkcja kolorująca wylosowane liczby
const colorCounter = () =>
{
   for (let i = 0; i < code.length; i++)
   {
      if (arraySquare.includes(code[i]))
      {
         const newDiv = document.querySelector(`.largeSquare div:nth-child(${ code[i] })`);
         newDiv.classList.add(`active`);
      } else
      {
         return alert("jeśli widzisz ten tekst, to oznacza że coś się sypie w kodzie programu!!");
      }
   }
}
// funkcja czyszcząca zawartość tablicy CODE i textContent z DIVNUMBERS oraz czyści wynik losowania w DIVSQUARE i uruchamia ponownie funkcję COUNTER
const cleanList = () =>
{
   code = [];
   divNumbers.textContent = `your lucky numbers : ${ code }`;
   divSquare.innerHTML = "";
   counter();
}
//wywołanie funkcji counter
counter();
// nasłuchiwanie na kliknięcie BUTTON'ów
document.querySelector(`.checkNumber`).addEventListener(`click`, lottery);
document.querySelector(`.cleanList`).addEventListener(`click`, cleanList);
