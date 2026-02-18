let expenses = [];
let chart;

// Add expense to list
function addExpense() {
    let name = document.getElementById("expenseName").value;
    let amount = Number(document.getElementById("expenseAmount").value);

    if (name === "" || amount <= 0) {
        alert("Enter valid expense!");
        return;
    }

    expenses.push({ name, amount });

    updateList();
    updateTotal();
    updateChart();
}

// Update ul list
function updateList() {
    let list = document.getElementById("expenseList");
    list.innerHTML = "";

    expenses.forEach(exp => {
        let li = document.createElement("li");
        li.textContent = `${exp.name}: ${exp.amount} EGP`;
        list.appendChild(li);
    });
}

// Update total
function updateTotal() {
    let total = expenses.reduce((sum, e) => sum + e.amount, 0);
    document.getElementById("total").textContent = total;
}

// Draw Pie Chart
function updateChart() {
    let ctx = document.getElementById("pieChart");

    if (chart) chart.destroy();

    chart = new Chart(ctx, {
        type: "pie",
        data: {
            labels: expenses.map(e => e.name),
            datasets: [{
                data: expenses.map(e => e.amount)
            }]
        }
    });
}

