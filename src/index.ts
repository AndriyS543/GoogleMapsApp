/// <reference types="@types/google.maps" />
import {User} from './User.ts';
import {Company} from './Company.ts';
import {CustomMap} from './CustomMap.ts';

const user = new User();
const company = new Company();
const customMap = new CustomMap('map');

customMap.addMarker(user);
customMap.addMarker(company);
