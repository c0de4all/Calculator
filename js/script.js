let money= prompt("Ваш бюджет на месяц ?","");
let data = prompt("Введите дату в формате YYYY-MM-DD","");

let appData={
    budget:money,
    timeData:data,
    expenses:{},
    optionalExpenses:{},
    income:[],
    savings:false
};
for (let index = 0; index < 2; index++) {
    let statya =prompt("Введите обязательную статью" + 
                        "расходов в этом месяце","");
    appData.expenses                    
    let rashod =prompt("Во сколько обойдется?","0");                    
    appData.expenses[statya]=rashod;
    appData.budget=+appData.budget - rashod;
}
console.log(appData.expenses);
 
alert("Бюджет на 1 день:" + (appData.budget/30));
