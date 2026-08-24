import { readfile, writefile } from "../utils/file.utils.js"
import { generateShortId } from "../utils/id.utils.js";

export const shortUrl = (req,res)=>{
    const {originalUrl} = req.body;
    if(!originalUrl){
        return res.status(400).json({message:"Please provide a valid url"})
    }
    const data = readfile();
    const shortId = generateShortId();

    const newUrl = {
        originalUrl,
        shortId,
    }
    data.push(newUrl);
    writefile(data);
    res.status(201).json({
            shortUrl:`http://localhost:3000/${shortId}`,
            originalUrl,
        });
}
export const originalUrl = (req, res) => {
    const { shortId } = req.params;
    const data = readfile();

    const foundUrl = data.find(
        url => url.shortId === shortId
    );
    if (!foundUrl) {
        return res.status(404).json({
            message: "Short URL not found"
        });
    }
    return res.redirect(foundUrl.originalUrl);
};