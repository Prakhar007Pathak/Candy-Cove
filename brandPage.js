// CUSTOMIZATION BUTTON WORK

let customBtn = document.getElementById("customizationButton");
let customBoxes = document.querySelectorAll(".customization-boxes");

let showCustomBoxes = false;

customBtn.addEventListener("click", function () {
    showCustomBoxes = !showCustomBoxes;
    if (showCustomBoxes) {
        customBoxes.forEach(function (button) {
            button.classList.add("show");

        });
    }
    else {
        customBoxes.forEach(function (button) {
            button.classList.remove("show");

        });

        checkBoxesForFirstBox.forEach(function (checkbox) {
            checkbox.classList.remove("show");

        });
        checkBoxesForSecondBox.forEach(function (checkbox) {
            checkbox.classList.remove("show");

        });
        checkBoxesForThirdBox.forEach(function (checkbox) {
            checkbox.classList.remove("show");

        });
    }
});



// CLICK ON BOXES TO OPEN CHECKBOX FOR BOX FIRST

let showCheckForFirstBox = document.getElementById("AllCheckForFirstBox");
let checkBoxesForFirstBox = document.querySelectorAll(".firstBoxAllProductsCheck");

let functionEnabled = false;

showCheckForFirstBox.addEventListener("click", function () {
    functionEnabled = !functionEnabled;

    if (functionEnabled) {
        checkBoxesForFirstBox.forEach(function (checkbox) {
            checkbox.classList.add("show");
        });
        checkBoxesForSecondBox.forEach(function (checkbox) {
            checkbox.classList.remove("show");
        });
        checkBoxesForThirdBox.forEach(function (checkbox) {
            checkbox.classList.remove("show");
        });
    }
    else {
        checkBoxesForFirstBox.forEach(function (checkbox) {
            checkbox.classList.remove("show");
        });
    }
    // checkBoxesForThirdBox = alert("You Can Select 4 Products");
});
// Function to limit checkbox selection for first box
function firstLimitCheckboxSelection() {

    // Count the number of checkboxes selected
    let firstSelectedCount = 0;
    for (let i = 0; i < checkBoxesForFirstBox.length; i++) {
        if (checkBoxesForFirstBox[i].checked) {
            firstSelectedCount++;
        }
    }

    // Disable unchecked checkboxes if the limit is reached
    for (let i = 0; i < checkBoxesForFirstBox.length; i++) {
        if (!checkBoxesForFirstBox[i].checked && firstSelectedCount >= 4) {
            checkBoxesForFirstBox[i].disabled = true;
        } else {
            checkBoxesForFirstBox[i].disabled = false;
        }
    }
}
function firstHandleCheckboxSelection(checkbox) {
    var productImage = checkbox.getAttribute('data-image');
    var customBoxes = document.querySelectorAll('.sub-partitions-for-four-parts-of-thousand-gram');
    var selectedProductImages = document.querySelectorAll('.sub-partitions-for-four-parts-of-thousand-gram img');

    if (checkbox.checked) {
        var image = document.createElement('img');
        image.src = productImage;
        image.width = 80;
        image.height = 80;

        for (var i = 0; i < customBoxes.length; i++) {
            var customBox = customBoxes[i];
            var customBoxImage = customBox.querySelector('img');

            if (!customBoxImage) {
                customBox.innerHTML = '';
                customBox.appendChild(image);
                break;
            }
        }
    } else {
        for (var i = 0; i < selectedProductImages.length; i++) {
            var selectedProductImage = selectedProductImages[i];
            if (selectedProductImage.src === productImage) {
                var customBox = selectedProductImage.parentNode;
                customBox.innerHTML = '<p>' + customBox.id + '</p>';
                break;
            }
        }
    }
}
// total price for 1st box 
const productCheckboxes = document.querySelectorAll('.firstBoxAllProductsCheck');
const totalPriceElement = document.getElementById('total-price-customization-boxes-for-first');

productCheckboxes.forEach(function (checkbox) {
    checkbox.addEventListener('change', calculateTotalPrice);
});

function calculateTotalPrice() {
    let totalPrice = 0;

    productCheckboxes.forEach(function (checkbox) {
        if (checkbox.checked) {
            const productPrice = parseInt(checkbox.dataset.price);
            price = productPrice / 4;
            totalPrice += price;
        }
    });
    totalPriceElement.textContent = '₹' + totalPrice;
}




// CLICK ON BOXES TO OPEN CHECKBOX FOR BOX SECOND

let showCheckForSecondBox = document.getElementById("AllCheckForSecondBox");
let checkBoxesForSecondBox = document.querySelectorAll(".secondBoxAllProductsCheck");



showCheckForSecondBox.addEventListener("click", function () {
    functionEnabled = !functionEnabled;

    if (functionEnabled) {
        checkBoxesForSecondBox.forEach(function (checkbox) {
            checkbox.classList.add("show");

        });
        checkBoxesForFirstBox.forEach(function (checkbox) {
            checkbox.classList.remove("show");

        });
        checkBoxesForThirdBox.forEach(function (checkbox) {
            checkbox.classList.remove("show");

        });
        // checkBoxesForSecondBox = alert("You Can Select 2 Products");
    }
    else {
        checkBoxesForSecondBox.forEach(function (checkbox) {
            checkbox.classList.remove("show");

        });
    }
    // checkBoxesForThirdBox = alert("You Can Select 2 Products");
});
// Function to limit checkbox selection for second box
function secondLimitCheckboxSelection() {

    // Count the number of checkboxes selected
    let secondSelectedCount = 0;
    for (let i = 0; i < checkBoxesForSecondBox.length; i++) {
        if (checkBoxesForSecondBox[i].checked) {
            secondSelectedCount++;
        }
    }

    // Disable unchecked checkboxes if the limit is reached
    for (let i = 0; i < checkBoxesForSecondBox.length; i++) {
        if (!checkBoxesForSecondBox[i].checked && secondSelectedCount >= 2) {
            checkBoxesForSecondBox[i].disabled = true;
        } else {
            checkBoxesForSecondBox[i].disabled = false;
        }
    }
}
function secondHandleCheckboxSelection(checkbox) {
    var productImage = checkbox.getAttribute('data-image');
    var customBoxes = document.querySelectorAll('.sub-partitions-for-two-parts-of-thousand-gram');
    var selectedProductImages = document.querySelectorAll('.sub-partitions-for-two-parts-of-thousand-gram img');

    if (checkbox.checked) {
        var image = document.createElement('img');
        image.src = productImage;
        image.width = 80;
        image.height = 80;

        for (var i = 0; i < customBoxes.length; i++) {
            var customBox = customBoxes[i];
            var customBoxImage = customBox.querySelector('img');

            if (!customBoxImage) {
                customBox.innerHTML = '';
                customBox.appendChild(image);
                break;
            }
        }
    } else {
        for (var i = 0; i < selectedProductImages.length; i++) {
            var selectedProductImage = selectedProductImages[i];
            if (selectedProductImage.src === productImage) {
                var customBox = selectedProductImage.parentNode;
                customBox.innerHTML = '<p>' + customBox.id + '</p>';
                break;
            }
        }
    }
}
// total price for 2nd box 
const productCheckboxesSecond = document.querySelectorAll('.secondBoxAllProductsCheck');
const totalPriceElementSecond = document.getElementById('total-price-customization-boxes-for-second');

productCheckboxesSecond.forEach(function (checkbox) {
    checkbox.addEventListener('change', calculateTotalPriceSecond);
});

function calculateTotalPriceSecond() {
    let totalPriceSecond = 0;

    productCheckboxesSecond.forEach(function (checkbox) {
        if (checkbox.checked) {
            const productPrice = parseInt(checkbox.dataset.price);
            price = productPrice / 2;
            totalPriceSecond += price;
        }
    });
    totalPriceElementSecond.textContent = '₹' + totalPriceSecond;
}


// CLICK ON BOXES TO OPEN CHECKBOX FOR BOX THIRD

let showCheckForThirdBox = document.getElementById("AllCheckForThirdBox");
let checkBoxesForThirdBox = document.querySelectorAll(".thirdBoxAllProductsCheck");


showCheckForThirdBox.addEventListener("click", function () {
    functionEnabled = !functionEnabled;

    if (functionEnabled) {
        checkBoxesForThirdBox.forEach(function (checkbox) {
            checkbox.classList.add("show");

        });
        checkBoxesForSecondBox.forEach(function (checkbox) {
            checkbox.classList.remove("show");

        });
        checkBoxesForFirstBox.forEach(function (checkbox) {
            checkbox.classList.remove("show");

        });
    }
    else {
        checkBoxesForThirdBox.forEach(function (checkbox) {
            checkbox.classList.remove("show");
            
        });
    }
    // checkBoxesForThirdBox = alert("You Can Select 4 Products");
});
// Function to limit checkbox selection for third box
function thirdLimitCheckboxSelection() {

    // Count the number of checkboxes selected
    let thirdSelectedCount = 0;
    for (let i = 0; i < checkBoxesForThirdBox.length; i++) {
        if (checkBoxesForThirdBox[i].checked) {
            thirdSelectedCount++;
        }
    }

    // Disable unchecked checkboxes if the limit is reached
    for (let i = 0; i < checkBoxesForThirdBox.length; i++) {
        if (!checkBoxesForThirdBox[i].checked && thirdSelectedCount >= 4) {
            checkBoxesForThirdBox[i].disabled = true;
        } else {
            checkBoxesForThirdBox[i].disabled = false;
        }
    }
}
function thirdHandleCheckboxSelection(checkbox) {
    var productImage = checkbox.getAttribute('data-image');
    var customBoxes = document.querySelectorAll('.sub-partitions-for-four-parts-of-two-thousand-gram');
    var selectedProductImages = document.querySelectorAll('.sub-partitions-for-four-parts-of-two-thousand-gram img');

    if (checkbox.checked) {
        var image = document.createElement('img');
        image.src = productImage;
        image.width = 80;
        image.height = 80;

        for (var i = 0; i < customBoxes.length; i++) {
            var customBox = customBoxes[i];
            var customBoxImage = customBox.querySelector('img');

            if (!customBoxImage) {
                customBox.innerHTML = '';

                customBox.appendChild(image);

                break;
            }
        }
    } else {
        for (var i = 0; i < selectedProductImages.length; i++) {
            var selectedProductImage = selectedProductImages[i];
            if (selectedProductImage.src === productImage) {
                var customBox = selectedProductImage.parentNode;
                customBox.innerHTML = '<p>' + customBox.id + '</p>';
                break;
            }
        }
    }

}
// total price for 3st box 
const productCheckboxesThird = document.querySelectorAll('.thirdBoxAllProductsCheck');
const totalPriceElementfThird = document.getElementById('total-price-customization-boxes-for-third');

productCheckboxesThird.forEach(function (checkbox) {
    checkbox.addEventListener('change', calculateTotalPriceThird);
});

function calculateTotalPriceThird() {
    let totalPriceforThird = 0;

    productCheckboxesThird.forEach(function (checkbox) {
        if (checkbox.checked) {
            const productPriceThird = parseInt(checkbox.dataset.price);
            price = productPriceThird / 4;
            totalPriceforThird += price;
        }
    });
    totalPriceElementfThird.textContent = '₹' + totalPriceforThird;
}

function changeColor(firstBox){
    firstBox.classList.toggle("changeColor");
}
// function changeColor(secondBox){
//     secondBox.classList.toggle("changeColor");
// }
// function changeColor(thirdBox){
//     thirdBox.classList.toggle("changeColor");
// }
