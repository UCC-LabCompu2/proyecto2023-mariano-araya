/**
 * Calculates the price of the stick depending on the amount of carbon entered by the user
 *@mwthod calculateTotal
 *@param {number} amount //Stores the quantity selected by the user in the input
 */
let calculateTotal = () => {
    const amount = document.getElementById('amount').value;
    let price = 5000;
    const total = amount * price;
    document.getElementById('total').textContent = `Price: $${total.toFixed(2)}`;
}
/**
 * Validate the username to verify that it does not contain special characters or that the input is blank
 *@mwthod validateName
 *@param {string} name //Stores name entered by the user in the input
 *@return {boolean} true | false
 */
let validateName = () => {
    const special = /[^\w\s\-_]/;
    const nameInput = document.getElementById('name');
    const name = nameInput.value;
    if (name === '') {
        alert("Please enter your name.");
        return false;
    }
    if (special.test(name)) {
        alert(" Your name cannot contain special characters. Please enter only letters");
        nameInput.value = ' ';
        return false;
    }
    const position = document.getElementById("position").value;
    drawHockeyStick(position);
}
/**
 * Draws a hockey stick on the canvas based on the specified position
 * @method drawHockeyStick
 * @param {string} position The position of the hockey player ("defender", "midfielder", or "forward")
 * @returns {void}
 */
let drawHockeyStick = (position) => {
    const pos = document.getElementById("position").value;
    const canvas = document.getElementById("miCanvas");
    const ctx = canvas.getContext("2d");

    canvas.width = canvas.width;

    const image = new Image()
    {
        switch (position) {
            case "defender":
                image.src = "imagenes/PaloGrays.png";
                break;
            case "midfielder":
                image.src = "imagenes/PaloBrabo.png";
                break;
            case "forward":
                image.src = "imagenes/PaloOsaka.png";
                break;
        }
        image.onload = function () {
            ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
        }
    }
}