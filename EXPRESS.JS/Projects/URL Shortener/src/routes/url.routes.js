import { Router } from "express";
import { originalUrl, shortUrl } from "../controller/url.controller.js";

const routes = Router();

//*create short url
routes.post("/shorten",shortUrl)
/**
 * client send
 *  {
        "originalUrl": "https://example.com/very/long/url"
    }
    store data in json file
    before generate create one shortId
    [
        {
            OriginalUrl,
            shortId,
        }
    ]
 */
//*redirect to original url
routes.get("/:shortId",originalUrl);

export default routes;