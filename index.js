async function getProducts() {
  try {
    const response = await axios.get("https://dummyjson.com/products");
    const products = response.data.products;

    const result = products.map(function (ele) {
      return `<div class="product">
      <h1>${ele.title}</h1>
      <img src="${ele.thumbnail}" alt="${ele.thumbnail}">
      <button class="details"><a href="/details/details.html?id=${ele.id}">details</a></button></div>`
    }).join("");

    console.log(response);

    document.querySelector(".products").innerHTML = result;
  } catch (error) {
    
  }
}

getProducts();
