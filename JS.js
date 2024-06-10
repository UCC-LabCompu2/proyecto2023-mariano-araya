/**
 * Calculates the price of the stick depending on the amount of carbon entered by the user
 *@mwthod calculateTotal
 *@param {number} amount //Stores the quantity selected by the user in the input
 */
let calculateTotal = () => {
    const amount = document.getElementById('amount').value;
    let price = 5000;
    const total = amount * price;
    document.getElementById('total').textContent = `Price in dollars: $${total.toFixed(2)}`;
}
/**
 * Validate the username to verify that it does not contain special characters, numbers or that the input is blank
 *@mwthod validate
 *@param {string} name //Stores name entered by the user in the input
 *@param {int} number //Stores height entered by the user
 *@return {boolean} true | false
 */
let validate = () => {
    const special = /[^\w\s\-_]/;
    const number = /[0-9]/;
    const nameInput = document.getElementById('name');
    const name = nameInput.value;
    const valueInput = document.getElementById('height');
    const value = valueInput.value;
    if (name === '') {
        alert("Please enter your name");
    }
    if (special.test(name)) {
        alert(" Your name cannot contain special characters. Please enter only letters");
        nameInput.value = ' ';
    }
    if (number.test(name)) {
        alert(" Your name cannot contain numbers. Please enter only letters");
        nameInput.value = ' ';
    }
    if (value < 0) {
        valueInput.value = ""
        alert("Height cannot be negative");
    }
    if (value === '') {
        alert("Please enter your height in cm");
    }
    if (value > 210) {
        alert("Please enter a correct height in cm");
    }
    drawHockeyStick();
}
/**
 * Draws a hockey stick on the canvas based on the specified position and gender
 * @method drawHockeyStick
 * @param {string} pos The position of the hockey player ("defender", "midfielder", or "forward")
 * @param {string} gen The gender of the hockey player ("Male" or "Female")
 * @param {string} hei The height of the hockey player
 */
let drawHockeyStick = () => {
    const hei = document.getElementById("height").value;
    const gen = document.getElementById("gender").value;
    const pos = document.getElementById("position").value;
    const canvas = document.getElementById("miCanvas");
    const ctx = canvas.getContext("2d");

    canvas.width = canvas.width;

    const image = new Image()
    {
        if (gen == "male") {
            switch (pos) {
                case "defender":
                    image.src = "imagenes/PaloGrays.png";
                    break;
                case "midfielder":
                    image.src = "imagenes/Paloshockey1.png";
                    break;
                case "forward":
                    image.src = "imagenes/PaloOsaka1.png";
                    break;
            }
            image.onload = function () {
                ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
            }
        } else {
            switch (pos) {
                case "defender":
                    image.src = "imagenes/PaloAdidas.png";
                    break;
                case "midfielder":
                    image.src = "imagenes/PaloRitual.png";
                    break;
                case "forward":
                    image.src = "imagenes/PaloBraboD.png";
                    break;
            }
            image.onload = function () {
                ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
            }
        }
    }

    if (hei >= 160 && hei <= 170) {
        ctx.font = "10pt Playfair Display";
        ctx.fillStyle = "black";
        ctx.fillText("Height of the stick: 35 inches", 90, 20);
    } else if (hei > 170 && hei <= 180) {
        ctx.font = "10pt Playfair Display";
        ctx.fillStyle = "black";
        ctx.fillText("Height of the stick: 36 inches", 90, 20);
    } else if (hei > 180 && hei <= 190) {
        ctx.font = "10pt Playfair Display";
        ctx.fillStyle = "black";
        ctx.fillText("Height of the stick: 37 inches", 90, 20);
    } else if (hei > 190 && hei >= 210) {
        ctx.font = "10pt Playfair Display";
        ctx.fillStyle = "black";
        ctx.fillText("Height of the stick: 38 inches", 90, 20);
    }
}

