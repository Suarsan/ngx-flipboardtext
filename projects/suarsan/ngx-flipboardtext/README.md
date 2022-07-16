# NgxFlipboardtext

[![npm version](https://badge.fury.io/js/@suarsan%2Fngx-flipboardtext.svg)](https://badge.fury.io/js/@suarsan%2Fngx-flipboardtext)

A full featured and customizable flipboard text component for Angular.

![alt text](https://github.com/Suarsan/ngx-flipboardtext/raw/master/projects/suarsan/ngx-flipboardtext/demo.png)


## Demo

Try full demo  at **[ngx-flipboardtext](www.javiersuarezsanchez.com/projects/ngx-flipboardtext)**

## Usage

#### Installation

Install via npm

    npm install @suarsan/flipboardtext
    
#### Usage

Import ``NgxFlipboardtextModule`` in your app.module.ts

    import { NgModule } from '@angular/core';
    import { BrowserModule } from '@angular/platform-browser';
    import { AppComponent } from './app.component';
    
    import { NgxFlipboardtextModule } from '@suarsan/ngx-flipboardtext';

    @NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        NgxFlipboardtextModule
    ],
    providers: [],
    bootstrap: [AppComponent]
    })
    export class AppModule { }

## Documentation

#### Inputs

| Input | Type | Default | Required | Description |
| ----- | ---- | ------  | -------- | ----------- |
| keys | `Array<string>` | - | true | Array of key string to show |
| cycleDuration | `number` | 15000 | false | Animations duration in ms |
| fontSize | `string` | '2rem' | false | Font size |
| breakRatio | `number` | 0.75 | false | Time relation between show text and flip text |
| backgroundColor | `string` | '#2cc4d2' | false | Background color |
| textColor | `string` | '#ffffff' | false | Text color |

#### Example

    <ngx-flipboardtext
        [keys]="['hello', 'I am', 'John DOE']"
        [cycleDuration]="5000"
        [fontSize]="'5rem'"
        [breakRatio]="0.85"
        [backgroundColor]="'#FF0000'" 
        [textColor]="'#00FF00'"
    ></ngx-flipboardtext>


---

## Creator

**[Javier Suárez Sánchez](https://javiersuarezsanchez.com)**




---

### Keywords

`angular` `ngx` `javascript` `flipboardtext` `flip` `board` `text` `flipboard` `animation`

---



