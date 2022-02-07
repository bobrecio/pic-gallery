<!DOCTYPE html>
<html>
  <head>
  <title></title>
	  <script src="jquery-1.10.2.min.js"></script>
	  <script src="lightbox-2.6.min.js"></script>
	  <link href="lightbox.css" rel="stylesheet" />
  <style>
  body{
    background:black;
    float: left;
    border: solid 5px silver;
    text-align: center;
    color:silver;
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

// uasort($files, create_function('$a,$b', 'return filemtime($a)<filemtime($b);')); //sort by filetime
		
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
    $strLine = $strLine.'<table><tr><td>'.$files.'</td></tr></table>';
    $strLine = $strLine.'</a>';
    echo $strLine;
  }
  elseif ($files == ".."){
    $strLine = "";
    $strLine = $strLine.'<a href="./index.php?loc='.dirname(dirname($path)).'" ';
    $strLine = $strLine.'target="_self">';
    $strLine = $strLine.'<h1>'.'[Up to: '.dirname(dirname($path)).']</h1>';
    $strLine = $strLine.'</a>';
    echo $strLine;
  }
}

?>
  </body>
</html>
