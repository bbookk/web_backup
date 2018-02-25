<?php
include "connect.php";
$datajson = file_get_contents("php://input");
$data = json_decode($datajson);

$id = $data->id;
$name = $data->name;
$sname = $data->sname;


$sql = "INSERT INTO student(`schoolName`, `dateOfBirth`, `decayNum`)  
        VALUES ('".$id."','".$name."','".$sname."')";

if ($conn->query($sql) === TRUE) {
    $newdata = array("Error"=>"false", "Message"=>"hi add member","data"=>$data);
} else {
    $newdata = array("Error"=>"true", "Message"=>"fail add","data"=>$data );
}

//$newdata = array("Error"=>"false", "Message"=>"Success","data"=>$id);
echo json_encode($newdata);
$conn->close();
//echo $datajson;


?>