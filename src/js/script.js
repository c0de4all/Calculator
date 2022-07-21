let money, data;

function start(){
        money= +prompt("Ваш бюджет на месяц ?","");
        data = prompt("Введите дату в формате YYYY-MM-DD","");
        while( isNaN(money) || money =="" || money==null){
            money= +prompt("Ваш бюджет на месяц ?","");
        }
}
start();
let appData={
    budget:money,
    timeData:data,
    expenses:{},
    optionalExpenses:{},
    income:[],
    savings:true,
    chooseExpenses:function(){
        for (let index = 0; index < 2; index++) {
    
            let statya =prompt("Введите обязательную статью" + 
                                "расходов в этом месяце","");
                            
            let rashod =prompt("Во сколько обойдется?","0");
            if((typeof(statya)==='string') && (statya !="") && (typeof (statya) != null)
                && (typeof (rashod) !=null) && (rashod != "") && (statya.length<50) ){ 
                appData.expenses[statya]=rashod;
              
                console.log("Done");
            }
            else{
                index--;
            }

        }
    },
    checkSavings:function(){
        if(appData.savings==true){
            let save =+prompt("Какова сумма накоплений?",0),
                percent=+prompt("Под какой процент?",0);
            
            appData.monthIncome = save/100/12*percent; 
            alert("Сумма ваших ежемесечного дохода: " +appData.monthIncome);   
        }

    },
    detectDayBudget: function(){
        appData.moneyPerDay = (appData.budget/30).toFixed();
        alert("Ежедневный бюджет:" + appData.moneyPerDay);
    },
    detectLevel: function(){
        if(appData.moneyPerDay < 100){
            console.log("Минимальный уровень достатка");
        }else if(appData.moneyPerDay > 100 && appData.moneyPerDay <2000){
            console.log("Средний уровень достатка");
        }else if (appData.moneyPerDay >2000 ){
            console.log("Высокий уровень достатка");
        }else{
            console.log("Произошла ошибка");
        }

    },
    chooseOptExpenses: function(){
      for (let index = 1; index <= 3; index++) {
        appData.optionalExpenses[index] = prompt("Статья необязательных расходов?","");
      }
    },
    chooseIncome: function(){
        let items;
        while(true){
           items =prompt("Что принесёт дополнительный доход? (перечислите через запятую )","");
           if((typeof(items)==='string') && (items!="") && (typeof (items) != null)){
            break;
           }
        }
        appData.income = items.split(', ');
        appData.income.push(prompt("Может что-то ещё?", ""));
        appData.income.sort();
        alert("Способы доп. заработка: ");
        appData.income.forEach(element => {
            alert(element );
        });
    }
};
console.log("Наша программа включает в себя данные: ");
for (const key in appData ){
   console.log(key);
};






