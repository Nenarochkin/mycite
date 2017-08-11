window.onload =()=>
        {
          console.log('Hi');
          let f=new Favorite();
          
         
         
};
class Favorite
{
   
    constructor()
    {
        this.hearts=document.getElementById("hearts");
        this.reg=document.getElementById('reg');
        this.enter=document.getElementById('enter');
        this.buttonReg=document.getElementById('regBut');
        this.addobj=document.getElementById('add_obj');
        this.addobjL=document.getElementById('add_objL');
        this.Click();
       this.ChangeColor();
       
       
        
       
        
    }
   Click()
   {
       
       this.enter.addEventListener('click',(e)=>{console.log(this.enter);
           document.getElementById('regBut').innerText='Войти';
           
       });
               
           
           
           
       
       this.reg.addEventListener('click',(e)=>{console.log(this.reg);
           document.getElementById('regBut').innerText='Регистрация';});
       
       this.buttonReg.addEventListener('click',(e)=>{
           console.log(this.butReg);
           if(this.buttonReg.innerText==="Войти")
           {
               
               let key=window.localStorage.getItem(document.getElementById('mail').value);
               
               if(key!==null)
               {
                   if(key===document.getElementById('passw').value)
                   {
                             console.log("Вход выполнен успешно") ;
                             document.getElementById('user_name').innerText=document.getElementById('mail').value;
                             
                   }
                   else
                   {
                       alert('Неверный пароль');
                   }
               }
              else
              {
                  alert('Учетной записи не найдено');
              }
           }
          else if (this.buttonReg.innerText==="Регистрация")
           {
               for(let i=0;i<window.localStorage.length;i++)
               {
                   if(document.getElementById('mail').value===window.localStorage.key([i]))
                   {
                       alert(' Логин занят');
                       break;
                       
                       
                   }
               }
                   
                   
                       if(document.getElementById('passw').value.length>=6)
                       {
                    window.localStorage.setItem(document.getElementById('mail').value,document.getElementById('passw').value); 
                    document.getElementById('user_name').innerText=document.getElementById('mail').value;
                    document.getElementById('passw').placeholder=document.getElementById('passw').value;
                    document.getElementById('user_name').innerText=document.getElementById('mail').value;
                       }
                       else
                       {
                           alert(' Пароль должен быть больше 6 символов');
                       }
                        }
               
           
           
           
           
       });
       this.addobj.addEventListener('click',(e)=>{alert();
        if(document.getElementById('user_name').innerText==='User')
        {
            alert(" Вам следует войти под своей учетной записью");
            e.preventDefault();
        }
       });
       this.addobjL.addEventListener('click',(e)=>{
           
        if(document.getElementById('user_name1').innerText==='User')
        {
            alert(" Вам следует войти под своей учетной записью");
            e.preventDefault();
        }
       },false);
       
       
   }
   ChangeColor()
   { 
        
      
      document.getElementById('hearts').addEventListener('click',(e)=>
        { 
            
           if(  this.hearts.style.color ==='blue')
           { 
               
               this.hearts.style.color="yellow";
               console.log(this.hearts);
              
           }
                
               else
                {
                 this.hearts.style.color='blue';
                console.log(this.hearts);
                 
                }
           
          
              
                
          
          
        
         
           
       
       });
           
           
       
      
         
      
   }
  
     
       
   
}

