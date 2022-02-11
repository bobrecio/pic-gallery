$place = strtolower(empty($_GET["loc"])) ? "." : ($_GET["loc"]);
$dir = strtolower(empty($_GET["loc"])) ? "." : ($_GET["loc"]);
$files = scandir($dir);

foreach ($files as $files){
$path = $dir."/".$files;
if (is_file($path) && (strtolower(substr($path, -3))=='png' || strtolower(substr($path, -3))=='jpg' || strtolower(substr($path, -4))=='jpeg')){
$strLine = "";
$strLine = $strLine.'<a data-lightbox="gallery" href="'.$path.'" ';
$strLine = $strLine.' target="_self">';
  $strLine = $strLine.'<img src="'.$path.'" ';
$strLine = $strLine.' alt="'.$files.'" ';
$strLine = $strLine.' height=100>';
  $strLine = $strLine.'</a>';
echo $strLine;
}
elseif (is_dir($path) && $files != "." && $files != "..") {
$strLine = "";
$strLine = $strLine.'<a href="./index.php?loc='.$path.'" ';
$strLine = $strLine.' target="_self">';
  $strLine = $strLine.$files.'</a><br />';
echo $strLine;
}
elseif ($files == ".."){
$strLine = "";
$strLine = $strLine.'<a href="./index.php?loc='.dirname(dirname($path)).'" ';
$strLine = $strLine.' target="_self">';
  $strLine = $strLine.'<h1>'.'[/'.dirname(dirname($path)).']'.str_replace("./"," ",$_GET["loc"]).'</h1>';
  $strLine = $strLine.'</a>';
echo $strLine;
}
}