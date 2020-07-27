import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../utils/ref';

const eventBase: SchemaObject = {
  type: 'object',
  properties: {
    id: {
      title: 'Event ID',
      type: 'string',
    },
    timestamp: {
      title: 'Event timestamp',
      type: 'string',
      format: 'date-time',
    },
    type: {
      title: 'Event type',
      type: 'string',
      enum: [
        'MESSAGE',
        'MESSAGE_STATUS',
      ],
    },
    subscriptionId: {
      title: 'Webhook ID',
      type: 'string',
    },
  },
};

export const ref = createComponentRef(__filename);
export default eventBase;
