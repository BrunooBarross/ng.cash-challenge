import joi from "joi";

const transactionSchema = joi.object({
    creditedAccountId: joi.number().integer().required(),
    value: joi.number().required(),
});

export { transactionSchema };