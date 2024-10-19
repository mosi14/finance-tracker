import  { useState, useEffect } from 'react';

const Budget = ({ transactions }) => {
    const [budgets, setBudgets] = useState({
        Food: 500,
        Rent: 1000,
        Utilities: 200,
        Entertainment: 300
    });

    const calculateSpent = (category) => {
        return transactions
            .filter((transaction) => transaction.category === category && transaction.type === 'expense')
            .reduce((acc, transaction) => acc + parseFloat(transaction.amount), 0);
    };

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg">
                <h1 className="text-2xl font-bold text-center mb-4">Budget</h1>

                <div className="space-y-4">
                    {Object.keys(budgets).map((category) => {
                        const spent = calculateSpent(category);
                        const remaining = budgets[category] - spent;
                        return (
                            <div key={category} className="p-4 bg-gray-200 rounded-lg">
                                <h2 className="text-xl font-semibold">{category}</h2>
                                <p>Budget: ${budgets[category]}</p>
                                <p>Spent: ${spent}</p>
                                <p>Remaining: ${remaining}</p>
                                <div className="relative h-4 bg-gray-300 rounded-full mt-2">
                                    <div
                                        className="absolute top-0 left-0 h-4 bg-green-500 rounded-full"
                                        style={{
                                            width: `${(spent / budgets[category]) * 100}%`
                                        }}
                                    ></div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Budget;