
/ Objectve /
The primary goal of this function is to determine the presence of a specific product in an order, ensuring it has not been explicitly marked for deletion. It is designed for use in an e-commerce context.

$sp is used to check whether a specific product (identified by its price ID) is present in the order.

$cd is used to check whether any item in the order has been explicitly chosen for deletion.

The function returns an array of items with non-negative quantities, making it suitable for scenarios such as determining product presence, checking deletions, and handling products that may be temporarily out of stock without updated UI information.

/ iterations / 

The foreach loop itereate the $ext array, and create a new associative array ($ext_p) where each element is indexed by the price ID, and the corresponding value is the quantity associated with that price ID. 

Then the last foreach process remaining extensions that are not associated with any order item and skip those who quantity is less than 1

/ Conditonals / 

It checks if an item's price ID exists in the extension array ($ext_p).
It checks if an item's price ID matches a provided price ID ($p['id']).
It checks if none of the items in the order have a price ID matching the provided price ID ($sp).
It checks if any item in the order does not match the provided price ID ($cd).





