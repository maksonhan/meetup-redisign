

import { ErrorHandler, Injectable } from '@angular/core';

@Injectable()

export class CustomErrorHandler implements ErrorHandler {
  handleError(error: Error) {
    alert('Ошибка c rest запросом');
  }
}
