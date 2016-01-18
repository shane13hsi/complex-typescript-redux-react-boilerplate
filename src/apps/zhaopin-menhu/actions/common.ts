/// <reference path="../../../../typings/ttsd.d.ts" />
import { createAction } from 'common/createAction';

import * as request from 'superagent';

export const queryEnum = createAction('queryEnum');

export function requestEnum() {
  return (dispatch) => {
    request.get('/zhaopin-menhu/common')
      .end((err, res) => {
        dispatch(createAction('requestEnum')(res.body));
      });
  };
}
