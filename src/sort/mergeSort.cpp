#include "../fileToArray.hpp"
#include <chrono>
using namespace std::chrono;
void mSort(int *array, int start, int end);

int main(int argc, char *argv[])
{
    int length = stoi(argv[1]);
    int *array = fileToArray(length, "array.csv");

    auto start = steady_clock::now();

    mSort(array, 0, length - 1);
    
    auto end = steady_clock::now();
    duration<double, std::micro> time = end - start;
    double tempo = time.count();

    cout << tempo << endl;
    
    
    return 0;
}

void merge(int *array, int left, int center, int right)
{
    int sizel = center - left + 1; // tamanho da primeira parte
    int sizer = right - center;    // tamanho da segunda parte
    int L[sizel] = {};
    int R[sizer] = {};

    for (int i = 0; i < sizel; i++)
    {
        L[i] = array[left + i]; // preenche a metade esquerda
    }
    for (int j = 0; j < sizer; j++)
    {
        R[j] = array[center + j + 1]; // preenche a metade direita
    }
    int i = 0;
    int j = 0;
    int k = left;
    while (i < sizel && j < sizer)
    {
        if (L[i] <= R[j])
        {
            array[k] = L[i];
            i++;
        }
        else
        {
            array[k] = R[j];
            j++;
        }
        k++;
    }
    while (i < sizel)
    {
        array[k] = L[i];
        i++;
        k++;
    }

    while (j < sizer)
    {
        array[k] = R[j];
        j++;
        k++;
    }
}

void mSort(int *array, int start, int end)
{
    if (start < end)
    {
        int center = (start + end) / 2;
        mSort(array, start, center);
        mSort(array, center + 1, end);
        merge(array, start, center, end);
    }
}