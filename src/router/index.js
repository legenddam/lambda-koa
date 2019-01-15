import Router from 'koa-router';
import * as userDB from 'db/user';

const router = new Router();

router.get('/count', async (ctx) => {
  const result = await userDB.getUserCount();
  
  if (result.length > 0) {
    ctx.body = 'Count: ' + result[0].count;
  } else {
    ctx.body = 'No records';
  }
});

export default router;