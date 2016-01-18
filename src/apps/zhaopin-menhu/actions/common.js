import { action } from 'common/action';
import * as request from 'superagent';
export const queryEnum = action('queryEnum');
export function requestEnum() {
    return (dispatch) => {
        request.get('/zhaopin-menhu/common')
            .end((err, res) => {
            dispatch(action('requestEnum')(res.body));
        });
    };
}
