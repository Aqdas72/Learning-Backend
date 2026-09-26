export const authenticateSession = (req, res, next) => {
    if (!req.session || !req.session.adminID) {
        return res.status(401).json({ message: "Unauthorized. Please log in." });
    }
    next();
}