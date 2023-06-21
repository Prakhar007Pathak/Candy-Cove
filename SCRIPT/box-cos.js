// BRAND BOX FIRST 
let showMoreFirst = document.querySelector("#moreFirstProducts");
let productPageFirst = document.querySelector(".customize-temp-for-first-brand");
let closeMoreFirst = document.querySelector("#closeFirstProducts");

// OPEN BRAND BOX
showMoreFirst.onclick = () => {
    productPageFirst.classList.add('active');
};
// CLOSE BRAND BOX
closeMoreFirst.onclick = () => {
    productPageFirst.classList.remove('active');

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
};



// // BRAND BOX SECOND
// let showMoreSecond = document.querySelector("#moreSecondProducts");
// let productPageSecond = document.querySelector(".customize-temp-for-second-brand");
// let closeMoreSecond = document.querySelector("#closeSecondProducts");

// // OPEN BRAND BOX
// showMoreSecond.onclick = () => {
//     productPageSecond.classList.add('active');
// };
// // CLOSE BRAND BOX
// closeMoreSecond.onclick = () => {
//     productPageSecond.classList.remove('active');
// };


// // BRAND BOX THIRD
// let showMoreThird = document.querySelector("#moreThirdProducts");
// let productPageThird = document.querySelector(".customize-temp-for-third-brand");
// let closeMoreThird = document.querySelector("#closeThirdProducts");

// // OPEN BRAND BOX
// showMoreThird.onclick = () => {
//     productPageThird.classList.add('active');
// };
// // CLOSE BRAND BOX
// closeMoreThird.onclick = () => {
//     productPageThird.classList.remove('active');
// };


// // BRAND BOX FOURTH
// let showMoreFourth = document.querySelector("#moreFourthProducts");
// let productPageFourth = document.querySelector(".customize-temp-for-fourth-brand");
// let closeMoreFourth = document.querySelector("#closeFourthProducts");

// // OPEN BRAND BOX
// showMoreFourth.onclick = () => {
//     productPageFourth.classList.add('active');
// };
// // CLOSE BRAND BOX
// closeMoreFourth.onclick = () => {
//     productPageFourth.classList.remove('active');
// };





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
        // checkBoxesForFirstBox = alert("You Can Select 4 Products");
    }
    else {
        checkBoxesForFirstBox.forEach(function (checkbox) {
            checkbox.classList.remove("show");

        });
    }
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
    // updatetotal();
}
function firstHandleCheckboxSelection(checkbox) {
    var productImage = checkbox.getAttribute('data-image');
    var customBoxes = document.querySelectorAll('.sub-partitions-for-four-parts-of-thousand-gram');
    var selectedProductImages = document.querySelectorAll('.sub-partitions-for-four-parts-of-thousand-gram img');

    if (checkbox.checked) {
        // Create an image element
        var image = document.createElement('img');
        image.src = productImage;
        image.width = 80;
        image.height = 80;

        // Check if there are any available custom boxes
        for (var i = 0; i < customBoxes.length; i++) {
            var customBox = customBoxes[i];
            var customBoxImage = customBox.querySelector('img');

            // If the current custom box is empty, add the image to it
            if (!customBoxImage) {
                // Clear existing content in the custom box
                customBox.innerHTML = '';

                // Append the image to the custom box
                customBox.appendChild(image);

                // Exit the loop once an empty custom box is found
                break;
            }
        }
    } else {
        // Remove the image from the corresponding custom box
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


// function firstHandleCheckboxSelection(checkbox) {
//     var productPrice = checkbox.getAttribute('data-price');
//     var customBoxes = document.querySelectorAll('.total-price-customization-boxes-for-first');
//     var selectedProductPrice = document.querySelectorAll('.total-price-customization-boxes-for-first p');

//     if (checkbox.checked) {
//         // Create an p element
//         var price = document.createElement('p');
//         price.innerHTML = productPrice;

//         // Check if there are any available custom boxes
//         for (var i = 0; i < customBoxes.length; i++) {
//             var customBox = customBoxes[i];
//             var customBoxPrice = customBox.querySelector('p');

//             // If the current custom box is empty, add the image to it
//             if (!customBoxPrice) {
//                 // Clear existing content in the custom box
//                 customBox.innerHTML = '';
//                 // Append the image to the custom box
//                 customBox.appendChild(price);

//                 // Exit the loop once an empty custom box is found
//                 break;
//             }
//         }
//     } else {
//         // Remove the image from the corresponding custom box
//         for (var i = 0; i < selectedProductPrice.length; i++) {
//             var selectedProductPrice = selectedProductPrice[i];
//             if (selectedProductPrice.innerHTML === productPrice) {
//                 var customBox = selectedProductPrice.parentNode;
//                 customBox.innerHTML = '<p>₹0</p>';
//                 break;
//             }
//         }
//     }

// }










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
        // Create an image element
        var image = document.createElement('img');
        image.src = productImage;
        image.width = 80;
        image.height = 80;

        // Check if there are any available custom boxes
        for (var i = 0; i < customBoxes.length; i++) {
            var customBox = customBoxes[i];
            var customBoxImage = customBox.querySelector('img');

            // If the current custom box is empty, add the image to it
            if (!customBoxImage) {
                // Clear existing content in the custom box
                customBox.innerHTML = '';

                // Append the image to the custom box
                customBox.appendChild(image);

                // Exit the loop once an empty custom box is found
                break;
            }
        }
    } else {
        // Remove the image from the corresponding custom box
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
        // checkBoxesForThirdBox = alert("You Can Select 4 Products");
    }
    else {
        checkBoxesForThirdBox.forEach(function (checkbox) {
            checkbox.classList.remove("show");

        });
    }
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
        // Create an image element
        var image = document.createElement('img');
        image.src = productImage;
        image.width = 80;
        image.height = 80;

        // Check if there are any available custom boxes
        for (var i = 0; i < customBoxes.length; i++) {
            var customBox = customBoxes[i];
            var customBoxImage = customBox.querySelector('img');

            // If the current custom box is empty, add the image to it
            if (!customBoxImage) {
                // Clear existing content in the custom box
                customBox.innerHTML = '';

                // Append the image to the custom box
                customBox.appendChild(image);

                // Exit the loop once an empty custom box is found
                break;
            }
        }
    } else {
        // Remove the image from the corresponding custom box
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





// // var customBoxes = document.querySelectorAll(".first-list-of-custom-brand-product-for-a")[0];
// // var selectedProductImages = customBoxes.querySelectorAll(".first-list-of-custom-brand-product-for-a a img");
// var selectedProductPrice = document.querySelectorAll('.total-price-customization-boxes-for-first p');

// //  update total
function updatetotal(checkbox) {
    var productPrice = checkbox.getAttribute('data-price');
    var priceElement = document.querySelector('.total-price-customization-boxes-for-first');

    if (checkbox.checked) {
        var price = document.createElement('p');
        price.classList.add(".total-price-customization-boxes-for-first");
        price.innerHTML = productPrice;


        var total = 0;
        for (var i = 0; i < priceElement.length; i++) {
            priceElement.innerHTML = productPrice;
            price = parseFloat(priceElement.innerText.replace("₹", ""));
            total = total + price;
        }
    }
        //   if price contain some cents value
        total = Math.round(total * 100) / 100;

    document.querySelector(".total-price-customization-boxes-for-first p")[0].innerText = '₹' + total;
}










// window.onload = function() {
//     var checkboxes = document.querySelectorAll("firstBoxAllProductsCheck");
//     for (var i = 0; i < checkboxes.length; i++) {
//         checkboxes.checked = !checkboxes.checked;
//     }
// };



// function firstHandleCheckboxSelection(checkbox) {

//     var productPrice = checkbox.getAttribute('data-price');
//     var customBoxes = document.querySelectorAll('.total-price-customization-boxes-for-first');
//     var selectedProductPrice = document.querySelectorAll('.total-price-customization-boxes-for-first p');


//     if (checkbox.checked) {
//         var price = document.createElement('p');
//         price.innerHTML = productPrice;

//         for (var i = 0; i < customBoxes.length; i++) {
//         var customBox = customBoxes[i];
//         var customBoxPrice = customBox.querySelector('p');

//         if (!customBoxPrice) {
//             customBox.innerHTML = '';
//             customBox.appendChild(price);
//             break;
//         }
//         }
//     } else {
//         for (var i = 0; i < selectedProductPrice.length; i++) {
//             var selectedProductPrice = selectedProductPrice[i];
//             if (selectedProductPrice.innerHTML === productPrice) {
//                 var customBox = selectedProductPrice.parentNode;
//                 customBox.innerHTML = '<p>₹0</p>';
//                 break;
//             }
//         }
//     }


// }