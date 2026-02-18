# Payoff matrix (list of lists)
payoff = [
    [6, 8, 6],   # Row I
    [4, 12, 2]   # Row II
]

# Row minimums
row_min = [min(row) for row in payoff]
maximin = max(row_min)

# Column maximums
num_cols = len(payoff[0])
col_max = [max(payoff[r][c] for r in range(len(payoff))) for c in range(num_cols)]
minimax = min(col_max)

print("Row minimums:", row_min)
print("Maximin value:", maximin)
print("Column maximums:", col_max)
print("Minimax value:", minimax)

if maximin == minimax:
    print("\n Saddle Point exists at value:", maximin)
    # List optimal strategies (positions equal to saddle value)
    for i, row in enumerate(payoff, start=1):
        for j, val in enumerate(row, start=1):
            if val == maximin:
                print(f"Optimal strategy: Player A -> Row {i}, Player B -> Column {j}")
else:
    print("\n No Saddle Point exists")
