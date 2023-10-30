import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

const UNSPLASH_API_KEY = 'PUT YOUR SECRET HERE';

interface RandomPhotoResponse {
    urls: {
        regular: string;
    };
}

@Injectable({
    providedIn: 'root',
})
export class PhotosService {
    constructor(private http: HttpClient) {}

    getRandomPhoto() {
        return this.http
            .get<RandomPhotoResponse>(
                'https://api.unsplash.com/photos/random',
                {
                    headers: {
                        Authorization: UNSPLASH_API_KEY,
                    },
                }
            )
            .pipe(map((data) => data.urls.regular));
    }
}
