
let algorithmData = {
    insertion : 
        ["<p>SUMMARY:</p> <p>Insertion sort is a simple sorting alogrithm that builds the final sorted array one element at a time.</p><br>",
        
        "<p>ADVANTAGES:</p> <p>Simple implementation. Efficient for very small data sets, it's more efficient in practice than simple quadratic algorithms like selection sort or bubble sort.</p><br>",
        
        "<p>RUNTIME:</p> <p>O(n\&#xb2;) in speed. O(1) in auxiliary space.</p><br>",

        "<p>CONCLUSION:</p> <p>Insertion sort is a quick and easy sorting algorithm that should used when small data sets require sorting. " +
        "It's easy to implement and rivals most other quadratic sorting algorithms. " +
        "It's much less efficient on large lists compared with other more advanced algorithms like quicksort, heapsort, or merge sort but suffers with high swap counts when it's nearly sorted.</p>"],   
    
    selection : 
        ["<p>SUMMARY:</p> <p>Selection sort is a simple sorting algorithm that divides the input list into two parts: a sorted sublist of items which is built up from left to right" + 
         "at the front (left) of the list and a sublist of the remaining unsorted items that occupy the rest of the list..</p><br>",
        
        "<p>ADVANTAGES:</p> <p>Simple implementation. One thing which distinguishes selection sort from other sorting algorithms is that it makes the minimum possible number of swaps. </p><br>",
        
        "<p>RUNTIME:</p> <p>O(n\&#xb2;) in speed. O(1) in auxiliary space.</p><br>",

        "<p>CONCLUSION:</p> <p>Selection sort is a quick and easy sorting algorithm that should used when small data sets require sorting. " +
        "It's easy to implement but generally performs worse than insertion sort. " +
        "It's a decent algorithm to consider when data size is small and swapping is expensive to perform.</p>"], 
    
    bubble : 
        ["<p>SUMMARY:</p> <p>Bubble sort is a simple sorting alogrithm that repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order.</p><br>",
        
        "<p>ADVANTAGES:</p> <p>Simple implementation. Good tool for learning how sorting works. </p><br>",
        
        "<p>RUNTIME:</p> <p>O(n\&#xb2;) in speed. O(1) in auxiliary space.</p><br>",

        "<p>CONCLUSION:</p> <p>This simple algorithm performs poorly in real world use and is used primarily as an educational tool. " +
        "It's easy to implement but not practical at all due to the slow performance when data is large. Also underperforms other quadratic algorithms when data is small. " +
        "One is better off using insertion or selection sort. </p>"], 
    
    quick : 
        ["<p>SUMMARY:</p> <p>Quick sort is a efficient sorting algorithm that uses divide-and-conquer and works by selecting a 'pivot' element from the array and partitioning the other elements into two sub-arrays, according to whether they are less than or greater than the pivot." + 
        " The sub-arrays are then sorted recursively. This can be done in-place, " +
        "requiring small additional amounts of memory to perform the sorting.</p><br>",
        
        "<p>ADVANTAGES:</p> <p>Efficient on average performance. Divide and conquer algorithm.</p><br>",
        
        "<p>RUNTIME:</p> <p>O(n log n)  in speed. O(n) in auxiliary space.</p><br>",

        "<p>CONCLUSION:</p> <p>The quick sort is regarded as the best sorting algorithm. This is because of its significant advantage in terms of efficiency because it is able to deal well with a huge list of items. " +
        "Because it sorts in place, no additional storage is required as well.</p>"], 
    
    heap : 
        ["<p>SUMMARY:</p> <p>Insertion sort is a simple sorting alogrithm that builds the final sorted array one element at a time.</p><br>",
        
        "<p>ADVANTAGES:</p> <p>Efficient on average performance. Efficient large , more efficient in practice than simple quadratic algorithms like selection sort or bubble sort.</p><br>",
        
        "<p>RUNTIME:</p> <p>O(n log n)  in speed. O(n) in auxiliary space.</p><br>",

        "<p>CONCLUSION:</p> <p>Insertion sort is a quick and easy sorting algorithm that should used when small data sets require sorting. " +
        "It's easy to implement and rivals most other quadratic sorting algorithms. " +
        "It's much less efficient on large lists compared with other more advanced algorithms like quick sort, heap sort, or merge sort but suffers with high swap counts when it's nearly sorted.</p>"], 
    
    merge : 
        ["<p>SUMMARY:</p> <p>Insertion sort is a simple sorting alogrithm that builds the final sorted array one element at a time.</p><br>",
        
        "<p>ADVANTAGES:</p> <p>Simple implementation. Efficient for small data sets, more efficient in practice than simple quadratic algorithms like selection sort or bubble sort.</p><br>",
        
        "<p>RUNTIME:</p> <p>O(n\&#xb2;) in speed. O(1) in space.</p><br>",

        "<p>CONCLUSION:</p> <p>Insertion sort is a quick and easy sorting algorithm that should used when small data sets require sorting. " +
        "It's easy to implement and rivals most other quadratic sorting algorithms. " +
        "It's much less efficient on large lists compared with other more advanced algorithms like quicksort, heapsort, or merge sort but suffers with high swap counts when it's nearly sorted.</p>"], 
    
    bogo : 
        ["<p>SUMMARY:</p> <p>Insertion sort is a simple sorting alogrithm that builds the final sorted array one element at a time.</p><br>",
        
        "<p>ADVANTAGES:</p> <p>Simple implementation. Efficient for small data sets, more efficient in practice than simple quadratic algorithms like selection sort or bubble sort.</p><br>",
        
        "<p>RUNTIME:</p> <p>O(n\&#xb2;) in speed. O(1) in space.</p><br>",

        "<p>CONCLUSION:</p> <p>Insertion sort is a quick and easy sorting algorithm that should used when small data sets require sorting. " +
        "It's easy to implement and rivals most other quadratic sorting algorithms. " +
        "It's much less efficient on large lists compared with other more advanced algorithms like quicksort, heapsort, or merge sort but suffers with high swap counts when it's nearly sorted.</p>"], 
        
    counting : 
        ["<p>SUMMARY:</p> <p>Insertion sort is a simple sorting alogrithm that builds the final sorted array one element at a time.</p><br>",
        
        "<p>ADVANTAGES:</p> <p>Simple implementation. Efficient for small data sets, more efficient in practice than simple quadratic algorithms like selection sort or bubble sort.</p><br>",
        
        "<p>RUNTIME:</p> <p>O(n\&#xb2;) in speed. O(1) in space.</p><br>",

        "<p>CONCLUSION:</p> <p>Insertion sort is a quick and easy sorting algorithm that should used when small data sets require sorting. " +
        "It's easy to implement and rivals most other quadratic sorting algorithms. " +
        "It's much less efficient on large lists compared with other more advanced algorithms like quicksort, heapsort, or merge sort but suffers with high swap counts when it's nearly sorted.</p>"],

    radix : 
        ["<p>SUMMARY:</p> <p>Insertion sort is a simple sorting alogrithm that builds the final sorted array one element at a time.</p><br>",
        
        "<p>ADVANTAGES:</p> <p>Simple implementation. Efficient for small data sets, more efficient in practice than simple quadratic algorithms like selection sort or bubble sort.</p><br>",
        
        "<p>RUNTIME:</p> <p>O(n\&#xb2;) in speed. O(1) in space.</p><br>",

        "<p>CONCLUSION:</p> <p>Insertion sort is a quick and easy sorting algorithm that should used when small data sets require sorting. " +
        "It's easy to implement and rivals most other quadratic sorting algorithms. " +
        "It's much less efficient on large lists compared with other more advanced algorithms like quicksort, heapsort, or merge sort but suffers with high swap counts when it's nearly sorted.</p>"],

    bucket : 
        ["<p>SUMMARY:</p> <p>Insertion sort is a simple sorting algorithm that builds the final sorted array one element at a time.</p><br>",
        
        "<p>ADVANTAGES:</p> <p>Simple implementation. Efficient for small data sets, more efficient in practice than simple quadratic algorithms like selection sort or bubble sort.</p><br>",
        
        "<p>RUNTIME:</p> <p>O(n\&#xb2;) in speed. O(1) in space.</p><br>",

        "<p>CONCLUSION:</p> <p>Insertion sort is a quick and easy sorting algorithm that should used when small data sets require sorting. " +
        "It's easy to implement and rivals most other quadratic sorting algorithms. " +
        "It's much less efficient on large lists compared with other more advanced algorithms like quicksort, heapsort, or merge sort but suffers with high swap counts when it's nearly sorted.</p>"],
};