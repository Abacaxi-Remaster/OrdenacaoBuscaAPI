#include "../fileToArray.hpp"
#include "../qSort.hpp"

int main(int argc, char *argv[])
{
    int length = stoi(argv[1]);
    int *array = fileToArray(length, "../array.csv");
    qSort(array, 0, length - 1);
    return 0;
}
