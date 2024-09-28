let pre = document.getElementById("previous");
let act = document.getElementById("actual");

function is_sign(char) {
    return "+-*/".includes(char);
}

function is_num(char) {
    return ".0123456789".includes(char);
}

function act_to_prev(char) {
    pre.innerText += act.innerText;
    act.innerText = char;
}

function add_char(char) {
    if (is_num(char)) {
        if (is_sign(act.innerText.slice(-1)) && act.innerText.slice(-1) != "-") {
            pre.innerText += act.innerText;
            act.innerText = "";
        }
        act.innerText += char;
    }
    if (is_sign(char)) {
        pre.innerText += act.innerText;
        act.innerText = char;
    }
}

function clear_display() {
    act.innerText = "";
    pre.innerText = "";
}

function back() {
    act.innerText = act.innerText.slice(0, -1);
    if (act.innerText == "") {
        if (is_sign(pre.innerText.slice(-1))) {
            pre.innerText = pre.innerText.slice(0, -1);
        }
        else {
            while (is_num(pre.innerText.slice(-1)) && pre.innerText != "") {
                act.innerText = pre.innerText.slice(-1) + act.innerText;
                pre.innerText = pre.innerText.slice(0, -1);
            }
        }
    }
}

function calculate() {
    act.innerText = eval(pre.innerText + act.innerText);
    pre.innerText = "";
}