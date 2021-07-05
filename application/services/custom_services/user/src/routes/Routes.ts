import { Request, Response, NextFunction } from "express";
import { usersController } from '../controller/usersController';


export class Routes {
    private users: usersController = new usersController();
    
    public routes(app): void {
          app.route('/health/entity-service').get((req: Request, res: Response) => {
            res.status(200).send({
                status: 'up'
            })
        })
        app.route('/users').get(this.users.GpGetAllValues);
app.route('/users').post(this.users.GpCreate);
     }

}