<?php

class LetterCounter {

    public static function CountLettersAsString ( $string ) : string
    {

        $letterCounts = [];
        $word = "";

        for ($i = 0; $i < strlen($string); $i++) {

            $letter = $string[$i];

             if (isset($letterCounts[$letter])) {
                $letterCounts[$letter]++;
            } else {
                $letterCounts[$letter] = 1;
            }
        }

        foreach ($letterCounts as $letter => $value) {
            $asterisks = str_repeat('*', $value);
            $word .= " $letter$asterisks";
        }
        return $word;
    }

}


// $letter = new LetterCounter();
// $letter->CountLettersAsString("alejandria");
