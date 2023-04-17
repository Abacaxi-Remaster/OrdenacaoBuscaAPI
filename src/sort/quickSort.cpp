#include "swap.hpp"

int main()
{
    return 0;
}

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
void qSort(int arr[], int l, int r)
{
    if (l < r)
    {
        int p = partition(arr, l, r);
        qSort(arr, l, p - 1);
        qSort(arr, p + 1, r);
    }
}