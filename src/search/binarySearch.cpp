#include "../fileToArray.hpp"
#include "../qSort.hpp"
#include <chrono>
int bSearch(int *array, int value, int start, int end);

using namespace std::chrono;

int main(int argc, char *argv[])
{
    int length = stoi(argv[1]);
    int value = stoi(argv[2]);
    int *array = fileToArray(length, "data/array.csv");
    qSort(array, 0, length - 1);

    auto start = steady_clock::now();

    int result = bSearch(array, value, 0, length - 1);

    auto end = steady_clock::now();
    duration<double, std::micro> time = end - start;
    double tempo = time.count();

    cout << tempo << endl;
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