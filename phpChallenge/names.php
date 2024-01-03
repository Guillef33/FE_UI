<?php

function fetchDataAndPrintColumns() {
    try {
        $url = "http://echo.jsontest.com/john/yes/tomas/no/belen/yes/peter/no/julie/no/gabriela/no/messi/no";
        $json_data = file_get_contents($url);

        if ($json_data === false) {
            throw new Exception("Error fetching data from $url");
        }

        $data = json_decode($json_data, true);

        if ($data === null) {
            throw new Exception("Error decoding JSON data");
        }

        $namesYes = [];
        $namesNo = [];

        foreach ($data as $name => $response) {
            if ($response === 'yes') {
                $namesYes[] = $name;
            } elseif ($response === 'no') {
                $namesNo[] = $name;
            }
        }

        echo "Names with 'No':\t\tNames with 'yes':\n";
        echo "-----------------\t\t----------------\n";

        $maxCount = max(count($namesYes), count($namesNo));

        for ($i = 0; $i < $maxCount; $i++) {
            $nameYes = isset($namesYes[$i]) ? $namesYes[$i] : '';
            $nameNo = isset($namesNo[$i]) ? $namesNo[$i] : '';

            echo str_pad($nameNo, 20) . "\t\t" . str_pad($nameYes, 20) . "\n";
        }

    } catch (Exception $e) {
        echo "Error: " . $e->getMessage();
    }
}

fetchDataAndPrintColumns();
