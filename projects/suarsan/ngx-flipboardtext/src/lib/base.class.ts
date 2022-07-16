import { forwardRef } from "@angular/core";

export abstract class Base {}
export function returnProvider(component: any) {
  return { provide: Base, useExisting: forwardRef(() => component) };
}