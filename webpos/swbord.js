const Keyboard = window.SimpleKeyboard.default;

const myKeyboard = new Keyboard({
    onChange: input => onChange(input),
    onKeyPress: button => onKeyPress(button),
    layout: {
        'default': [
            '1 2 3 4 5 6 7 8 9 0 00 {bksp}',
            '{enter}'
        ],
        'shift': [
            '1 2 3 4 5 6 7 8 9 0 00 {bksp}',
            '{enter}'
        ]
    }
});

function onChange(input) {
    document.querySelector(".inputA").value = input;
    console.log("Input changed", input);
}

function onKeyPress(button) {
    console.log("Button pressed", button);
}

