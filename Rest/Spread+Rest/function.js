

const createJsonWebToken = (payload, secrectKey, expiresIn) => {
    if (typeof payload !== "object" || !payload) {
        throw new apiError(501, "Payload must be non-empty object");
    }

    if (typeof secrectKey !== "string" || secrectKey === "") {
        throw new apiError(501, "SecrectKey must be non-empty");
    }

    try {
        const token = jwt.sign(payload, secrectKey, { expiresIn });
        return token;
    } catch (error) {
        console.log("Failed to create JWT sign", error);
    }
};

