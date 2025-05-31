const form = document.querySelector('form')

form.addEventListener('submit', function(e){
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)){
    results.innerHTML = `please give valid height`;
    } else if(weight === '' || weight < 0 || isNaN(weight)){
      results.innerHTML = `please give valid weight`;
    } else {
      const bmi = (weight*10000/(height*height)).toFixed(2);
      var answer;
      if(bmi<18.6){
        answer = "Underweight"
      }else if(bmi>24.9){
        answer = "Overweight"
      }else{
        answer = "Normal weight"
      }
      results.innerHTML = `Your BMI is <span>${bmi}</span><br>You are ${answer}`;
    }

 
});