let score = 0; // Инциализируем переменную счета 
let money= 0

const hamster =document.getElementById("hamster") ; // Получаем элемент хомяка

const scoreDisplay = document.getElementById("score") // Получаем элемент для отображения счета 


const button =document.getElementById("hamster") ; // Получаем элемент хомяка

const moneyDisplay = document.getElementById("score")

hamster.addEventListener("click", () =>  {score++; // Увеличиваем счет на 1 при клике

scoreDisplay.textContent = `Счет: ${score}`;
// Обновляем изображение


})

button.addEventListener("click",() => {
if(score >= 100){
money=money+100;
score=score-100;
moneyDisplay.textContent = `Мои деньги: ${money} рублей `;
scoreDisplay.textContent = `Счет : ${score}` ;


}else {alert(`Не хвотает монет.Посмотри на свой счет`)}
  //consol.log(`tderytdiftydif`)







})

