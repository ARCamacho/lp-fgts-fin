import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerImgService {
  public bkgfgts: string

  constructor() {
    this.bkgfgts = "https://storage.googleapis.com/gawen_storage/fgts/mulher%20FGTS.webp"
  }
}
