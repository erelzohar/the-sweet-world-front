abstract class Globals {

}

// General globals only for development:
class DevelopmentGlobals extends Globals {

    public dataUrl = "http://localhost:3001/api/data";
    public imageUrl = "http://localhost:3001/api/img/";
    public loginUrl = "http://localhost:3001/api/login/";

}

// General globals only for production:
class ProductionGlobals extends Globals {
    public dataUrl = "https://sweet-world-back.onrender.com/api/data";
    public imageUrl = "https://sweet-world-back.onrender.com/api/img/";
    public loginUrl = "https://sweet-world-back.onrender.com/api/login/";

}

const globals = process.env.NODE_ENV === "production" ? new ProductionGlobals() : new DevelopmentGlobals();

export default globals;