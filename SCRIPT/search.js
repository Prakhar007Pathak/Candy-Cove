let products = {
    data: [
        {
            productName: "Regular White T-Shirt",
            category: "Topwear",
            price: "300",
            image: "",
        },
        {
            productName: "Beige Short Skirt",
            category: "Bottomwear",
            price: "490",
            image: "",
        },
        {
            productName: "Sporty SmartWatch",
            category: "Watch",
            price: "990",
            image: "",
        },
        {
            productName: "Basic Knitted Top",
            category: "Topwear",
            price: "290",
            image: "",
        },
        {
            productName: "Black Leather Jacket",
            category: "Jacket",
            price: "490",
            image: "",
        },
        {
            productName: "Stylish Pink Trousers",
            category: "Bottomwear",
            price: "890",
            image: "",
        },
        {
            productName: "Brown Men's Jacket",
            category: "Jacket",
            price: "890",
            image: "",
        },
        {
            productName: "Comfy Gray Pants",
            category: "Bottomwear",
            price: "490",
            image: "",
        },
    ],
};

for (let i of products.data) {
    //Create Card
    let card = document.createElement("div");
    //Card should have category and should stay hidden initially
    card.classList.add("card", i.category, "hide");
    //image div
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");
    //img tag
    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);
    //container
    let container = document.createElement("div");
    container.classList.add("container");
    //product name
    let name = document.createElement("h5");
    name.classList.add("product-name");
    name.innerText = i.productName.toUpperCase();
    container.appendChild(name);
    //price
    let price = document.createElement("h6");
    price.innerText = "₹" + i.price;
    container.appendChild(price);

    card.appendChild(container);
    document.getElementById("products").appendChild(card);
}

//parameter passed from button (Parameter same as category)
function filterProduct(value) {
    //Button class code
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach((button) => {
        //check if value equals innerText
        if (value.toUpperCase() == button.innerText.toUpperCase()) {
            button.classList.add("active");
        } else {
            button.classList.remove("active");
        }
    });

    //select all cards
    let elements = document.querySelectorAll(".card");
    //loop through all cards
    elements.forEach((element) => {
        //display all cards on 'all' button click
        if (value == "all") {
            element.classList.remove("hide");
        } else {
            //Check if element contains category class
            if (element.classList.contains(value)) {
                //display element based on category
                element.classList.remove("hide");
            } else {
                //hide other elements
                element.classList.add("hide");
            }
        }
    });
}

//Search button click
document.getElementById("search").addEventListener("click", () => {
    //initializations
    let searchInput = document.getElementById("search-input").value;
    let elements = document.querySelectorAll(".product-name");
    let cards = document.querySelectorAll(".card");

    //loop through all elements
    elements.forEach((element, index) => {
        //check if text includes the search value
        if (element.innerText.includes(searchInput.toUpperCase())) {
            //display matching card
            cards[index].classList.remove("hide");
        } else {
            //hide others
            cards[index].classList.add("hide");
        }
    });
});

//Initially display all products
window.onload = () => {
    filterProduct("all");
};

document.getElementById('search-input').addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
      document.getElementById('search').click();
    }
  });