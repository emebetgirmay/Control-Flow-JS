
//1. Write a program that takes an array of days like "Mon", "Tue", and "Fri" and uses a switch statement to print what type of delivery is scheduled on each day.

const typeOfDelivery = (days) => {
    days.forEach(day => {
        switch (day) {
            case 'Monday':
                console.log(`Lunch from mcdonalds is sheduled for ${day}`)
                break;
            case 'Tuesday':
                console.log(`Dish washer delivery is sheduled for ${day}`)
                break;
            case 'Friday':
                console.log(`House paint is sheduled for ${day}`)
                break;
            default:
                console.log('No delivery sheduled for this day')
        }
    })
}
const days = ['Monday', 'Tuesday', 'Wednsday', 'Thursday', 'Friday'];
typeOfDelivery(days);


//2. Create a program that loops through an array of book statuses and prints "Ready to lend" if the status is "available" or "Checked out" if the status is "borrowed".

const checkBookStatus=(booksStatus)=>{
    for(let i=0; i<booksStatus.length; i++){
if(booksStatus[i]=='available'){
    console.log('Ready to lend')
}else {
    console.log('Checked out')
}
    }
}
const booksStatus=['available','borrowed', 'available'];
checkBookStatus(booksStatus);

//3. Given an array of customer ages, write a program that checks each age and prints "Adult" if the age is 18 or above, and "Minor" otherwise.
const checkAges=(customerAges)=>{
for(i=0; i<customerAges.length; i++){
    if (customerAges[i]>=18){
        console.log('Adult')
    }else {
        console.log('Minor')
    }
}
}
customerAges=[23,12,4,23,46,75,43];
checkAges(customerAges);

//4. Write a program using a while loop that simulates a countdown of lives in a game starting from 5 and prints "You have X lives left" on each loop until it reaches 0.
 const countdownLives=() =>{
    let numberOfLives=5
    while(numberOfLives >= 1){
        console.log(`You have left ${numberOfLives} lives left`)
        numberOfLives--;
    }
    console.log('Game Over')
 };
 countdownLives();


//5. Using a do...while loop, write a program that loops through an array of user feedback and prints each comment until the array is empty.
const printFeedback=(usersFeedback)=>{
    let i = 0;
    do{
        if(usersFeedback[i]){
            console.log(usersFeedback[i]);
            i++
        }else{
            break;
        }
    }while (i<usersFeedback.length)
}

const usersFeedback=['Boring', 'Interesting', 'Fun','No comment'];
printFeedback(usersFeedback);




//6. Write a program that loops through an array of user login statuses and prints "Welcome back!" if the user is "logged in" or "Please log in" otherwise.
const checkUserLoginStatus=(userLoginStatus)=>{
userLoginStatus.forEach(status=>{
    switch (status){
        case 'logged in':
            console.log('Welcome back!')
            break;
            default:
                console.log('Please log in')
    }
})
};
const userLoginStatus = ['logged in', 'not logged in'];
checkUserLoginStatus(userLoginStatus);


//7. Write a program that processes an array of support ticket priorities using a switch statement to print how quickly each one should be addressed based on whether the priority is "low", "medium", or "high".
const checkPriority=(ticketPriorities)=>{
  ticketPriorities.forEach(ticket =>{
    switch (ticket){
        case 'High':
            console.log('first priority')
            break;
            case 'Medium':
                console.log('can wait')
                break;
              default:
                    console.log('Does not matter')
    }
  })
};
const ticketPriorities=['Low', 'High', 'Medium'];
checkPriority(ticketPriorities);



//8. Create a while loop that simulates a quiz countdown from 10 seconds, printing each number until it reaches 0.
const countdownQuiz=() =>{
    let timeForQuize=10;
    while(timeForQuize>=0){
        console.log(`You have left with ${timeForQuize} seconds`)
        timeForQuize --
    }
    console.log(`Put your pen's down`)
}
countdownQuiz();