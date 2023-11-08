import { Logger } from '@nestjs/common';
import { EventEmitter } from 'events';

export const eventEmitter: EventEmitter = new EventEmitter();

export const logger = new Logger('App');
