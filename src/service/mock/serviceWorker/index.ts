import { setupWorker } from 'msw';
import { handlers } from 'service/api/msw_handler';

export const worker = setupWorker(...handlers);
