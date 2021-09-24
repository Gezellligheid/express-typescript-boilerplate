# Controllers

Add your controllers in here by the following format `nameOfController.controller.ts`

## Setting up:

```Typescript
import {Router, Request, Response} from "express";

export class ExampleController {

  public router = Router();

  constructor() {
    // Initialize the data (if this is static data from json for example) in a public array

    // Initialize the routes
    // Can be done for all http protocols
  }

  // Endpoiints
}
```

In your `app.ts`

```typescript
app.use(new ExampleController().router);
```
