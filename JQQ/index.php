<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Photo Gallery</title>
    <link rel="stylesheet" href="./style.css" />
</head>

<body>
    <?php
    $place = strtolower(empty($_GET["loc"])) ? "." : ($_GET["loc"]);
    $dir = strtolower(empty($_GET["loc"])) ? "." : ($_GET["loc"]);
    $files = scandir($dir);

    $galleryImages = "[]";
    $galleryDirs = "[]";

    foreach ($files as $file) {
        $path = $dir . "/" . $file;
        if (is_file($path) && (strtolower(substr($path, -3)) == 'png' || strtolower(substr($path, -3)) == 'jpg' || strtolower(substr($path, -4)) == 'webp' || strtolower(substr($path, -4)) == 'jpeg')) {
            $addNewFile = "," . $file . "]";
            $galleryImages = str_replace("]", $addNewFile, $galleryImages);
        } elseif (is_dir($path) && $file != "." && $file != "..") {
            $addNewDir = "," . $path . "]";
            $galleryDir = str_Replace("]", $addNewDir, $galleryDirs);
        } elseif ($file == "..") {
            $strLine = "";
            $strLine = $strLine . '<a href="./index.php?loc=' . dirname(dirname($path)) . '" ';
            $strLine = $strLine . ' target="_self">';
            $strLine = $strLine . '<h1>' . '[/' . dirname(dirname($path)) . ']' . str_replace("./", " ", $_GET["loc"]) . '</h1>';
            $strLine = $strLine . '</a>';
            echo $strLine;
        }
    }
    echo '<script>';
    echo 'let galleryImages = ' . $galleryImages . ";\n";
    echo 'let galleryDirs = ' . $galleryDirs . ";\n";
    echo '</script>'
    ?>
    <div class="container">
        <h1 id="pathTitle">Image Gallery</h1>
        <div id="gallery"></div>
    </div>
    <div id="popup">
        <span class="close cursor" onclick="closeModal()">&times;</span>
        <div class="modal-content">
            <a id="btnPrev">&#10094;</a>
            <div id="numbertext"></div>
            <img src="" alt="" id="selectedImage">
            <a id="btnNext">&#10095;</a>
            <div class="caption-container">
                <p id="caption"></p>
            </div>
        </div>
    </div>
    <script src="./script.js"></script>
</body>

</html>