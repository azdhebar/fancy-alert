$(window).on('load',function(){
    $('#dialog').hide()
    
    $('#show').on('click',function(){
         
        
         $('#dialog').delay(400).fadeIn();
     })
     
    $('#danger,#success').on('click',function(){
         
        
         $('#dialog').delay(300).fadeOut();
     })
})  

