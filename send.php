<?php

if (empty($_POST['name']) || empty($_POST['phone'])  )  {
    echo json_encode(array('error' => 'Ошибка! Обратитесь к администратору сайта через email'));
    exit;
}


$email = 'lilit.work@yandex.ru';
$title = "Заявка c сайта";
$from = 'site';
$text = 'Информация:

Name: '.@$_POST['name'].'
Phone: '.@$_POST['phone'].'
Model: '.@$_POST['model'].'
Email: '.@$_POST['mail'].'
Info: '.$_SERVER['HTTP_USER_AGENT'].'';

if (mail($email, $title, $text, "Content-type:text/plain; charset = utf-8\r\nFrom:$from")) {
    echo json_encode(array('status' => 1));
	exit;
} else {
    echo json_encode(array('error' => 'Ошибка! Обратитесь к администратору сайта через email'.$mail->ErrorInfo));
}


?>