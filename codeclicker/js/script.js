
var count = 10000000;
var t = 0;
var costMultipler = 1.1;

var clickMultiplier = 0;
var autoClicker = 0;
var autoClicker2 = 0;
var autoClicker3 = 0;


var clickMultCost = 10;
var autoClickCost = 100;
var autoClickCost2 = 1000;
var autoClickCost3 = 100000;

var myTimerVar = setInterval(myTimer, 30); //1000

var clicker_button = document.getElementById("clicker_button");
var clicker_label = document.getElementById("clicker_label");

var clickMultAmount = document.getElementById("buyClickMult_amount");
var autoClickerAmount = document.getElementById("buyAutoClick_amount");
var autoClickAmount2 = document.getElementById("buyAutoClick2_amount");
var autoClickAmount3 = document.getElementById("buyAutoClick3_amount");

document.getElementById("buyClickMult_cost").innerHTML = " " + clickMultCost;
document.getElementById("buyAutoClick_cost").innerHTML = " " + autoClickCost;
document.getElementById("buyAutoClick2_cost").innerHTML = " " + autoClickCost2;
document.getElementById("buyAutoClick3_cost").innerHTML = " " + autoClickCost3;

clicker_button.onclick = function() {
  count += 1 + clickMultiplier;
  refreshDisplay();
};

document.getElementsByClassName('clickMult')[0]
        .addEventListener('click', function (event) {
  if (count - clickMultCost >= 0) {
    count -= clickMultCost;
    clickMultiplier += 1;
    clickMultCost = Math.ceil(clickMultCost*costMultipler);
    refreshDisplay();
  }
});

document.getElementsByClassName('autoClick')[0]
        .addEventListener('click', function (event) {
  if (count - autoClickCost >= 0) {
    count -= autoClickCost;
    autoClicker += 1;
    autoClickCost = Math.ceil(autoClickCost*costMultipler);
    refreshDisplay();
  }
});

document.getElementsByClassName('autoClick2')[0]
        .addEventListener('click', function (event) {
  if (count - autoClickCost2 >= 0) {
    count -= autoClickCost2;
    autoClicker2 += 1;
    autoClickCost2 = Math.ceil(autoClickCost2*costMultipler);
    refreshDisplay();
  }
});

document.getElementsByClassName('autoClick3')[0]
        .addEventListener('click', function (event) {
  if (count - autoClickCost3 >= 0) {
    count -= autoClickCost3;
    autoClicker3 += 1;
    autoClickCost3 = Math.ceil(autoClickCost3*costMultipler);
    refreshDisplay();
  }
});

function refreshDisplay() {
  clicker_label.innerHTML = nFormat(count);
  clickMultAmount.innerHTML = nFormat(clickMultiplier);
  autoClickerAmount.innerHTML = nFormat(autoClicker);
  autoClickAmount2.innerHTML = nFormat(autoClicker2);
  autoClickAmount3.innerHTML = nFormat(autoClicker3);

  document.getElementById("buyClickMult_cost").innerHTML = " " + nFormat(clickMultCost);
  document.getElementById("buyAutoClick_cost").innerHTML = " " + nFormat(autoClickCost);
  document.getElementById("buyAutoClick2_cost").innerHTML = " " + nFormat(autoClickCost2);
  document.getElementById("buyAutoClick3_cost").innerHTML = " " + nFormat(autoClickCost3);
}

function myTimer() {
  var temp = 0;
  temp += autoClicker;
  temp += autoClicker2 * 10;
  temp += autoClicker3 * 100;
  count += temp / 33; // used to time the counting to be per second.
  refreshDisplay();
}

function nFormat(num) {
  var si = [
    { value: 1, symbol: "", decimals: 0 },
    //{ value: 1E3, symbol: " thousand", decimals: 3 },
    { value: 1e6, symbol: " million", decimals: 3 },
    { value: 1e9, symbol: " billion", decimals: 3 },
    { value: 1e12, symbol: " trillion", decimals: 3 },
    { value: 1e15, symbol: " quadrillion", decimals: 3 },
    { value: 1e18, symbol: " quintillion", decimals: 3 },
    { value: 1e21, symbol: " sextillion", decimals: 3 },
    { value: 1e24, symbol: " septillion", decimals: 3 },
    { value: 1e27, symbol: " octillion", decimals: 3 },
    { value: 1e30, symbol: " nonillion", decimals: 3 },
    { value: 1e33, symbol: " decillion", decimals: 3 },
    { value: 1e36, symbol: " undecillion", decimals: 3 },
    { value: 1e39, symbol: " duodecillion", decimals: 3 },
    { value: 1e42, symbol: " tredecillion", decimals: 3 },
    { value: 1e45, symbol: " quattuordecillion", decimals: 3 },
    { value: 1e48, symbol: " quindecillion", decimals: 3 },
    { value: 1e51, symbol: " sexdecillion", decimals: 3 },
    { value: 1e54, symbol: " septendecillion", decimals: 3 },
    { value: 1e57, symbol: " octodecillion", decimals: 3 },
    { value: 1e60, symbol: " novemdecillion", decimals: 3 },
    { value: 1e63, symbol: " vigintillion", decimals: 3 },
    { value: 1e66, symbol: " unvigintillion", decimals: 3 },
    { value: 1e69, symbol: " duovigintillion", decimals: 3 },
    { value: 1e72, symbol: " trevigintillion", decimals: 3 },
    { value: 1e75, symbol: " quattuorvigintillion", decimals: 3 },
    { value: 1e78, symbol: " quinvigintillion", decimals: 3 },
    { value: 1e81, symbol: " sexvigintillion", decimals: 3 },
    { value: 1e84, symbol: " septenvigintillion", decimals: 3 },
    { value: 1e87, symbol: " octovigintillion", decimals: 3 },
    { value: 1e90, symbol: " novemvigintillion", decimals: 3 },
    { value: 1e93, symbol: " trigintillion", decimals: 3 },
    { value: 1e96, symbol: " untrigintillion", decimals: 3 },
    { value: 1e99, symbol: " duotrigintillion", decimals: 3 },
    { value: 1E100, symbol: " googol", decimals: 3 },
    { value: 1e102, symbol: " trestrigintillion", decimals: 3 },
    { value: 1e105, symbol: " quattuortrigintillion", decimals: 3 },
    { value: 1e108, symbol: " quinquatrigintillion", decimals: 3 },
    { value: 1e111, symbol: " sextrigintillion", decimals: 3 },
    { value: 1e114, symbol: " septentrigintillion", decimals: 3 },
    { value: 1e117, symbol: " octotrigintillion", decimals: 3 },
    { value: 1e120, symbol: " novemtrigintillion", decimals: 3 },
    { value: 1e123, symbol: " quadragintillion", decimals: 3 },
    { value: 1e126, symbol: " unquadragintillion", decimals: 3 },
    { value: 1e129, symbol: " duoquadragintillion", decimals: 3 },
    { value: 1e132, symbol: " tresquadragintillion", decimals: 3 },
    { value: 1e135, symbol: " quattuorquadragintillion", decimals: 3 },
    { value: 1e138, symbol: " quinquaquadragintillion", decimals: 3 },
    { value: 1e141, symbol: " sexquadragintillion", decimals: 3 },
    { value: 1e144, symbol: " septenquadragintillion", decimals: 3 },
    { value: 1e147, symbol: " octoquadragintillion", decimals: 3 },
    { value: 1e150, symbol: " novemquadragintillion", decimals: 3 },
    { value: 1e153, symbol: " quinquagintillion", decimals: 3 },
    { value: 1e156, symbol: " unquinquagintillion", decimals: 3 },
    { value: 1e159, symbol: " duoquinquagintillion", decimals: 3 },
    { value: 1e162, symbol: " trequinquagintillion", decimals: 3 },
    { value: 1e165, symbol: " quattuorquinquagintillion", decimals: 3 },
    { value: 1e168, symbol: " quinquinquagintillion", decimals: 3 },
    { value: 1e171, symbol: " sexquinquagintillion", decimals: 3 },
    { value: 1e174, symbol: " septenquinquagintillion", decimals: 3 },
    { value: 1e177, symbol: " octoquinquagintillion", decimals: 3 },
    { value: 1e180, symbol: " novemquinquagintillion", decimals: 3 },
    { value: 1e183, symbol: " sexagintillion", decimals: 3 },
    { value: 1e186, symbol: " unsexagintillion", decimals: 3 },
    { value: 1e189, symbol: " duosexagintillion", decimals: 3 },
    { value: 1e192, symbol: " tresexagintillion", decimals: 3 },
    { value: 1e195, symbol: " quattuorsexagintillion", decimals: 3 },
    { value: 1e198, symbol: " quinsexagintillion", decimals: 3 },
    { value: 1e201, symbol: " sexsexagintillion", decimals: 3 },
    { value: 1e204, symbol: " septensexagintillion", decimals: 3 },
    { value: 1e207, symbol: " octosexagintillion", decimals: 3 },
    { value: 1e210, symbol: " novemsexagintillion", decimals: 3 },
    { value: 1e213, symbol: " septuagintillion", decimals: 3 },
    { value: 1e216, symbol: " unseptuagintillion", decimals: 3 },
    { value: 1e219, symbol: " duoseptuagintillion", decimals: 3 },
    { value: 1e222, symbol: " treseptuagintillion", decimals: 3 },
    { value: 1e225, symbol: " quattuorseptuagintillion", decimals: 3 },
    { value: 1e228, symbol: " quinseptuagintillion", decimals: 3 },
    { value: 1e231, symbol: " sexseptuagintillion", decimals: 3 },
    { value: 1e234, symbol: " septenseptuagintillion", decimals: 3 },
    { value: 1e237, symbol: " octoseptuagintillion", decimals: 3 },
    { value: 1e240, symbol: " novemseptuagintillion", decimals: 3 },
    { value: 1e273, symbol: " nonagintillion", decimals: 3 },
    { value: 1e276, symbol: " unnonagintillion", decimals: 3 },
    { value: 1e279, symbol: " duononagintillion", decimals: 3 },
    { value: 1e282, symbol: " trenonagintillion", decimals: 3 },
    { value: 1e285, symbol: " quattuornonagintillion", decimals: 3 },
    { value: 1e288, symbol: " quinnonagintillion", decimals: 3 },
    { value: 1e291, symbol: " sexnonagintillion", decimals: 3 },
    { value: 1e294, symbol: " septennonagintillion", decimals: 3 },
    { value: 1e297, symbol: " octononagintillion", decimals: 3 },
    { value: 1e300, symbol: " novemnonagintillion", decimals: 3 },
    { value: 1e303, symbol: " centillion", decimals: 3 },
    { value: 1e306, symbol: " uncentillion", decimals: 3 },
    { value: 1e309, symbol: " duocentillion", decimals: 3 },
    { value: 1e312, symbol: " centretillion", decimals: 3 },
    { value: 1e315, symbol: " quattuorcentillion", decimals: 3 },
    { value: 1e318, symbol: " quinquacentillion", decimals: 3 },
    { value: 1e321, symbol: " sexcentillion", decimals: 3 },
    { value: 1e324, symbol: " septencentillion", decimals: 3 },
    { value: 1e327, symbol: " octocentillion", decimals: 3 },
    { value: 1e330, symbol: " novemcentillion", decimals: 3 },
    { value: 1e333, symbol: " decicentillion", decimals: 3 },
    { value: 1e336, symbol: " undecicentillion", decimals: 3 },
    { value: 1e339, symbol: " duodecicentillion", decimals: 3 },
    { value: 1e342, symbol: " tredecicentillion", decimals: 3 },
    { value: 1e345, symbol: " quattuordecicentillion", decimals: 3 },
    { value: 1e348, symbol: " quindecicentillion", decimals: 3 },
    { value: 1e351, symbol: " sexdecicentillion", decimals: 3 },
    { value: 1e354, symbol: " septendecicentillion", decimals: 3 },
    { value: 1e357, symbol: " octodecicentillion", decimals: 3 },
    { value: 1e360, symbol: " novemdecicentillion", decimals: 3 },
    { value: 1e363, symbol: " viginticentillion", decimals: 3 },
    { value: 1e366, symbol: " unviginticentillion", decimals: 3 },
    { value: 1e369, symbol: " duoviginticentillion", decimals: 3 },
    { value: 1e372, symbol: " treviginticentillion", decimals: 3 },
    { value: 1e375, symbol: " quattuorviginticentillion", decimals: 3 },
    { value: 1e378, symbol: " quinviginticentillion", decimals: 3 },
    { value: 1e381, symbol: " sexviginticentillion", decimals: 3 },
    { value: 1e384, symbol: " septenviginticentillion", decimals: 3 },
    { value: 1e387, symbol: " octoviginticentillion", decimals: 3 },
    { value: 1e390, symbol: " novemviginticentillion", decimals: 3 },
    { value: 1e393, symbol: " trigintacentillion", decimals: 3 },
    { value: 1e396, symbol: " untrigintacentillion", decimals: 3 },
    { value: 1e399, symbol: " duotrigintacentillion", decimals: 3 },
    { value: 1e402, symbol: " tretrigintacentillion", decimals: 3 },
    { value: 1e405, symbol: " quattuortrigintacentillion", decimals: 3 },
    { value: 1e408, symbol: " quintrigintacentillion", decimals: 3 },
    { value: 1e411, symbol: " sextrigintacentillion", decimals: 3 },
    { value: 1e414, symbol: " septentrigintacentillion", decimals: 3 },
    { value: 1e417, symbol: " octotrigintacentillion", decimals: 3 },
    { value: 1e420, symbol: " novemtrigintacentillion", decimals: 3 },
    { value: 1e423, symbol: " quadragintacentillion", decimals: 3 },
    { value: 1e426, symbol: " unquadragintacentillion", decimals: 3 },
    { value: 1e429, symbol: " duoquadragintacentillion", decimals: 3 },
    { value: 1e432, symbol: " trequadragintacentillion", decimals: 3 },
    { value: 1e435, symbol: " quattuorquadragintacentillion", decimals: 3 },
    { value: 1e438, symbol: " quinquadragintacentillion", decimals: 3 },
    { value: 1e441, symbol: " sexquadragintacentillion", decimals: 3 },
    { value: 1e444, symbol: " septenquadragintacentillion", decimals: 3 },
    { value: 1e447, symbol: " octoquadragintacentillion", decimals: 3 },
    { value: 1e450, symbol: " novemquadragintacentillion", decimals: 3 },
    { value: 1e453, symbol: " quinquagintacentillion", decimals: 3 },
    { value: 1e456, symbol: " unquinquagintacentillion", decimals: 3 },
    { value: 1e459, symbol: " duoquinquagintacentillion", decimals: 3 },
    { value: 1e462, symbol: " trequinquagintacentillion", decimals: 3 },
    { value: 1e465, symbol: " quattuorquinquagintacentillion", decimals: 3 },
    { value: 1e468, symbol: " quinquinquagintacentillion", decimals: 3 },
    { value: 1e471, symbol: " sexquinquagintacentillion", decimals: 3 },
    { value: 1e474, symbol: " septenquinquagintacentillion", decimals: 3 },
    { value: 1e477, symbol: " octoquinquagintacentillion", decimals: 3 },
    { value: 1e480, symbol: " novemquinquagintacentillion", decimals: 3 },
    { value: 1e483, symbol: " sexagintacentillion", decimals: 3 },
    { value: 1e486, symbol: " unsexagintacentillion", decimals: 3 },
    { value: 1e489, symbol: " duosexagintacentillion", decimals: 3 },
    { value: 1e492, symbol: " tresexagintacentillion", decimals: 3 },
    { value: 1e495, symbol: " quattuorsexagintacentillion", decimals: 3 },
    { value: 1e498, symbol: " quinsexagintacentillion", decimals: 3 },
    { value: 1e501, symbol: " sexsexagintacentillion", decimals: 3 },
    { value: 1e504, symbol: " septensexagintacentillion", decimals: 3 },
    { value: 1e507, symbol: " octosexagintacentillion", decimals: 3 },
    { value: 1e510, symbol: " novemsexagintacentillion", decimals: 3 },
    { value: 1e513, symbol: " septuagintacentillion", decimals: 3 },
    { value: 1e516, symbol: " unseptuagintacentillion", decimals: 3 },
    { value: 1e519, symbol: " duoseptuagintacentillion", decimals: 3 },
    { value: 1e522, symbol: " treseptuagintacentillion", decimals: 3 },
    { value: 1e525, symbol: " quattuorseptuagintacentillion", decimals: 3 },
    { value: 1e528, symbol: " quinseptuagintacentillion", decimals: 3 },
    { value: 1e531, symbol: " sexseptuagintacentillion", decimals: 3 },
    { value: 1e534, symbol: " septenseptuagintacentillion", decimals: 3 },
    { value: 1e537, symbol: " octoseptuagintacentillion", decimals: 3 },
    { value: 1e540, symbol: " novemseptuagintacentillion", decimals: 3 },
    { value: 1e543, symbol: " octogintacentillion", decimals: 3 },
    { value: 1e546, symbol: " unoctogintacentillion", decimals: 3 },
    { value: 1e549, symbol: " duoctogintacentillion", decimals: 3 },
    { value: 1e552, symbol: " treoctogintacentillion", decimals: 3 },
    { value: 1e555, symbol: " quattuoroctogintacentillion", decimals: 3 },
    { value: 1e558, symbol: " quinoctogintacentillion", decimals: 3 },
    { value: 1e561, symbol: " sexoctogintacentillion", decimals: 3 },
    { value: 1e564, symbol: " septenoctogintacentillion", decimals: 3 },
    { value: 1e567, symbol: " octooctogintacentillion", decimals: 3 },
    { value: 1e570, symbol: " novemoctogintacentillion", decimals: 3 },
    { value: 1e573, symbol: " nonagintacentillion", decimals: 3 },
    { value: 1e576, symbol: " unnonagintacentillion", decimals: 3 },
    { value: 1e579, symbol: " dunonagintacentillion", decimals: 3 },
    { value: 1e582, symbol: " trenonagintacentillion", decimals: 3 },
    { value: 1e585, symbol: " quattuornonagintacentillion", decimals: 3 },
    { value: 1e588, symbol: " quinnonagintacentillion", decimals: 3 },
    { value: 1e591, symbol: " sexnonagintacentillion", decimals: 3 },
    { value: 1e594, symbol: " septennonagintacentillion", decimals: 3 },
    { value: 1e597, symbol: " octononagintacentillion", decimals: 3 },
    { value: 1e600, symbol: " novemnonagintacentillion", decimals: 3 },

    { value: Math.pow(10, 1E100), symbol: " googolplex", decimals: 3 }
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
