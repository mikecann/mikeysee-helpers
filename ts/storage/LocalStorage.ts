import {IStorage} from "./IStorage"

export class LocalStorage implements IStorage
{
    get<T>(key:string) : Promise<T>
    {
        return Promise.resolve(JSON.parse(localStorage.getItem(key)));
    }

    set(key:string, value:any) : Promise<void>
    {
        localStorage.setItem(key, JSON.stringify(value));
        return Promise.resolve();
    }

    remove(key) : Promise<void>
    {
        localStorage.removeItem(key);
        return Promise.resolve();
    }
}