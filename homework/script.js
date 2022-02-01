let img= document.getElementsByTagName('img');
let i= 0;
let len= img.length;
let unique;
while(len){
    let allImg = img[i];
       allImg.onclick = () => {
          allImg.style.border = '1px solid';
          document.addEventListener('keydown', (event) => {
              var name = event.key;
              var code = event.code;
              if (name === 'Control'){
                  return;
              }
              if (code === 'Keys' || code === 'KeyC'){
                  var src = allImg.src;
                  let inpImg = document.getElementById('img');
                  document.getElementById('img').value = src;
              }
          }, false)
      }
      ++i
      --len
  }
document.getElementById("btn").onclick = () =>{
    event.preventDefault();
    let doc = document,
    img = doc.getElementById('img').value,
    a1 = doc.getElementById('a1').value,
    a2 = doc.getElementById('a2').value,
    a3 = doc.getElementById('a3').value,
    card = doc.getElementById("card"),
    errorText = doc.getElementById('errorText');
    if(!img.trim() || !a1.trim() || !a2.trim() || !a3.trim()){
        errorText.style.display ="block";
        errorText.textContent = "Barcha maydonlarni to'ldiring!";
        return;
    }
    let person = {
        'img' : img,
        'a1' : a1,
        'a2' : a2,
        'a3' : a3,
        inn : function () {
           document.body.innerHTML = `<div class='card'> <div class="t2"><img src="${this.img}" style="width: 320px;border-radius: 20px;">
           <h2 style="text-align: center;color: rgb(122, 110, 110);">Siz haqingizda ma'lumotlar</h2>
            <h4 style="text-align: center;color: rgb(122, 110, 110);">Ismingiz: ${this.a1}</h4>
            <h4 style="text-align: center;color: rgb(122, 110, 110);">Login: ${this.a2}</h4>
            <h4 style="text-align: center;color: rgb(122, 110, 110);">parol: ${this.a3}</h4> 
            <input type="submit" id="btn" value="tasdiqlash">       
  </div>
</div>`
        }
        }
        person.inn();
        errorText.style.display ="none";
        doc.getElementById('img').value = "";
        doc.getElementById('a1').value = "";
        doc.getElementById('a2').value = "";
        doc.getElementById('a3').value = "";
}





