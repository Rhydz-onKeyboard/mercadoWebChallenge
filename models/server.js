class Server {

    constructor (server, port, cors, viewEngine) {
        this.app = server();
        this.port = port;
        this.cors = cors;
        this.framework = server;
        this.viewEngine = viewEngine;
        //Routes
        this.mercadoPath = '/';

        //Set view engine
        this.app.engine('handlebars', viewEngine.engine);
        this.app.set( 'view engine', 'handlebars' )

        //Middlewares
        this.middlewares();

        //Routes of my app 
        this.routes();
    };


    middlewares(){
        //CORS
        this.app.use( this.cors() );

        //Reading and parsing the body
        this.app.use( this.framework.json() );

        //Public directory
        this.app.use( this.framework.static('public') );
        this.app.use( '/bootstrap', this.framework.static('node_modules/bootstrap/dist') );
        this.app.use( '/jquery', this.framework.static('node_modules/jquery/dist') );
        
        //handle errors
        this.app.use( this.handleErrors );
    };

    routes(){
        this.app.use( this.mercadoPath, require('../routes/mercado.routes') );
    };

    handleErrors( err, req, res, next ){
        console.log(err);
        res.status(500).json({ msg: 'An internal server error ocurred' });
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en puerto', this.port);
        });
    };

}

module.exports = Server;