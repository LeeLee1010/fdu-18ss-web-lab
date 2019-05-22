<?php

    function outputOrderRow($file, $title, $quantity, $price) {
        echo "<tr>";
        //TODO
        $price = number_format($price,2);
        $amount = $quantity * $price;
        $amount = number_format($amount,2);
        echo "<td><img src='images/books/tinysquare/$file'</td>";
        echo "<td>$title</td>";
        echo "<td>$quantity</td>";
        echo "<td>\$$price</td>";
        echo "<td>\$$amount</td>";
        echo "</tr>";
    }
?>