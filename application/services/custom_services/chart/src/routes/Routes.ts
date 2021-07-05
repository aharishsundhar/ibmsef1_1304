import { Request, Response, NextFunction } from "express";
import { chartController } from '../controller/chartController';


export class Routes {
    private chart: chartController = new chartController();
    
    public routes(app): void {
          app.route('/health/entity-service').get((req: Request, res: Response) => {
            res.status(200).send({
                status: 'up'
            })
        })
        app.route('/chart').get(this.chart.GpGetAllValues);
app.route('/chart').post(this.chart.GpCreate);
     }

}