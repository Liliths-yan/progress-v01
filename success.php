<!DOCTYPE html>
<html lang="ru">
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1,shrink-to-fit=no" />
        <link rel="shortcut icon" href="favicon/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&family=Roboto:wght@300;400&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="/css/style.css" />
        <title>Заявка успешно отправлена!</title>
    </head>
    <body>
 <header class="header success-header">
<div class="container">

   <div class="header-inner">

<div class="header-item">
           
            <h1 class="header-item__h1">Круглосуточная аренда <span>спецтехники</span> в Москве и МО</h1>
</div>

        <div class="header-item">

 <ul class="header-menu">
    <li class="header-menu-li"><a data-trigger="scroll"  href="/" class="header-menu-li-link">Главная</a></li>
    <li class="header-menu-li"><a data-trigger="scroll" href="#rental" class="header-menu-li-link">Аренда техники</a></li>
    <li class="header-menu-li"><a data-trigger="scroll" href="#footer" class="header-menu-li-link">Контакты</a></li>

 </ul>

       </div>


   </div>

</div>

 </header>
 
 <section class="success">
     
<div class="success__cont">
       

       
        <span class="success__model">
        
           <?php   
            
            if(isset($_GET['model']) )  {
     
            $order = ($_GET['model']); 
    
                if ( $order != '') {
                    
                    echo 'Выбранная модель - ' . $order;
                    
                }
                                     } ?>
        
        </span> 
        
        <span class="success__thenks">Спасибо</span>
        
        <p class="success__text">Ваша заявка отправлена! <br> Мы свяжемся с Вами в ближайшее время.</p>
        
        <a href="/" class="success__gohome">Вернуться на главную</a>
    </div>
     
     
     
     
 </section>
 
<section id="form-section" class="form-section">
    <div class="container">
        <div class="contact-block">
            <div class="contact-block-p">
                <div class="contact-block-left">
                    <div class="contact-block-logo">
                        <div class="contact-block-logo-img"><img src="img/logo-bottom.png" alt="" /></div>
                        <div class="contact-block-logo-text">
                            <p class="contact-block-logo-text-title">Прогресс</p>
                            <p class="contact-block-logo-text-slogan">
                                По хорошим дорогам в<br />
                                благоустроенное будущее!
                            </p>
                        </div>
                    </div>
                    <div class="contact-block-title">
                        Благоустройство и<br />
                        строительство дорог
                    </div>
                </div>
            </div>
            <div class="contact-block-p">
                <div class="contact-block-right">
                    <div class="contact-block-right-top">
                        <div class="contact-p">
                            <a href="/" class="contact-p-link">8 <span>(985)</span> 994-22-36</a> <span href="" class="contact-p-text">Рабочий телефон</span>
                        </div>
                        <div class="contact-p">
                            <a href="" class="contact-p-link"><span>sk-progress76</span>@mail.ru</a> <span href="" class="contact-p-text">Рабочая почта</span>
                        </div>
                    </div>
                    <!-- <div class="contact-block-right-center">
                        <div class="contact-p">
                            <a href="" class="contact-p-link">8 <span>(925)</span> 123-45-67</a> <span href="" class="contact-p-text">рабочий, офис_2</span>
                        </div>
                        <div class="contact-p">
                            <a href="" class="contact-p-link"><span>mail_2</span>@site-name.ru</a> <span href="" class="contact-p-text">Описание почты 2</span>
                        </div>
                    </div>-->
                </div>
                <div class="contact-block-addres">
                    <p class="contact-block-addres-top">Москва г, Святоозерская ул, д. 13, этаж 1, пом.VII, ком. 3А </p>
                    <span class="contact-block-addres-bottom">Юридический адрес</span>
                </div>
            </div>
        </div>
    </div>
</section>
<footer id="footer" class="footer">
    <div class="container">
        <div class="footer-inner">
            <p class="footer-left">ООО “Прогресс”, 2020 г.</p>
            <a href="https://www.behance.net/lilitsyan" target="_blank" class="footer-right">Создание сайта <span>LilitS-yan</span></a>
        </div>
    </div>
</footer>


<script src="/js/jquery.js"></script>
<script src="/js/js.js"></script>
    </body>
</html>