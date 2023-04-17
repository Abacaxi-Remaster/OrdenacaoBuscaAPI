int main ()
{
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