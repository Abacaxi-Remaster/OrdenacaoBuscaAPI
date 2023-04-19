#include "../fileToArray.hpp"
#include "../qSort.hpp"
#include <chrono>
using namespace std::chrono;

int main(int argc, char *argv[])
{
    int length = stoi(argv[1]);
    int *array = fileToArray(length, "data/array.csv");

    auto start = steady_clock::now();

    qSort(array, 0, length - 1);

    auto end = steady_clock::now();
    duration<double, std::micro> time = end - start;
    double tempo = time.count();

    cout << tempo << endl;

    return 0;
}
