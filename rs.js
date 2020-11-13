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

var Lower = 0

var Upper = 100

const isNumber = s => !isNaN(s)

const isEmpty = s => s.length == 0

const clamp = n => {
  const n1 = Math.max(Lower, n)
  const n2 = Math.min(n1, Upper)
  return n2
}

const rangeHandler = _ => {                 
  const n = rangeElem.value
  const r = calc(n)
  const f = format(r)

 textElem.value = n
  resultElem.textContent = f
}

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

