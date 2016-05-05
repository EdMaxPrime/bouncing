(function() {
    var map = [
        "", "", "", "", "", "", "", "", "BACKSPACE", "\t", "", "", "", "\n", "", "", "SHIFT", "CONTROL", "ALT", "PAUSE", "CAPS", "", "", "", "", "", "", "ESC", "", "", "", "", " ", "PGUP", "PGDOWN", "END", "HOME", "LEFT", "UP", "RIGHT", "DOWN", "", "", "", "", "INSERT", "DELETE", "", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "", "", "", "", "", "", "", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "LWINDOW", "RWINDOW", "SELECT", "", "", "n0", "n1", "n2", "n3", "n4", "n5", "n6", "n7", "n8", "n9", "MULTIPLY", "ADD", "", "SUBTRACT", "DECIMAL", "DIVIDE", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "f10", "f11", "f12", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "NUMLOCK", "SCROLL_LOCK", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ";", "=", ",", "-", ".", "/", "`", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "[", "\\", "]", "\'"
    ];
    var map_shift = [
        "", "", "", "", "", "", "", "", "BACKSPACE", "\t", "", "", "", "\n", "", "", "SHIFT", "CONTROL", "ALT", "PAUSE", "CAPS", "", "", "", "", "", "", "ESC", "", "", "", "", " ", "PGUP", "PGDOWN", "END", "HOME", "LEFT", "UP", "RIGHT", "DOWN", "", "", "", "", "INSERT", "DELETE", "", ")", "!", "@", "#", "$", "%", "^", "&", "*", "(", "", "", "", "", "", "", "", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "LWINDOW", "RWINDOW", "SELECT", "", "", "n0", "n1", "n2", "n3", "n4", "n5", "n6", "n7", "n8", "n9", "MULTIPLY", "ADD", "", "SUBTRACT", "DECIMAL", "DIVIDE", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "f10", "f11", "f12", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "NUMLOCK", "SCROLL_LOCK", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ":", "+", "<", "_", ">", "?", "~", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "{", "|", "}", "\""
    ];
    function fromKeyCode(keycode, shift) {
        if(shift) return map_shift[keycode];
        else return map[keycode];
    }
    window.fromKeyCode = fromKeyCode;
})();
/*
var map = [
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "BACKSPACE",
        "\t",
        "",
        "",
        "",
        "\n",
        "",
        "",
        "SHIFT",
        "CONTROL",
        "ALT",
        "PAUSE",
        "CAPS",
        "",
        "",
        "",
        "",
        "",
        "",
        "ESC",
        "",
        "",
        "",
        "",
        "",
        "PGUP",
        "PGDOWN",
        "END",
        "HOME",
        "LEFT",
        "UP",
        "RIGHT",
        "DOWN",
        "",
        "",
        "",
        "",
        "INSERT",
        "DELETE",
        "",
        "0",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
        "g",
        "h",
        "i",
        "j",
        "k",
        "l",
        "m",
        "n",
        "o",
        "p",
        "q",
        "r",
        "s",
        "t",
        "u",
        "v",
        "w",
        "x",
        "y",
        "z",
        "LWINDOW",
        "RWINDOW",
        "SELECT",
        "",
        "",
        "n0",
        "n1",
        "n2",
        "n3",
        "n4",
        "n5",
        "n6",
        "n7",
        "n8",
        "n9",
        "MULTIPLY",
        "ADD",
        "",
        "SUBTRACT",
        "DECIMAL",
        "DIVIDE",
        "f1",
        "f2",
        "f3",
        "f4",
        "f5",
        "f6",
        "f7",
        "f8",
        "f9",
        "f10",
        "f11",
        "f12",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "NUMLOCK",
        "SCROLL_LOCK",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        ";",
        "=",
        ",",
        "-",
        ".",
        "/",
        "`",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "[",
        "\\",
        "]",
        "\""
    ];
*/