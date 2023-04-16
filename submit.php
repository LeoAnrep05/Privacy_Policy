<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = $_POST["name"];
  $email = $_POST["email"];
  $message = $_POST["message"];

  // Specify the recipient's email address
  $to = "contact@vintsweden.se";

  // Set the email subject and body
  $subject = "Data Subject Access Request";
  $body = "Name: $name\nEmail: $email\nMessage: $message";

  // Set additional headers, such as "From" and "Reply-To"
  $headers = "From: $email\r\n";
  $headers .= "Reply-To: $email\r\n";

  // Send the email
  if (mail($to, $subject, $body, $headers)) {
    echo "Your message has been sent successfully.";
  } else {
    echo "Sorry, there was a problem sending your message.";
  }
}
?>