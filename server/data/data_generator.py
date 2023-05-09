import csv

# Define the header row
header = ["subject", "relation", "object"]

# Define the rows
rows = [
    ["Alice", "has blood group", "O+"],
    ["Bob", "has blood group", "A+"],
    ["Charlie", "has blood group", "B+"],
    ["David", "has blood group", "O+"],
    ["Emily", "has blood group", "AB-"],
    ["Alice", "has", "fever"],
    ["Bob", "has", "fever"],
    ["Charlie", "has", "fever"],
    ["David", "has", "headache"],
    ["Emily", "has", "headache"],    
    ["nikhil", "has blood group", "B+"],
    ["Sujji", "HAS gone to ", "Dubai"],
    ["Mitul", "is","Duddu"],
    # make random entries here
]

# Write the rows to a CSV file
with open("healthcare_data.csv", "w", newline="") as csvfile:
    writer = csv.writer(csvfile)
    writer.writerow(header)
    writer.writerows(rows)
    
    
