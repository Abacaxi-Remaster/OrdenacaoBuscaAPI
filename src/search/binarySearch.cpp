#include "../fileToArray.hpp"
#include "../qSort.hpp"
int bSearch(int *array, int value, int start, int end);

int main(int argc, char *argv[])
{
    int value = stoi(argv[1]);
    int length = stoi(argv[2]);
    int *array = fileToArray(length, "../array.csv");
    qSort(array, 0, length - 1);
    cout << bSearch(array, value, 0, length - 1) << endl;
    return 0;
}

int bSearch(int *array, int value, int start, int end)
{
    if (end >= start)
    {
        int mid = start + (end - start) / 2;
        if (array[mid] == value)
        {
            return mid;
        }

        if (array[mid] > value)
        {
            return bSearch(array, value, start, mid - 1);
        }
        return bSearch(array, value, mid + 1, end);
    }
    return -1;
}