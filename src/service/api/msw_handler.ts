import { rest } from 'msw';
import mockApiData from 'service/mock/data/timf_front_mock_table_list.json';

export const handlers = [
  rest.get('/orders', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(mockApiData));
  }),
];
