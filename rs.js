var rangeElem = document.getElementById('range')

var textElem = document.getElementById('text')

var resultElem = document.getElementById('result')

var nf = new Intl.NumberFormat();

//const calc = n => n * 1000
function calc(n){
  return n * 1000
}

//const format = s => nf.format(s).replaceAll(',', "'") // '10'000'
function format(s){
  return nf.format(s).replace(',', "'") // '10'000'
}
/**
 * Lower range value
 */
var Lower = 0

/**
 * Upper range value
 */
var Upper = 100


/**
 * Returns true if string is a number
 */
const isNumber = s => !isNaN(s)

/**
 * Returns true if string is empty
 */
const isEmpty = s => s.length == 0

/**
 * Returns a number unchanged if it is in the Lower to Upper range.
 * Returns Lower value if the number is less than the Lower value.
 * Returns Upper value if the number is greater than the Upper value.
 */
const clamp = n => {
  const n1 = Math.max(Lower, n)
  const n2 = Math.min(n1, Upper)
  return n2
}

/**
 * Update textElem value to rangeElem value
 */
//
const rangeHandler = _ => {                 
  const n = rangeElem.value
  const r = calc(n)
  const f = format(r)

 textElem.value = n
  resultElem.textContent = f
}


/**
 * Replace textElem with Lower value if it is an empty string
 * Replace textElem with rangeElem value if it's not a number
 * Clamp textElem number to [0, 1000] range
 * Update textElem to clamped value
 * Update rangeElem value
 */
const textHandler = _ => {
  const s = textElem.value
  const v0 = rangeElem.value

  const v1 = isEmpty(s) ? Lower : s
  const v2 = isNumber(v1) ? clamp(v1) : v0

  const r = calc(v2)
  const f = format(r)

  textElem.value = v2
  rangeElem.value = v2
  resultElem.textContent = f
}


/**
 * Update initial rangeElem value to Lower value
 */
rangeElem.value = Lower

/**
 * Update initial textElem value to rangeElem value
 */
textElem.value = rangeElem.value


/**
 * Subscribe to rangeElem events
 */
rangeElem.addEventListener('input', rangeHandler)

/**
 * Subscribe to textElem events
 */
textElem.addEventListener('input', textHandler)

