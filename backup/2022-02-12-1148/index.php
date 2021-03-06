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
    //$place = "./images";
    //$dir = "./images";
    $files = scandir($dir);

    $galleryImages = "[]";
    $galleryDirs = "[]";
    $galleryNav = "";

    foreach ($files as $file) {
        $path = $dir . "/" . $file;
        $galleryNav = dirname($path);

        if (is_file($path) && (strtolower(substr($path, -3)) == 'png' || strtolower(substr($path, -3)) == 'jpg' || strtolower(substr($path, -4)) == 'webp' || strtolower(substr($path, -4)) == 'jpeg')) {
            $galleryImagesIsEmpty = ($galleryImages != "[]") ? false : true;
            $comma = $galleryImagesIsEmpty ? "" : ",";
            $addNewFile = $comma . "'" . $file . "']";
            $galleryImages = substr_replace($galleryImages, $addNewFile, -1);
        } elseif (is_dir($path) && $file != "." && $file != "..") {
            $galleryDirsIsEmpty = ($galleryDirs != "[]") ? false : true;
            $comma = $galleryDirsIsEmpty ? "" : ",";
            $addNewFile = $comma . "'" . $file . "']";
            $galleryDirs = substr_replace($galleryDirs, $addNewFile, -1);
        } // elseif ($file == "..") {
        //     $strLine = "";
        //     $strLine = $strLine . '<a href="./index.php?loc=' . dirname(dirname($path)) . '" ';
        //     $strLine = $strLine . ' target="_self">';
        //     $strLine = $strLine . '<h1>' . '[/' . dirname(dirname($path)) . ']' . str_replace("./", " ", $_GET["loc"]) . '</h1>';
        //     $strLine = $strLine . '</a>';
        //     echo $strLine;
        // }
    }
    echo "<script>";
    echo "\nlet galleryImages = " . $galleryImages . "; ";
    echo "\nlet galleryDirs = " . $galleryDirs . "; ";
    echo "\nlet galleryNav = '" . $galleryNav . "'; ";
    echo "\nlet galleryParent = '" . dirname($galleryNav) . "'; ";
    echo "\n</script>";
    ?>
    <div id="header">
        <a id='gotoParent'>&nbsp;&lArr;&nbsp;back to&nbsp;</a>
        <div id='pathTitle'></div>
        <div id='subFolder-container'></div>
    </div>
    <div class='container'>
        <div id="gallery"></div>
    </div>
    <div id="popup">
        <div class="modal-content">
            <span class="close cursor" onclick="closeModal()">&times;</span>
            <div id="slideNumber"></div>
            <a id="btnPrev" onclick="updatePic(-1)">&#10094;</a>
            <img id="selectedImage" src="" alt="">
            <a id="btnNext" onclick="updatePic(+1)">&#10095;</a>

            <div class="caption-container">
                <a id="caption" class='cursor'></a>
            </div>
        </div>
    </div>
    <script src="./script.js"></script>
</body>

</html>