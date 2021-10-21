import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment as env } from 'src/environments/environment';
import { APIResponse, Game } from '../modules';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }
  getGameDetails(gameId: string): Observable<Game> {
    const gameInfoRequest = this.http.get(`${env.BASE_URL}/games/${gameId}`);
    const gameTrailersRequest = this.http.get(
      `${env.BASE_URL}/games/${gameId}/movies`
    );
    const gameScreenshotsRequest = this.http.get(
      `${env.BASE_URL}/games/${gameId}/screenshots`
    );

    return forkJoin({ gameInfoRequest, gameScreenshotsRequest, gameTrailersRequest }).pipe(
      map((resp: any) => {
        return {
          ...resp['gameInfoRequest'],
          screenshots: resp['gameScreenshotsRequest']?.result,
          trailers: resp['gameTrailersRequest']?.result
        }
      })
    );

  }
  getGameList(ordering: string, search?: string): Observable<APIResponse<Game>> {
    let params = new HttpParams().set('ordering', ordering);

    if (search) {
      params = new HttpParams().set('search', search);
    }
    return this.http.get<APIResponse<Game>>(`${env.BASE_URL}/games`, {
      params: params,
    });
  }
}
