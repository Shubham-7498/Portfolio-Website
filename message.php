<?php
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $website = $_POST['website'];
    $message = $_POST['message'];

    if (!empty($name) && !empty($email) && !empty($message) && !empty($phone)) {
        if(filter_var($email, FILTER_VALIDATE_EMAIL)) {
            $receiver = "sg0864173@gmail.com";
            $subject = "From: $name <$email>";
            $body = "Name: $name\nEmail: $email\nPhone: $phone\nWebsite: $website\nMessage:\n$message: $message\n\nRegards,\n$name";
            $sender = "From: $email";
            if(mail($receiver, $subject, $body, $sender)) {
                echo "Email sent successfully.";
            } else {
                echo "Failed to send email!";
            }
        } else {
            echo "Invalid email format!";
        }
    }else {
        echo "All fields are required!";
    }
?>