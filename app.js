const correctAns = ['A','B','A','B'];
const form = document.querySelector('.quiz-form');

form.addEventListener('submit', e=> {
    e.preventDefault();

    let score = 0;
    const userAns = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];
    
    //Check answers
    userAns.forEach((answer,index) => {
        if(correctAns[index] === answer){
            score += 25;
        }
    });

    //Shpw result
    const result = document.querySelector('.result');

    scrollTo(0,0);
    result.querySelector('span').textContent = `${score}%`;
    result.classList.remove('d-none');

    let output = 0;
    const timer = setInterval(() => {
        result.querySelector('span').textContent = `${output}%`;
        if(output === score){
            clearInterval(timer);
        }else {
            output++;
        }
    }, 10);

});
//Window object
//window.confirm.log('Hello');
/*setTimeout(() => {
    alert('The test is over!!');
}, 10000);*/

/*let i = 0;
const timer = setInterval(() => {
    console.log('Hello');
    i++
    if(i === 5){
        clearInterval(timer);
    }
}, 1000);*/
