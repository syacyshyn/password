/*
As password types check if it is weak, medium, strong
i.e. contains a capital letter, number, special character, and is at least 8 letters.
 Check if re-typed password matches initial password
 */

const passwordBox = document.getElementById("password-box");
const retypePasswordBox = document.getElementById("retype-password-box");
const passwordStrengthBox = document.getElementById("strength");

let strengthTest = 0;
let hasSpecialCharacter = false;
passwordBox.onkeydown = function (keyboardEvent) {
    if (keyboardEvent.key.length === 1) {
        let passwordBeingTyped = passwordBox.value;
        for (let individualCharacter of passwordBeingTyped) {
            if (individualCharacter === individualCharacter.toUpperCase() && !/[~!@#$%^&*()_+{}:"<>?\|]/.test(individualCharacter)) {
                strengthTest++;
            }
            if (!hasSpecialCharacter && /[~!@#$%^&*()_+{}:"<>?\|]/.test(individualCharacter)) {

                strengthTest++;
                hasSpecialCharacter = true;
            }
        }
        if (passwordBeingTyped.length < 8) {
            passwordStrengthBox.innerText = "easy"
        }
        if (passwordBeingTyped.length >= 8 && (strengthTest === 1 || strengthTest === 2)) {
            passwordStrengthBox.innerText = "medium"
        }
        if (passwordBeingTyped.length >= 8 && strengthTest >= 3) {
            passwordStrengthBox.innerText = "strong"
        }
    }
}

let isAMatchPTag = document.getElementById("is-a-match-display-box");
retypePasswordBox.addEventListener("keyup", function () {
    if (retypePasswordBox.value === passwordBox.value) {
        isAMatchPTag.innerText = "password matches";
    } else {
        isAMatchPTag.innerText = "password does not match";
    }
});

