#include <fstream>
#include <string>
#include <iostream>
using namespace std;

int *fileToArray(int length, string filename)
{
    // TODO: Implement me!
    // Implement a function that recieves extracts data from a .csv file and puts it in a array

    ifstream file(filename);
    if (!file.is_open())
    {
        cerr << "Failed to open file: " << filename << endl;
        return nullptr;
    }

    int *array = new int[length];

    string line;
    int i = 0;
    while (getline(file, line))
    {
        size_t pos = 0;
        while (pos < line.size())
        {
            size_t next_pos = line.find(',', pos);
            if (next_pos == string::npos)
            {
                next_pos = line.size();
            }
            try
            {
                int value = stoi(line.substr(pos, next_pos - pos));
                array[i] = value;
            }
            catch (...)
            {
                cerr << "Failed to convert string to integer: " << line.substr(pos, next_pos - pos) << endl;
            }
            pos = next_pos + 1;
            i++;
        }
    }

    file.close();
    return array;
}