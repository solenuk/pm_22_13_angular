import {CanActivateFn, Router} from '@angular/router';
import {User} from '../types';
import {inject} from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  if( sessionStorage.getItem('user') !== null ){
    const user: User = JSON.parse(sessionStorage.getItem('user') as string);

    if(user.email === 'laura.parker@gmail.com'){
      return true;
    }else{
      router.navigate(['/not-laura']);
      return false;
    }
  }else{
    router.navigate(['/not-laura']);
    return false;
  }
};
