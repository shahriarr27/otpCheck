var otpGenBtn = document.getElementById('otpGenBtn');
var genNumber = document.getElementById('genNumber');
var randomOtp;
var keys = document.querySelectorAll('.key');
var otpInput = document.getElementById('otpInput');
var addValues = [];

const checkBtn = document.getElementById('checkBtn');

otpGenBtn.addEventListener('click', function(){
  generateOTP();
  genNumber.value = parseInt(randomOtp);
});

keys.forEach(function(key){
  getKeyValue(key);
});

checkBtn.addEventListener('click',function(){
  if (genNumber.value == ''){
    alert('Generate an OTP First');
  }
  else{
    var result = document.getElementById('result');
    result.style.display = 'block';
    if (genNumber.value == otpInput.value){
      document.getElementById('matched').style.display = 'block';
      document.getElementById('failed').style.display = 'none';
    }
    else{
      document.getElementById('matched').style.display = 'none';
      document.getElementById('failed').style.display = 'block';
    }
  }
});

function getKeyValue(key){
  key.addEventListener('click', function(){
    var keyValue = key.value;
    addValues.push(keyValue);
    if(addValues.length >= 6){
      keys.forEach(function(key){
        key.setAttribute('disabled', 'disabled');
      })
    }
    for (let i = 0; i < addValues.length; i++) {
      var value = addValues.join('');
    }
    otpInput.value = parseInt(value);
  });
};

function generateOTP(){
  randomOtp = Math.floor(100000 + Math.random() * 900000);
  return randomOtp;
};
