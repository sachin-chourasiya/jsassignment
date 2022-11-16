function updatekey(){
    let skuId = document.getElementById('skuId').value;
    let p = document.getElementById('p');
    let divideInput = skuId.split('=');
    let skuKey = parseInt(divideInput[1]);
    let jsonUrl = 'data.json';
    fetch(jsonUrl).then((response)=>{
      return response.json();
    }).then((cellData)=>{
      let flag = false;
      for(let i=0;i<cellData.length;i++){
        if(cellData[i].sku === skuKey){
          flag = true
          cellData[i].sku = Math.floor(Math.random()*100);
          console.log(cellData[i]);
          p.innerHTML = JSON.stringify(cellData[i]);
          alert('Successfully complete');
          break;
        }
      }
      if(flag == false){
        alert('SKU not found');
      }
    })
}
