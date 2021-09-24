import { Router, Request, Response, NextFunction } from 'express';

export class ExampleController {
  public router = Router();
  public listOfExamples: Array<string>;

  constructor() {
    // Initialize the data (if this is static data from json for example) in a public array
    this.listOfExamples = ['example1', 'example2'];

    // Initialize the routes
    // Can be done for all http protocols
    this.router.get('route/to/endpoint', this.getAllExamples);
    this.router.get('route/to/:id', this.getExampleByName);
  }

  // Endpoiints
  getAllExamples = (req: Request, res: Response, next: NextFunction) => {
    // Do stuff
    res.send('here you got all the examples');
    // or
    res.json({ data: this.listOfExamples });
    // or database stuff
  };

  getExampleByName = (req: Request, res: Response, next: NextFunction) => {
    // Do stuff

    // gets the :id
    const name = req.params.id;

    res.send('here you got all the examples');
    // or
    res.json({ data: this.listOfExamples });
    // or database stuff
  };
}
