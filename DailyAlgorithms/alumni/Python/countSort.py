import sys

def read_file(textfile):    
    f=open(textfile,'r')    # open textfile in read mode, file handle at beginning of file
    fileData = []
    for line in f:
        for ch in line:
            if((ch != '\n') & (ch != '\r') & (ch != '\f')): # check for and remove newline, carriage return, and linefeed characters
                fileData.append(int(ch))
    f.close()
    print("parsed file:   ", fileData)
    print("length: ", len(fileData))
    return fileData

def countSort(fd):
    n = len(fd) - 1
    count = [0 for i in range(10)]
    sorted = [0 for i in range(n+1)]

    for i in fd:
        count[i] += 1
    print("count: ", count)
    # for i in range(0,len(count)-1):
    #     count[i+1] += count[i]
    
    print("count:         ", count)
    return sorted

#############################
# FROM GEEKSFORGEEKS
# Python program for counting sort
# which takes negative numbers as well
# The function that sorts the given arr[]
def count_sort(arr):
    max_element = int(max(arr))
    min_element = int(min(arr))
    range_of_elements = max_element - min_element + 1
    # Create a count array to store count of individual
    # elements and initialize count array as 0
    count_arr = [0 for _ in range(range_of_elements)]
    output_arr = [0 for _ in range(len(arr))]

    # Store count of each character
    for i in range(0, len(arr)):
        count_arr[arr[i]-min_element] += 1

    # Change count_arr[i] so that count_arr[i] now contains actual
    # position of this element in output array
    for i in range(1, len(count_arr)):
        count_arr[i] += count_arr[i-1]

    # Build the output character array
    for i in range(len(arr)-1, -1, -1):
        output_arr[count_arr[arr[i] - min_element] - 1] = arr[i]
        count_arr[arr[i] - min_element] -= 1

    # Copy the output array to arr, so that arr now
    # contains sorted characters
    for i in range(0, len(arr)):
        arr[i] = output_arr[i]

    return arr
##########################################
##########################################

# Driver program to test above function
fileData = read_file(sys.argv[1])
# print("counterSorted: ", countSort(fileData))

ans = count_sort(fileData)
print("countSorted array: " + str(ans))
