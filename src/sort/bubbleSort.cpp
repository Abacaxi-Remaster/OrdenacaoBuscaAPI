#include "swap.hpp"
#include "../fileToArray.hpp"
#include <chrono>
using namespace std::chrono;

void bubbleSort(int *array, int length);

int main(int argc, char *argv[])
{
    int length = stoi(argv[1]);
    int *array = fileToArray(length, "data/array.csv");

    auto start = steady_clock::now();

    bubbleSort(array, length - 1);

    auto end = steady_clock::now();
    duration<double, std::micro> time = end - start;
    double tempo = time.count();

    cout << tempo << endl;
    
    return 0;
}

void bubbleSort(int *array, int length)
{
    bool swapped;
    do
    {
        swapped = false;
        for (int i = 0; i < length - 1; i++)
        {
            if (array[i] > array[i + 1])
            {
                swap(array[i], array[i + 1]);
                swapped = true;
            }
        }
    } while (swapped);
}