abstract class Globals {

}

// General globals only for development:
class DevelopmentGlobals extends Globals {

    public dataUrl = "http://localhost:3001/api/data";
    public imageUrl = "http://localhost:3001/api/img/";
}

// General globals only for production:
class ProductionGlobals extends Globals {
    public dataUrl = "https://learned-spider-386307.df.r.appspot.com/api/data";
    public imageUrl = "https://learned-spider-386307.df.r.appspot.com/api/img/";

}

const globals = process.env.NODE_ENV === "production" ? new ProductionGlobals() : new DevelopmentGlobals();

export default globals;