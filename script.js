// iPhone Models
const iphones = [
    { name: "iPhone SE (2nd Gen)", image: "Img/iPhone SE 2.jpg" },
    { name: "iPhone XR", image: "Img/Apple iPhone Xr Black.jpg" },
    { name: "iPhone XS", image: "Img/iPhone XS.jpg" },
    { name: "iPhone XS Max", image: "Img/Apple iPhone XS MAX Gold Preview.jpg" },
    { name: "iPhone 11", image: "Img/Apple iPhone 11.jpg" },
    { name: "iPhone 11 Pro", image: "Img/apple iphone 11 pro.jpg" },
    { name: "iPhone 11 Pro Max", image: "Img/iphone11promaxhopea.webp" },
    { name: "iPhone 12", image: "Img/iPhone 12 purpl.jpg" },
    { name: "iPhone 12 Pro", image: "Img/Apple iPhone 12 Pro.jpg" },
    { name: "iPhone 12 Mini", image: "Img/iPhone 12.jpg" },
    { name: "iPhone 12 Pro Max", image: "Img/APPLE IPHONE12 pro max.jpg" },
    { name: "iPhone 13", image: "Img/Apple iPhone 13.jpg" },
    { name: "iPhone 13 Mini", image: "Img/iPhone 13 Mini.jpg" },
    { name: "iPhone 13 Pro", image: "Img/Apple iPhone 13 Pro.jpg" },
    { name: "iPhone 13 Pro Max", image: "Img/Apple iPhone 13 Pro Max.jpg" },
    { name: "iPhone 14", image: "Img/Apple iPhone 14.jpg" },
    { name: "iPhone 14 Plus", image: "Img/Apple iPhone 14 Plus.jpg" },
    { name: "iPhone 14 Pro", image: "Img/Apple iPhone 14 Pro.jpg" },
    { name: "iPhone 14 Pro Max", image: "Img/Apple iPhone 14 Pro Max.jpg" },
    { name: "iPhone 15", image: "Img/Apple iPhone 15.jpg" },
    { name: "iPhone 15 Plus", image: "Img/Apple iPhone 15 Plus.jpg" },
    { name: "iPhone 15 Pro", image: "Img/Apple iPhone 15 Pro.jpg" },
    { name: "iPhone 15 Pro Max", image: "Img/Apple iPhone 15 Pro mAX.jpg" },
    { name: "iPhone 16", image: "Img/Apple iPhone 16.jpg" },
    { name: "iPhone 16 Plus", image: "Img/Apple iPhone 16 Plus.jpg" },
    { name: "iPhone 16 Pro", image: "Img/Apple iPhone 16 Pro.jpg" },
    { name: "iPhone 16 Pro Max", image: "Img/Apple iPhone 16 Pro Max.png" },
    { name: "iPad", image: "Img/Ipad.jpg" },
    { name: "MacBook", image: "Img/MacBook.jpg" }
];

// Accessories
const accessories = [
    { name: "AirPods", image: "Img/Airpods.jpg" },
    { name: "iPhone Case", image: "Img/Cases.jpg" },
    { name: "Apple Watch Series", image: "Img/Iwatch.jpg" },
    { name: "Watch Straps", image: "Img/Watch Strap.jpg" },
    { name: "Other Accessories", image: "Img/other accessories.jpg" },
    { name: "All iPhone Services", image: "Img/Services.jpg" }
];

// Display Products
function displayProducts() {
    const iphoneContainer = document.getElementById("iphone-list");
    const accessoryContainer = document.getElementById("accessory-list");

    iphones.forEach(iphone => {
        const productDiv = document.createElement("div");
        productDiv.classList.add("product");
        productDiv.innerHTML = `
            <img src="${iphone.image}" alt="${iphone.name}">
            <h3>${iphone.name}</h3>
        `;
        iphoneContainer.appendChild(productDiv);
    });

    accessories.forEach(accessory => {
        const productDiv = document.createElement("div");
        productDiv.classList.add("product");
        productDiv.innerHTML = `
            <img src="${accessory.image}" alt="${accessory.name}">
            <h3>${accessory.name}</h3>
        `;
        accessoryContainer.appendChild(productDiv);
    });
}

// Call displayProducts to show on load
displayProducts();