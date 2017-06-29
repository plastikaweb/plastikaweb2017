import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ContactService {
  constructor(private db: AngularFireDatabase) {
  }

  findContactData(filterSocial: string = 'contact'): Observable<any> {
    return this.db.object('/contact')
      .map((data) => {
        const social = data.social;
        const newSocial = [];
        for (const item in social) {
          if (social[ item ][ 'section' ] === filterSocial) {
            newSocial.push(social[ item ]);
          }
        }
        data.social = newSocial;
        return data;
      })
      .first();
  }
}
