import { Injectable } from '@angular/core';

export interface Adress {
  street: string;
  postalCode: number;
  city: string;
}

export interface User {
  name: string;
  age: number;
  addresses: Adress[];
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  isValidUser(user: User): boolean {
    const {name, age, addresses} = user;

    if (!name.trim()) {
      console.error('Name must be defined');
      return false;
    }

    if (age < 0 || age > 150) {
      console.error('Age must be greater than 0 and below 150');
      return false;
    }

    for (const address of addresses) {
      const {street, postalCode, city} = address;
      if (!street.trim()) {
        console.error('Address must contain a street');
        return false;
      }

      if (postalCode === undefined) {
        console.error('Address must contain a postal code');
        return false;
      }

      if (!city.trim()) {
        console.error('Address must contain a city');
        return false;
      }
    }
  }
}
