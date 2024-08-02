(function($){
    $.fn.confirm=function(text,agreeCallBack,disagreeCallBack){
        const modal=$('#modal');
        const window=$('#window');
        const message=$('#text');
        const Okbtn=$('#confirmOk');
        const Nobtn=$('#confirmCancel');
        this.on('click', function(){
            message.text(text);
            modal.show();

            Okbtn.off('click').on('click',function(){
                modal.hide();
                if(typeof agreeCallBack==='function'){
                    agreeCallBack();
                }
            })

            Nobtn.off('click').on('click',function(){
                modal.hide();
                if(typeof disagreeCallBack==='function'){
                    disagreeCallBack();
                }
            })
        })  
        return this
    }

})(jQuery);

$(document).ready(function(){
    const agree=()=> console.log('Пользователь нажал Да');
    const disagree=()=> console.log('Пользователь нажал Нет');
    $('#btn').confirm("Хотите ли вы кофе?",agree,disagree);
})