<?php
session_start();
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Error</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            color: #333;
            text-align: center;
            margin: 0;
            padding: 0;
        }

        .container {
            max-width: 600px;
            margin: 50px auto;
            padding: 20px;
            background-color: #fff;
            border: 1px solid #ddd;
            border-radius: 8px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        }

        h1 {
            color: #e74c3c;
        }

        p {
            font-size: 1.2em;
            color: #e74c3c;
        }

        a {
            display: inline-block;
            margin-top: 20px;
            padding: 10px 20px;
            font-size: 1em;
            color: #fff;
            background-color: #3498db;
            text-decoration: none;
            border-radius: 5px;
        }

        a:hover {
            background-color: #2980b9;
        }
    </style>
</head>

<body>
    <div class="container">
        <h1>Error</h1>
        <?php
        if (isset($_SESSION['error_message'])) {
            echo "<p>" . htmlspecialchars($_SESSION['error_message']) . "</p>";
            unset($_SESSION['error_message']);
        }
        ?>
        <a href="../Index.html">Go back to login</a>
    </div>
</body>

</html>