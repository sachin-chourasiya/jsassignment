
function updatekey(){
    var answer = document.getElementById('skuId').value;
    var p = document.getElementById('p');
    const words = answer.split('=');
    let num = parseInt(words[1]);
    console.log(num);
    
    let url = 'data.json';
    fetch(url).then((response)=>{
      return response.json();
    }).then((data)=>{
      let flag = false;
      for(let i=0;i<data.length;i++){
        if(data[i].sku === num){
          flag = true
          data[i].sku = Math.floor(Math.random()*100);
          console.log(data[i]);
          p.innerHTML = JSON.stringify(data[i]);
          alert('successfully complete')
          break;
        }
        
      }
      if(flag == false){
        alert('SKU not found');
      }
    })
   
  
}
