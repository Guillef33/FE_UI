<?php

function get_current_date() {
    try {
        $url = "http://date.jsontest.com/";
        $json_data = file_get_contents($url);

        if ($json_data === false) {
            throw new Exception("Error fetching data from $url");
        }

        $data = json_decode($json_data, true);

        if ($data === null) {
            throw new Exception("Error decoding JSON data");
        }

        $milliseconds = $data["milliseconds_since_epoch"];
        $current_date = date("l jS \of F, Y - h:i A", $milliseconds / 1000);

        echo $current_date;

    } catch (Exception $e) {
        echo "Error: " . $e->getMessage() . PHP_EOL;
    }
}

get_current_date();
?>
