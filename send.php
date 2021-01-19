<?php

if (empty($_POST['name']) || empty($_POST['phone'])  )  {
    echo json_encode(array('error' => 'Error!'));
    exit;
}

//if (empty($_POST['select-check'])  )  {
    //echo json_encode(array('check' => 'check'));
   // exit;
//}

$email = 'lilit.work@yandex.ru';
$title = "Заявка c сайта site";
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
    echo json_encode(array('error' => 'Не отправлено'.$mail->ErrorInfo));
}


?>