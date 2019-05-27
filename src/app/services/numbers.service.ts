import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment'

@Injectable()
export class NumbersService {
  private _path = `${environment.origin}/primes`

  constructor(private http: HttpClient) {

  }

  public getMedianPrimes(maxNumber) {

    return this.http.post(this._path,maxNumber)

    // this.http.post(this._path,maxNumber).subscribe((data) => {
    //   console.log('data')
    //   console.log(data)
    //   return data
    // })
  }

}