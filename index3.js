$(document).ready(function(){
    $('ul.tabs li').click(function(){
        $('ul.tabs li').removeClass('current');
        $('.tab-content').removeClass('current');
        $(this).addClass('current');
        var tab_id = $(this).attr('data-tab');
        $("#"+tab_id).addClass('current');
    })
});

// 메뉴 선택시 카트로 이동 

$('li > a').click(function(e){
    // 기존에 더한 메뉴인지 확인 
    var menuName = document.getElementsByClassName('orderedMenuName');
    var menuAmount = document.getElementsByClassName('orderedMenuAmount');
    var isAlreadyPicked = false; 
    for (var i =0; i < menuName[0].children.length; i++) {
        if (menuName[0].children[i].innerHTML === $(this).next().text()) {
            isAlreadyPicked = true;
            var number = i; 
        } 
    }
    // 클릭시 메뉴 더해주기
    if(!isAlreadyPicked) {
        $('#cart .orderedMenuName').append('<div>'+$(this).next().text() +'</div>');
        $('#cart .orderedMenuAmount').append('<div>'+ 1 +'</div>');
        $('#cart .orderedMenuPrice').append('<div>'+$(this).next().next().text() +'</div>');
        $('#cart .delete').append('<span><i class="fa fa-close"></i></span>');

        $('#cart .orderedMenuName div:last-child').addClass($(this).next().next().next().text()).addClass('orderedName');
        $('#cart .orderedMenuAmount div:last-child').addClass($(this).next().next().next().text()).addClass('orderedAmount');
        $('#cart .orderedMenuPrice div:last-child').addClass($(this).next().next().next().text()).addClass('orderedPrice');
        $('.delete span:last-child').addClass($(this).next().next().next().text()).addClass('removeThing');
    } else {
        menuAmount[0].children[number].innerHTML = Number(menuAmount[0].children[number].innerHTML)+1;
    }

    var totalPrice = 0;
    for (let i = 0; i < $('.orderedPrice').length; i++) {
        totalPrice += Number($('.orderedPrice')[i].innerHTML)*Number($('.orderedAmount')[i].innerHTML);
    }
    $('#totalPrice').text(''+totalPrice);

    var remove = document.getElementsByClassName('removeThing');
        let button = remove[remove.length-1];
        button.addEventListener('click', function(e){
            $('.'+this.className.split(' ')[0]).remove();
            var totalPrice = 0;
            for (let i = 0; i < $('.orderedPrice').length; i++) {
                totalPrice += Number($('.orderedPrice')[i].innerHTML)*Number($('.orderedAmount')[i].innerHTML);
            }
            $('#totalPrice').text(''+totalPrice);
        });	
    });
 
    var remove = document.getElementsByClassName('removeThing');
        let button = remove[remove.length-1];
        button.addEventListener('click', function(e){
            $('.'+this.className.split(' ')[0]).remove();
        });	
