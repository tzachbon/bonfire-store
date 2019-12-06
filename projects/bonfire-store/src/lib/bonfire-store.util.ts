import { BonfireStoreService } from './bonfire-store.service';
import { BonfireStore } from './bonfire-store.model';
import * as onChange from 'on-change';


function handleErrors(errorType: BonfireStore.ErrorType) {
  let errorMessage: string;
  switch (errorType) {
    case 'SERVICE_NOT_FOUND':
      errorMessage = `
      Injection Error. Decorator Can't work without injecting the main store service.

      Example:

        constructor(
          ===> private bonfireStoreService: BonfireStoreService<{ counter: number }, LocalStore>
        ) { }
    `;
      break;

    case 'LOCAL_STORE_NOT_FOUND':
      errorMessage = `
      Creation Error. Local store is not found.

      Example:

      ===> localStore = this.bonfireStoreService.createLocalStore('SOME_NAME', { ... });

      constructor(
        private bonfireStoreService: BonfireStoreService<{ counter: number }, LocalStore>
      ) { }
      `
      break;
    default:
      break;
  }


  if (errorMessage) {
    throw new Error(errorMessage);
  }
}



export function FromLocalStore<J = any, T = any>(keyName?: keyof T | any) {

  return (target: any, key: keyof T) => {
    const init = function (isGet: boolean) {
      return function (newVal?) {
        const localStore = Object
          .values(this)
          .find(value => value instanceof BonfireStore.Store &&
            !(value instanceof BonfireStoreService)) as unknown as BonfireStore.Store<T>;

        if (!localStore) {
          handleErrors('LOCAL_STORE_NOT_FOUND');
        }

        Object.defineProperty(this, key, {
          get: () => {
            return localStore.get$(keyName);
          },
          set: (val: T) => {
            localStore.set$(keyName, val);
          },
          enumerable: true,
          configurable: true
        });

        if (isGet) {
          return this[key]; // get
        } else {
          this[key] = newVal; // set
        }
      };
    };

    return Object.defineProperty(target, key, {
      get: init(true),
      set: init(false),
      enumerable: true,
      configurable: true
    });
  };
}



export function FromStore<T = any, J = any>(name?: keyof T | any) {

  return (target: any, key: keyof T) => {
    const init = function (isGet: boolean) {
      return function (newVal?) {
        const bonfireService = Object
          .values(this)
          .find((value): boolean => value instanceof BonfireStoreService) as unknown as BonfireStoreService<T, J>;

        if (!bonfireService) {
          handleErrors('SERVICE_NOT_FOUND');
        }


        if (!name) {
          name = key;
        }

        Object.defineProperty(this, key, {
          get: () => {
            return bonfireService.get$(name);
          },
          set: (val: T) => {
            bonfireService.set$(name, val);
          },
          enumerable: true,
          configurable: true
        });

        if (isGet) {
          return this[key]; // get
        } else {
          this[key] = newVal; // set
        }
      };
    };

    return Object.defineProperty(target, key, {
      get: init(true),
      set: init(false),
      enumerable: true,
      configurable: true
    });
  };
}
