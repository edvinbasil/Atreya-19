//<?php
//if(isset($_POST['submit'])){
//    $to = "edvinbasil@gmail.com"; // this is your Email address
//    $from = $_POST['email']; // this is the sender's Email address
//    $first_name = $_POST['name'];
//    $subject = $_POST['subject'];
//    $message = $first_name . " " . $last_name . " wrote the following:" . "\n\n" . $_POST['message'];
//
//    $headers = "From:" . $from;
//    mail($to,$subject,$message,$headers);
//    echo "Mail Sent. Thank you " . $first_name . ", we will contact you shortly.";
//    // You can also use header('Location: thank_you.php'); to redirect to another page.
//    }
//?>

<?php
// Import PHPMailer classes into the global namespace
// These must be at the top of your script, not inside a function
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

//Load Composer's autoloader
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';
require 'PHPMailer/src/Exception.php';


$mail = new PHPMailer(true);                              // Passing `true` enables exceptions
try {


    $to = "istenitcmail@gmail.com"; // this is your Email address
    $from = $_POST['email']; // this is the sender's Email address
    $first_name = $_POST['name'];
    $subject = $_POST['subject'];
    $message = $first_name . " " . $last_name . " wrote the following:" . "\n\n" . $_POST['message'];

    //Server settings
    $mail->SMTPDebug = 0;                                 // Enable verbose debug output
    $mail->isSMTP();                                      // Set mailer to use SMTP
    $mail->Host = 'smtp.gmail.com';  // Specify main and backup SMTP servers
    $mail->SMTPAuth = true;                               // Enable SMTP authentication
    $mail->Username = 'protofacemailer@gmail.com';                 // SMTP username
    $mail->Password = 'crow1793!)';                           // SMTP password
    $mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
    $mail->Port = 465;                                    // TCP port to connect to
    $mail->setFrom('admin@protoface.com', 'Protoface');
    $mail->addAddress($to, $first_name); // To adress.

    //Recipients
    $mail->setFrom($from, $first_name);

    //Content
    $mail->isHTML(true);                                  // Set email format to HTML
    $mail->Subject = $subject;
    $mail->Body    = $message;
    $mail->AltBody = $message;
    $mail->send();
    echo 'Message has been sent';
} catch (Exception $e) {
    echo 'Message could not be sent. Mailer Error: ', $mail->ErrorInfo;
}