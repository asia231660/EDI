async function Load(url, table){
    const tablebody =table.querySelector("tbody");
    const respon = await fetch(url);
    const {headers, rows} =await respon.json();

    console.log(data);
    tableHead.innerHTML="<tr></tr>";
    tableHead.innerHTML="";

    for(const headrText of headers){
        const headerElement = document.createElement("th");

        headerElement.textContent = headrText;
        tableHead.querySelector("tr").appendChild(headerElement);
    }
    for(const row of rows){
        const rowElement =document.createElement("tr");

        for(const cellText of row){
            const cellElement =document.createElement("td");

            cellElement.textContent = cellText
            rowElement.appendChild(cellElement);
        }
        tablebody.appendChild(rowElement);
    }
}

Load("https://my.api.mockaroo.com/Movies.json?key=447e31d0",document.querySelector("table"))