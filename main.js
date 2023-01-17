var otpGenBtn = document.getElementById('otpGenBtn');
var genNumber = document.getElementById('genNumber');
var randomOtp;
var keys = document.querySelectorAll('.key');
var otpInput = document.getElementById('otpInput');
var addValues = [];

otpGenBtn.addEventListener('click', function(){
  generateOTP();
  genNumber.value = parseInt(randomOtp);
});

keys.forEach(function(key){
  getKeyValue(key);
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
