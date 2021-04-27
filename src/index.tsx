import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { createServer, Model } from 'miragejs';

createServer({
  models: {
    transaction: Model,
  },
  seeds(server) {
    server.db.loadData({
      transactions:[
        {
          id: 1,
          title: 'Keychron k6',
          amount: 650,
          type: 'outcome',
          category: 'pc',
          createdAt: new Date(),
        },
        {
          id: 2,
          title: 'Mouse k6',
          amount: 300,
          type: 'outcome',
          category: 'pc',
          createdAt: new Date(),
        },
        {
          id: 3,
          title: 'Salary',
          amount: 30000,
          type: 'income',
          category: 'salary',
          createdAt: new Date(),
        }
      ]
    });
  },
  routes() {
    this.namespace = 'api';
    this.get('/transactions', () => {
      return this.schema.all('transaction');
    });
    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody);
      return schema.create('transaction',data);
    })
  }
});
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
