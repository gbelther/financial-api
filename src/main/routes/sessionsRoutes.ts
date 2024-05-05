import express from 'express';
import { expressAdaptRoute } from '@/infra/routes';
import {
  makeCreateSessionController,
  makeRefreshSessionController,
} from '../factories/controllers';

const sessionsRoutes = express.Router();

sessionsRoutes.post('/', expressAdaptRoute(makeCreateSessionController()));
sessionsRoutes.post(
  '/refresh',
  expressAdaptRoute(makeRefreshSessionController()),
);

export { sessionsRoutes };
