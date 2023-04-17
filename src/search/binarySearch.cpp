int main ()
{
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