


menuArea = document.getElementsByClassName('menuArea'); 
menu = document.getElementsByClassName('menu'); 
drinkPrice = document.getElementsByClassName('drinkPrice'); 
finalMenu = document.getElementById('finalMenu');

for (let i = 0; i < menuArea.length; i++) {
    menuArea[i].addEventListener('click', function(event){
        var div = document.createElement('div'); 
        var menuNameDiv = document.createElement('div');
        var menuPriceDiv = document.createElement('div');
        var menu = document.createTextNode(event.target.firstElementChild.nextElementSibling.innerHTML); 
        var drinkPrice = document.createTextNode(event.target.firstElementChild.nextElementSibling.innerHTML);
        console.log(event.target.firstElementChild.innerHTML);
        menuNameDiv.appendChild(menu);
        menuPriceDiv.appendChild(drinkPrice);
        div.appendChild(menuNameDiv);
        div.appendChild(menuPriceDiv);
        finalMenu.appendChild(div);
    })
}

//클릭한거 메뉴 추가하기
    // if(메뉴 이름이 이미 있으면 ) {
    //     숫자로 추가 
    // }




 
//수량 +,-
    // var numberDiv = document.createElement('div');
    // var span = document.createElement('span');
    // var plusButton = document.createElement('button');
    // plusButton.value = '+'
    // var minusButton = document.createElement('button');
    // minusButton.value = '-'
    // span.innerHTML = 1; 
    // numberDiv.appendChild(plusButton);
    // numberDiv.appendChild(span);
    // numberDiv.appendChild(minusButton);

    
//total 가격 보여주기 
    // var total = 0; 
    // for (let j = 0; j < menuPrice.length; j++) {
    //     total += menuPrice[j].value;
    // }







