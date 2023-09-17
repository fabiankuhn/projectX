import express, {Request, Response} from "express";
import * as swaggerUiExpress from "swagger-ui-express";

const swagger = express.Router();

swagger.get('/swagger/definition', (req: Request, res: Response) => {
    // #swagger.ignore = true
    res.sendFile(`${process.cwd()}/swagger_output.json`);
});

swagger.use(
    '/swagger',
    swaggerUiExpress.serve,
    swaggerUiExpress.setup(undefined, {
        swaggerOptions: {
            displayRequestDuration: true,
            url: '/swagger/definition',
        },
    }),
);

export default  swagger;
