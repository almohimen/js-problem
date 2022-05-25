function picnicBudget(people)
{   

    if(people <=100)
    {
        const totalTaka = people * 5000;
        return totalTaka;
    }
    else if (people <=200)
    {
        const first100Budget = 100*5000;
        const restPeople = people - 100;
        const restPeopleBudget = restPeople * 4000;
        const totalTaka = first100Budget + restPeopleBudget;
        return totalTaka;
    }
    else
    {
        const first100Budget = 100*5000;
        const second100Budget = 100* 4000;
        const restPeople = people - 200;
        const restPeopleBudget = restPeople * 3000;
        const totalTaka = first100Budget + second100Budget + restPeopleBudget;
        return totalTaka;
    }

}
const budget = picnicBudget(210);
console.log(budget);