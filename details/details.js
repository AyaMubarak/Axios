async function getIdInfo() {
    try {
        const urlParam = new URLSearchParams(window.location.search);
        const id = urlParam.get("id");

        const response = await axios.get(`https://dummyjson.com/products/${id}`);

        console.log(response);

        const details = response.data;
        const result = `<tr>
            <td>${details.id}</td>
            <td>${details.title}</td>
            <td>${details.description}</td>
            <td>${details.price}</td>
            <td>${details.discountPercentage}</td>
            <td>${details.rating}</td>
            <td>${details.stock}</td>
            <td>${details.brand}</td>
            <td>${details.category}</td>
            <td><img src="${details.thumbnail}" alt="${details.title}"></td>
        </tr>`;

        document.querySelector(".tbody").innerHTML = result;
    } catch (error) {
        console.error(error);
    }
}

getIdInfo();





