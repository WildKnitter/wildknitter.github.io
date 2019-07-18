/* scripts file for index.html */

// Don't run any JS until DOM in built
window.onload = function () {
    // Get Form Element from DOM
    var loginForm = document.getElementById('loginForm');

    // get Alert Message Elements
    var successMsg = document.getElementById('successMsg');
    var dangerMsg = document.getElementById('dangerMsg');

    // Bind Submit Event Handler to Form
    loginForm.onsubmit = function (submitEvent) {
        // Prevent default Form Submit behavior
        submitEvent.preventDefault();

        // Get Form fields from DOM
        var userName = document.getElementById('userName');
        var inputPassword = document.getElementById('inputPassword');

        // Get User input values from form fields
        var userNameValue = userName.value;
        var inputPasswordValue = inputPassword.value;

        // Check to ensure User entered values - double pipes is OR in javascript
        if (userNameValue == '' || inputPasswordValue == '') {
            // Auth Failure: User did not enter userName and/or password
            // Hide Success msg
            successMsg.style.display = 'none';
            // Show Danger Msg
            dangerMsg.style.display = 'block';
        } else {
            // Auth Success: User entered userName and password
            // Hide Danger msg
            dangerMsg.style.display = 'none';
            // Show Success Msg - now not necessary as upon success the user is taken right to the patterns page.
            //successMsg.style.display = 'block';

            // clear form fields
            userName.value = '';
            inputPassword.value = '';

            document.location.href = 'userinteraction.html';
        }
    }

    // Get Reset Button Element from DOM
    var resetBtn = document.getElementById('resetBtn');

    // Bind Click Event Handler to Reset Buttom
    resetBtn.onclick = function () {
        // Hide Success and Warning Message Elements
        successMsg.style.display = 'none';
        dangerMsg.style.display = 'none';

        // Put cursor in userName field
        document.getElementById('userName').focus();
    }
};
