import React, { useState } from 'react';
import { Box, Button, FormControl, FormLabel, Input, VStack } from '@chakra-ui/react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const Chart = () => {
  const [expenses, setExpenses] = useState([]);
  const [date, setDate] = useState('');
  const [amount, setAmount] = useState('');

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const handleAddExpense = () => {
    const newExpense = { date, amount };
    setExpenses([...expenses, newExpense]);
    setDate('');
    setAmount('');
  };

  return (
    <Box p={4}>
      <VStack spacing={4} align="start">
        <FormControl id="date">
          <FormLabel>Date:</FormLabel>
          <Input type="date" value={date} onChange={handleDateChange} />
        </FormControl>
        <FormControl id="amount">
          <FormLabel>Amount:</FormLabel>
          <Input type="number" value={amount} onChange={handleAmountChange} />
        </FormControl>
        <Button colorScheme="teal" onClick={handleAddExpense}>
          Add Expense
        </Button>
      </VStack>

      <Box mt={8}>
        <ResponsiveContainer width="100%"  aspect={3}>
          <LineChart data={expenses} margin={{ right: 300 }}>
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="amount" stroke="red" activeDot={{ r: 8 }} />
          </LineChart>
        </ResponsiveContainer>
      </Box>
    </Box>
  );
};

export default Chart;
