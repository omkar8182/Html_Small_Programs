<php
$username=root;
$password="";
$server="localhost"
$database=Railway;
$con=mysqli_connect($username,$password,$database,$server);
if($con){
    echo("succesful");
}else echo("not sucessful");


?>