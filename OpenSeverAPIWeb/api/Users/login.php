<?php 
include $_SERVER['DOCUMENT_ROOT'] . "/BD.php";
?>
<?php
    $conn = sqlsrv_connect( $serverName, $connectionInfo);

    if(isset($_GET['check'])){
        
        $tid = $_GET['check'];
        $sql = "SELECT * FROM Users WHERE UCookie = '{$tid}'";
        sqlsrv_query( $conn, $sql);
        $stmt = sqlsrv_query( $conn, $sql);
    
        $arr = [];
    
        while( $row = sqlsrv_fetch_array( $stmt, SQLSRV_FETCH_ASSOC) ){
            $arr[] = $row;
        }

        if($arr > 0){
            echo json_encode($arr[0]['UCookie']);
        }else{
            echo json_encode(-1);
        }

    }
?>