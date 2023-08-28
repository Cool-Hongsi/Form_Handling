import { setupWorker } from 'msw';
import { handlers } from 'api/msw_handler';

export const worker = setupWorker(...handlers);
