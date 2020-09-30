# open a text file to access the text
log_file = open("um-server-01.txt")


def sales_reports(log_file):  # define a function and pass in the text file

    for line in log_file:    # for each line in the text file

        line = line.rstrip()  # reassign each line to have whitespace on the right removed
        # get ther first three characters in line, and assign to day of the week
        day = line[0:3]
        if day == "Mon":     # Update date from Tue to Mon, which is what the CEO wants
            print(line)      # print the line for Monday


# call the function and pass in the file
sales_reports(log_file)
