#include <stdio.h>
void swap(int *a, int *b){
int temp = *a;
*a = *b;
*b = temp;
}

int min(int a, int b){
return a > b ? a : b;
}

void selection_sort(int n, int a[]){
    for(int step = 0; step< n ; step++){
        int minelemenet = a[step],position = step;
        for(int i = step; i < n; i++){
            if(a[i] < minelemenet){
                minelemenet = a[i];
                position = i;
            }
        }
        swap(&a[step], &a[position]);
    }
}
int main()
{
    int n;
    scanf("%d", &n);
    int a[n];
    for(int i=0; i< n; i++){
        scanf("%d",&a[i]);
    }
    selection_sort(n,a);
    for(int i=0; i< n; i++){
        printf("%d ",a[i]);
    }
    return 0;
}