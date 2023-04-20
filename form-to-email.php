<?php

//Import PHPMailer classes into the global namespace
//These must be at the top of your script, not inside a function
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

//Load Composer's autoloader
require 'vendor/autoload.php';

//Create an instance; passing `true` enables exceptions
$mail = new PHPMailer(true);

try {
    //Server settings
    $mail->isSMTP();                                            //Send using SMTP
    $mail->Host       = 'smtp.mijndomein.nl';                     //Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
    $mail->Username   = '';                     //SMTP username
    $mail->Password   = '';                               //SMTP password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;            //Enable implicit TLS encryption
    $mail->Port       = 587;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`

    if (file_exists(__DIR__ . '/config.local.php')) {
        require_once(__DIR__ . '/config.local.php');
    }

    //Recipients
    $mail->setFrom('info@freschbranding.nl', $_POST['naam']);
    $mail->addAddress('info@freschbranding.nl');     //Add a recipient

    //Attachments
    // $mail->addAttachment('/var/tmp/file.tar.gz');         //Add attachments
    // $mail->addAttachment('/tmp/image.jpg', 'new.jpg');    //Optional name

    //Content
    $mail->isHTML(true);                                  //Set email format to HTML
    $mail->Subject = $_POST['onderwerp'];
    $mail->Body    = 
        $_POST['naam'].'<br>'.
        $_POST['email'].'<br>'.'<br>'.
        $_POST['bedrijfsnaam'].
        '<br><br>'.
        $_POST['bericht'];
    
    $mail->AltBody = $_POST['bericht'];

    $mail->send();

    header('Location: contact.html');
    
} catch (Exception $e) {
    echo "Bericht kon niet worden verzonden. Mailer Error: {$mail->ErrorInfo}";
}
?>