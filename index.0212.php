<!DOCTYPE html>
<html>
  <head>
  <title></title>
	  <script src="jquery-1.10.2.min.js"></script>
	  <script src="lightbox-2.6.min.js"></script>
	  <link href="lightbox.css" rel="stylesheet" />
  <style>
  body{
font-family: helvetica;
    background:black;
    float: left;
    border: solid 5px silver;
    text-align: left;
    color:silver;
  }
a{
color:green;
font-size: 1.5em;
text-decoration:none;
}
  a h1{
    color:silver;
  }
  </style>
  </head>
  <body>
<?php
$place = strtolower(empty($_GET["loc"])) ? "." : ($_GET["loc"]);
$dir = strtolower(empty($_GET["loc"])) ? "." : ($_GET["loc"]);
$files = scandir($dir);
		
foreach ($files as $files){
$path = $dir."/".$files;
  if (is_file($path) && (strtolower(substr($path, -3))=='png' || strtolower(substr($path, -3))=='jpg' || strtolower(substr($path, -4))=='jpeg')){
    $strLine = "";
    $strLine = $strLine.'<a data-lightbox="gallery" href="'.$path.'" ';
    $strLine = $strLine.'target="_self">';
    $strLine = $strLine.'<img src="'.$path.'" ';
    $strLine = $strLine.'alt="'.$files.'" ';
    $strLine = $strLine.'height=100>';
    $strLine = $strLine.'</a>';
    echo $strLine;
  }
  elseif (is_dir($path) && $files != "." && $files != "..") {
    $strLine = "";
    $strLine = $strLine.'<a href="./index.php?loc='.$path.'" ';
    $strLine = $strLine.'target="_self">';
    $strLine = $strLine.$files.'</a><br/>';
    echo $strLine;
  }
  elseif ($files == ".."){
    $strLine = "";
    $strLine = $strLine.'<a href="./index.php?loc='.dirname(dirname($path)).'" ';
    $strLine = $strLine.'target="_self">';
    $strLine = $strLine.'<h1>'.'[/'.dirname(dirname($path)).']'.str_replace("./"," ",$_GET["loc"]).'</h1>';
    $strLine = $strLine.'</a>';
    echo $strLine;
  }
}

?>
  </body>
</html>
