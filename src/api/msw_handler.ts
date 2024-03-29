import { rest } from 'msw';
import mockApiData from 'mock/data/front_mock_table_list.json';

export const handlers = [
  rest.get(`/orders`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(mockApiData));
  }),

  rest.post('/order', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(req.body));
  }),

  rest.delete('/order', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(req.url));
  }),
];
