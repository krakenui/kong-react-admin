import { Post } from 'models';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import http from './SafeHttpClient';

export function getAllPosts(
    page: number,
    pageSize: number
): Observable<Post[]> {
    return from(http.get(`posts?page=${page}&size=${pageSize}`)).pipe(
        map((payload: any) => {
            if (payload == null || payload.length === 0) {
                return [];
            }

            return payload.map((p: any) => new Post().fromJson(p));
        })
    );
}
