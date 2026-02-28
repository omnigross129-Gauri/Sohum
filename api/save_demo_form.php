<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require __DIR__ . '/../vendor/autoload.php';

// ===============================
// GET FORM DATA
// ===============================
$fullName      = $_POST['full_name'] ?? '';
$emailAddress  = $_POST['email_address'] ?? '';
$mobileNumber  = $_POST['mobile_number'] ?? '';
$course        = $_POST['course'] ?? '';

// ===============================
// SMTP CONFIG
// ===============================
$adminEmail = "gaurav@tubelaser.in";
$smtpUser   = "gaurav@tubelaser.in";
$smtpPass   = "G@ur@v111"; 
$smtpPort   = 587;

$mail = new PHPMailer(true);


$host = '127.0.0.1';
$username = 'root';
$password = "";
$database = 'sohum';
$table = 'demo_session_requests';

mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);

try {

    // ===============================
    // SMTP SETTINGS
    // ===============================
    $mail->isSMTP();
    $mail->Host       = "smtp.hostinger.com";
    $mail->SMTPAuth   = true;
    $mail->Username   = $smtpUser;
    $mail->Password   = $smtpPass;
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port       = $smtpPort;
    $mail->isHTML(true);

    // ======================================================
    // 1️⃣ USER AUTO REPLY
    // ======================================================

    if (!empty($emailAddress) && filter_var($emailAddress, FILTER_VALIDATE_EMAIL)) {

        $mail->clearAllRecipients();
        $mail->setFrom($smtpUser, "Sohum Financial Planner Institute");
        $mail->addAddress($emailAddress, $fullName);
        $mail->addReplyTo($smtpUser, "Sohum Institute");

        $mail->Subject = "🎓 Demo Session Confirmation – Sohum Institute";

        $mail->Body = "
        <div style='font-family:Arial;padding:20px'>
            <h2 style='color:#1a237e;'>Thank You $fullName</h2>
            <p>We have received your demo session request.</p>

            <div style='background:#f4f6fb;padding:15px;border-left:4px solid #1a237e;margin:20px 0'>
                <p><strong>Name:</strong> $fullName</p>
                <p><strong>Email:</strong> $emailAddress</p>
                <p><strong>Mobile:</strong> $mobileNumber</p>
                <p><strong>Selected Course:</strong> $course</p>
            </div>

            <p>Our team will contact you within 24 hours.</p>

            <br>
            <strong>Sohum Financial Planner Institute</strong><br>
            Pune & PCMC
        </div>
        ";

        $mail->send();
    }

    // ======================================================
    // 2️⃣ ADMIN LEAD ALERT
    // ======================================================

    $mail->clearAllRecipients();
    $mail->setFrom($smtpUser, "Website Lead Alert");
    $mail->addAddress($adminEmail);

    if (!empty($emailAddress)) {
        $mail->addReplyTo($emailAddress, $fullName);
    }

    $mail->Subject = "🚀 New Demo Session Lead – Sohum Institute";

    $mail->Body = "
    <div style='font-family:Arial;padding:20px'>
        <h2 style='color:#c62828;'>New Lead Received</h2>

        <p><strong>Name:</strong> $fullName</p>
        <p><strong>Email:</strong> $emailAddress</p>
        <p><strong>Mobile:</strong> $mobileNumber</p>
        <p><strong>Course:</strong> $course</p>

        <hr>
        <p>This lead was generated from Sohum website demo form.</p>
    </div>
    ";

    $mail->send();

 

} catch (Exception $e) {
    echo "Mail Error: {$mail->ErrorInfo}";
}
