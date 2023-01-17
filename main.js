var otpGenBtn = document.getElementById('otpGenBtn');
var genNumber = document.getElementById('genNumber');
var randomOtp;
function generateOTP(){
  randomOtp = Math.floor(100000 + Math.random() * 900000);
  return randomOtp;
}

otpGenBtn.addEventListener('click', function(){
  generateOTP();
  genNumber.value = randomOtp;
})