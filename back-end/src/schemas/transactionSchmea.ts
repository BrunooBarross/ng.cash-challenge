import joi from "joi";

const transactionSchema = joi.object({
    userName: joi.string().min(3).required(),
    value: joi.number().required(),
});

export { transactionSchema };