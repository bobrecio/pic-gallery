<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
  <title></title>
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

foreach ($files as $files){
$path = $dir."/".$files;
  if (is_file($path)){// && substr($file, -1)='g'){
    $strLine = "";
    $strLine = $strLine.'<a href="'.$path.'" ';
    $strLine = $strLine.'target="_self">';
    $strLine = $strLine.'<img src="'.$path.'" ';
    $strLine = $strLine.'alt="'.$files.'" ';
    $strLine = $strLine.'height=100>';
    $strLine = $strLine.'</a>';
    echo $strLine;
  }
  elseif (is_dir($path) && $files != "." && $files != "..") {
    $strLine = "";
    $strLine = $strLine.'<a href="./display.php?loc='.$path.'" ';
    $strLine = $strLine.'target="_self">';
    $strLine = $strLine.'<table><tr><td>'.$files.'</td></tr></table>';
    $strLine = $strLine.'</a>';
    echo $strLine;
  }
  elseif ($files == ".."){
    $strLine = "";
    $strLine = $strLine.'<a href="./display.php?loc='.dirname(dirname($path)).'" ';
    $strLine = $strLine.'target="_self">';
    $strLine = $strLine.'<h1>'.'[Up to: '.dirname(dirname($path)).']</h1>';
    $strLine = $strLine.'</a>';
    echo $strLine;
  }
}

?>
  </body>
</html>
