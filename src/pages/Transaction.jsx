import React, { useState } from 'react';

const Transactions = () => {
    const [transactions, setTransactions] = useState([]);
    const [newTransaction, setNewTransaction] = useState({
        date: '',
        amount: 0,
        type: 'expense',
        category: '',
        description: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewTransaction({ ...newTransaction, [name]: value });
    };

    const addTransaction = () => {
        setTransactions([...transactions, newTransaction]);
        setNewTransaction({
            date: '',
            amount: 0,
            type: 'expense',
            category: '',
            description: ''
        });
    };

    const calculateBalance = () => {
        return transactions.reduce((acc, transaction) => {
            return transaction.type === 'income'
                ? acc + parseFloat(transaction.amount)
                : acc - parseFloat(transaction.amount);
        }, 0);
    };

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg">
                <h1 className="text-2xl font-bold text-center mb-4">Transactions</h1>

                <div className="mb-4">
                    <h2 className="text-xl font-semibold mb-2">Add Transaction</h2>
                    <input
                        type="date"
                        name="date"
                        value={newTransaction.date}
                        onChange={handleInputChange}
                        className="block w-full mb-2 p-2 border rounded"
                    />
                    <input
                        type="number"
                        name="amount"
                        value={newTransaction.amount}
                        onChange={handleInputChange}
                        className="block w-full mb-2 p-2 border rounded"
                        placeholder="Amount"
                    />
                    <select
                        name="type"
                        value={newTransaction.type}
                        onChange={handleInputChange}
                        className="block w-full mb-2 p-2 border rounded"
                    >
                        <option value="income">Income</option>
                        <option value="expense">Expense</option>
                    </select>
                    <input
                        type="text"
                        name="category"
                        value={newTransaction.category}
                        onChange={handleInputChange}
                        className="block w-full mb-2 p-2 border rounded"
                        placeholder="Category"
                    />
                    <textarea
                        name="description"
                        value={newTransaction.description}
                        onChange={handleInputChange}
                        className="block w-full mb-2 p-2 border rounded"
                        placeholder="Description (Optional)"
                    />
                    <button
                        onClick={addTransaction}
                        className="bg-blue-500 text-white px-4 py-2 rounded-lg"
                    >
                        Add Transaction
                    </button>
                </div>

                <div className="mt-6">
                    <h2 className="text-xl font-semibold">Current Balance: ${calculateBalance()}</h2>
                </div>

                <div className="mt-4">
                    <h2 className="text-xl font-semibold mb-2">Transaction List</h2>
                    <ul>
                        {transactions.map((transaction, index) => (
                            <li key={index} className="mb-2 p-2 bg-gray-200 rounded">
                                <strong>{transaction.date}</strong>: {transaction.type} of ${transaction.amount} for {transaction.category}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Transactions;