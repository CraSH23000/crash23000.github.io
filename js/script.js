
var count = 0;
var t = 0;
var clickMultiplier = 0;
var autoClicker = 0;
var autoMultClicker = 0;

var clickMultiplierCost = 10;
var autoClickClickCost = 100;
var autoClickClickMultCost = 1000;

var myTimerVar = setInterval(myTimer, 30); //1000

var clicker_button = document.getElementById("clicker_button");
var clicker_label = document.getElementById("clicker_label");

var multiplier_button = document.getElementById("hand_button");
var clickMultAmount = document.getElementById("hand_amount");

var autoClick_button = document.getElementById("monkey_button");
var autoClickerAmount = document.getElementById("monkey_amount");

var autoClickMult_button = document.getElementById("monkey_hand_button");
var autoClickMultAmount = document.getElementById("monkey_hand_amount");

document.getElementById("hand_cost").innerHTML = " " + clickMultiplierCost;
document.getElementById("monkey_cost").innerHTML = " " + autoClickClickCost;
document.getElementById("monkey_hand_cost").innerHTML = " " + autoClickClickMultCost;

clicker_button.onclick = function() {
  count += 1 + clickMultiplier;
  refreshDisplay();
};

multiplier_button.onclick = function() {
  if (count - clickMultiplierCost >= 0) {
    count -= clickMultiplierCost;
    clickMultiplier += 1;
    clickMultiplierCost = Math.ceil(clickMultiplierCost*1.1);
    refreshDisplay();
  }

};

autoClick_button.onclick = function() {
  if (count - autoClickClickCost >= 0) {
    count -= autoClickClickCost;
    autoClicker += 1;
    autoClickClickCost = Math.ceil(autoClickClickCost*1.1);
    refreshDisplay();
  }
};

autoClickMult_button.onclick = function() {
  if (count - autoClickClickMultCost >= 0) {
    count -= autoClickClickMultCost;
    autoMultClicker += 1;
    autoClickClickMultCost = Math.ceil(autoClickClickMultCost*1.1);
    refreshDisplay();
  }
};

function refreshDisplay() {
  clicker_label.innerHTML = nFormat(count);
  clickMultAmount.innerHTML = clickMultiplier;
  autoClickerAmount.innerHTML = autoClicker;
  autoClickMultAmount.innerHTML = autoMultClicker;

  document.getElementById("hand_cost").innerHTML = " " + nFormat(clickMultiplierCost);
  document.getElementById("monkey_cost").innerHTML = " " + nFormat(autoClickClickCost);
  document.getElementById("monkey_hand_cost").innerHTML = " " + nFormat(autoClickClickMultCost);
}

function myTimer() {
  count += (autoClicker * (autoMultClicker+1)) / 33;
  refreshDisplay();
}

function nFormat(num) {
  var si = [
    { value: 1, symbol: "", decimals: 0 },
//    { value: 1E3, symbol: " thousand", decimals: 3 },
    { value: 1E6, symbol: " million", decimals: 3 },
    { value: 1E9, symbol: " billion", decimals: 3 },
    { value: 1E12, symbol: " trillion", decimals: 3 },
    { value: 1E15, symbol: " quadrillion", decimals: 3 },
    { value: 1E18, symbol: " quintillion", decimals: 3 }
  ];
  var rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
  var i;
  for (i = si.length - 1; i > 0; i--) {
    if (num >= si[i].value) {
      break;
    }
  }
  return (num / si[i].value).toFixed(si[i].decimals).replace(rx, "$1") + si[i].symbol;
}
