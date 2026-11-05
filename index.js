let display = document.getElementById('display');
let current = '0';
let resetNext = false;

function updateDisplay() { display.textContent = current; }

function appendNumber(num) {
  if (resetNext) { current = '0'; resetNext = false; }
  if (num === '.' && current.includes('.')) return;
  current = (current === '0' && num !== '.') ? num : current + num;
  updateDisplay();
}

function appendOperator(op) {
  const lastChar = current.slice(-1);
  if ('+-*/%'.includes(lastChar)) current = current.slice(0, -1) + op;
  else current += op;
  updateDisplay();
}

function deleteLast() {
  current = current.length > 1 ? current.slice(0, -1) : '0';
  updateDisplay();
}

function clearAll() { current = '0'; resetNext = false; updateDisplay(); }

function calculate() {
  try {
    if (!/^[0-9+\-*/.%\s]+$/.test(current)) throw new Error('Invalid');
    let expression = current.replace(/%/g, '/100');
    let result = Function('"use strict"; return (' + expression + ')')();
    if (!isFinite(result)) throw new Error('Math error');
    current = String(Math.round(result * 1e10) / 1e10);
    resetNext = true;
    updateDisplay();
  } catch (e) {
    current = 'Error';
    resetNext = true;
    updateDisplay();
  }
}