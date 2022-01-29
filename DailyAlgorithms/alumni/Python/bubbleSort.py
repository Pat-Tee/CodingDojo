import sys

def read_file(textfile):    
    f=open(textfile,'r')    # open textfile in read mode, file handle at beginning of file
    fileData = []
    for line in f:
        for ch in line:
            if((ch != '\n') & (ch != '\r') & (ch != '\f')): # check for and remove newline, carriage return, and linefeed characters
                fileData.append(int(ch))
    f.close()
    print(fileData)
    return fileData

def bubbleSort(fd):
    n = len(fd) - 1
        
    for j in range(0,n):
        for i in range(0,n):
            if (fd[i] > fd[i+1]):
                t = fd[i]
                fd[i] = fd[i+1]
                fd[i+1] = t
    return fd

fileData = read_file(sys.argv[1])
print(bubbleSort(fileData))
