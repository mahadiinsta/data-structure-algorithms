// Online C compiler to run C program online
#include <stdio.h>
#include <string.h>

int main() {
    char text[100];
    fgets(text,100, stdin);
    int wordCount = 1;
    int len = 0;
    while(text[len] != '\0'){
        len++;
        if(text[len] == ' '){
            wordCount++;
        }
    }
    printf("%d", wordCount);
    return 0;
}