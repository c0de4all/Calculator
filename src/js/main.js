let btnStart = document.getElementById('start'),
    budgetValue = document.getElementsByClassName('budget-value')[0],
    daybudgetValue = document.getElementsByClassName('daybudget-value')[0],
    levelValue = document.getElementsByClassName('level-value')[0],
    expensesValue = document.getElementsByClassName('expenses-value')[0],
    optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
    incomeValue = document.getElementsByClassName('income-value')[0],
    monthsavingsValue = document.getElementsByClassName('monthsavings-value')[0],
    yearsavingsValue = document.getElementsByClassName('yearsavings-value')[0],


    inpExpenses = document.getElementsByClassName('expenses-item'),
    btnExpenses = document.getElementsByTagName('button')[0],
    btnOptExpenses= document.getElementsByTagName('button')[1],
    btnRaschet = document.getElementsByTagName('button')[2],  
    inpOptExpen = document.querySelectorAll('.optionalexpenses-item'),
    inpChooseInc = document.querySelector('.choose-income'),
    inpChkSav = document.querySelector('#savings'),
    inpSum = document.querySelector('.choose-sum'),
    inpPercent = document.querySelector('.choose-percent'),
    inpYear = document.querySelector('.year-value'),
    inpMonth = document.querySelector('.month-value'),
    inpDay = document.querySelector('.day-value');
let money, data;
btnExpenses.setAttribute("disabled", "disabled");
btnOptExpenses.setAttribute("disabled", "disabled");
btnRaschet.setAttribute("disabled", "disabled");
btnStart.addEventListener('click',function(){
    data = prompt("Введите дату в формате YYYY-MM-DD","");
    money= +prompt("Ваш бюджет на месяц ?","");
    while( isNaN(money) || money =="" || money==null){
        money= +prompt("Ваш бюджет на месяц ?","");
    }
    appData.budget=money;
    appData.timeData=data;
    budgetValue.textContent=money.toFixed();
    inpYear.value = new Date(Date.parse(data)).getFullYear();
    inpMonth.value = new Date(Date.parse(data)).getMonth() +1;
    inpDay.value = new Date(Date.parse(data)).getDate();
    btnExpenses.removeAttribute("disabled");
    btnOptExpenses.removeAttribute("disabled");
    btnRaschet.removeAttribute("disabled");

});
btnExpenses.addEventListener('click', function(){
    let sum = 0;
    for (let i = 0; i < inpExpenses.length; i++) {
        
        let a =inpExpenses[i].value;            
        let b =inpExpenses[++i].value;
        if((typeof(a)==='string') && (a !="") && (typeof (a) != null)
            && (typeof (b) !=null) && (b != "") && (b.length<50) ){ 
            appData.expenses[a]=b;
            sum+=+b;
            
        }
        else{
            i--;
        }
    }
    expensesValue.textContent = sum;
    appData.budget = appData.budget - sum;

});
btnOptExpenses.addEventListener('click',function(){
    for (let i = 0; i <= inpOptExpen.length; i++) {
        appData.optionalExpenses[i] = inpOptExpen[i].value;
        optionalExpensesValue.textContent += appData.optionalExpenses[i] + ' ' ;
    }
});
btnRaschet.addEventListener('click', function(){
    if(appData.budget !=undefined){
        appData.moneyPerDay = (appData.budget/30).toFixed();
        daybudgetValue.textContent=appData.moneyPerDay;
        if(appData.moneyPerDay < 100){
            levelValue.textContent="Минимальный уровень достатка";
        }else if(appData.moneyPerDay > 100 && appData.moneyPerDay <2000){
            levelValue.textContent="Средний уровень достатка";
        }else if (appData.moneyPerDay >=2000 ){
            levelValue.textContent="Высокий уровень достатка";
        }else{
            levelValue.textContent="Произошла ошибка";
        }
    }
    else{
        daybudgetValue.textContent="Произошла ошибка";
    }
});
inpChooseInc.addEventListener('input', function(){
    let items = inpChooseInc.value;
    appData.income=items.split(', ');
    incomeValue.textContent=appData.income;    
});
inpChkSav.addEventListener('click', function(){
    if (appData.savings){
        appData.savings = false;
    }
    else{
        appData.savings = true;
    }
    
});
inpSum.addEventListener('input', function(){
    if (appData.savings){
        let sum = +inpSum.value,
            per = +inpPercent.value;
        appData.monthIncome = sum/100/12*per;
        appData.yearIncome = sum/100*per;
        monthsavingsValue.textContent=appData.monthIncome.toFixed(1);
        yearsavingsValue.textContent=appData.yearIncome.toFixed(1);

    }
});
inpPercent.addEventListener('input', function(){
    if (appData.savings){
        let sum = +inpSum.value,
            per = +inpPercent.value;
        appData.monthIncome = sum/100/12*per;
        appData.yearIncome = sum/100*per;
        monthsavingsValue.textContent=appData.monthIncome.toFixed(1);
        yearsavingsValue.textContent=appData.yearIncome.toFixed(1);
        
    }
});
let appData={
    budget:money,
    timeData:data,
    expenses:{},
    optionalExpenses:{},
    income:[],
    savings:false,
};


