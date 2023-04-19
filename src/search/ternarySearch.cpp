#include "../fileToArray.hpp"
#include "../qSort.hpp"

int tSearch(int *array, int value, int start, int end);

int main(int argc, char *argv[])
{
    int length = stoi(argv[1]);
    int value = stoi(argv[2]);
    int *array = fileToArray(length, "../array.csv");
    qSort(array, 0, length - 1);
    cout << tSearch(array, value, 0, length - 1) << endl;
    return 0;
}

int tSearch(int *array, int value, int start, int end)
{
    if (end > start)
    {
        int mid1 = start + (end - start) / 3;
        int mid2 = end - (end - start) / 3;
        if (array[mid1] == value)
        {
            return mid1;
        }
        if (array[mid2] == value)
        {
            return mid2;
        }

        if (array[mid1] > value)
        {
            return tSearch(array, value, start, mid1 - 1);
        }
        else if (array[mid2] > value)
        {
            return tSearch(array, value, mid1, mid2 - 1);
        }
        return tSearch(array, value, mid2, end);
    }
    return -1;
}