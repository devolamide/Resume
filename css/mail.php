<?php
header('Content-Type: application/json');

// Get form data
$name = isset($_POST['con_name']) ? trim($_POST['con_name']) : '';
$email = isset($_POST['con_email']) ? trim($_POST['con_email']) : '';
$message = isset($_POST['con_message']) ? trim($_POST['con_message']) : '';

// Validation
$errors = [];

if(empty($name)) {
    $errors[] = 'Name is required';
} elseif(strlen($name) < 3) {
    $errors[] = 'Name must be at least 3 characters';
}

if(empty($email)) {
    $errors[] = 'Email is required';
} elseif(!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $errors[] = 'Invalid email format';
}

if(empty($message)) {
    $errors[] = 'Message is required';
}

// If there are errors, return them
if(!empty($errors)) {
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'errors' => $errors
    ]);
    exit;
}

// Email to send to
$to = 'olamideoluwatobiadebiyi@gmail.com';
$subject = 'New Contact Form Submission from ' . htmlspecialchars($name);

// Email body
$body = "Name: " . htmlspecialchars($name) . "\n";
$body .= "Email: " . htmlspecialchars($email) . "\n";
$body .= "Message:\n" . htmlspecialchars($message) . "\n";

// Headers
$headers = "From: " . htmlspecialchars($email) . "\r\n";
$headers .= "Reply-To: " . htmlspecialchars($email) . "\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

// Send email
if(mail($to, $subject, $body, $headers)) {
    // Send confirmation email to user
    $user_subject = 'We received your message';
    $user_body = "Hi " . htmlspecialchars($name) . ",\n\n";
    $user_body .= "Thank you for reaching out. We have received your message and will get back to you soon.\n\n";
    $user_body .= "Best regards,\n";
    $user_body .= "Olamide Adebiyi\n";
    
    $user_headers = "From: olamideoluwatobiadebiyi@gmail.com\r\n";
    $user_headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
    
    mail($email, $user_subject, $user_body, $user_headers);
    
    http_response_code(200);
    echo json_encode([
        'success' => true,
        'message' => 'Message sent successfully!'
    ]);
} else {
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'errors' => ['Failed to send message. Please try again later.']
    ]);
}
?>
