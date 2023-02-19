import { rest } from 'msw';

export const handlers = [
  rest.get('/api/roadmap', (req, res, ctx) =>
    res(
      ctx.json({
        roadMapList: [
          {
            id: 1,
          },
          {
            id: 2,
          },
          {
            id: 3,
          },
          {
            id: 4,
          },
          {
            id: 5,
          },
          {
            id: 6,
          },
          {
            id: 7,
          },
        ],
      })
    )
  ),
];
