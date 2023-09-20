<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // 取得表單資料
    $name = $_POST['name'];
    $email = $_POST['email'];
    // 其他表單欄位...

    // 構建郵件內容
    $to = 'phliu814l@gmail.com';  // 收件者的 Gmail 信箱
    $subject = '表單填寫完成通知';
    $message = "您收到一個新的表單填寫：\n\n姓名：$name\n電子郵件：$email\n";

    // 寄送郵件
    $headers = "From: your-email@gmail.com\r\n";
    mail($to, $subject, $message, $headers);

    // 重新導向或顯示成功訊息
    header('Location: success.html');
    exit();
}
?>
