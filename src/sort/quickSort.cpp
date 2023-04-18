#include "swap.hpp"

void qSort(int arr[], int start, int end);
int partition(int *array, int l, int r);

int partition(int *array, int l, int r)
{
    int pivot = array[r];
    int i = l;
    for (int j = l; j < r; j++)
    {
        if (array[j] <= pivot)
        {
            if (i != j)
            {
                swap(array[i], array[j]);
            }
            i++;
        }
    }
    swap(array[i], array[r]);
    return i;
}
void qSort(int arr[], int start, int end)
{
    if (start < end)
    {
        int p = partition(arr, start, end);
        qSort(arr, start, p - 1);
        qSort(arr, p + 1, end);
    }
}