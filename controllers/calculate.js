import Calculate from "../model/calculate.js";

export const createCalculation = async (req, res, next) => {
  try {
    let answer;
    if ((req.body.operator === "/")) {
      answer = req.body.num1 / req.body.num2;
    } else if ((req.body.operator === "*")) {
      answer = req.body.num1 * req.body.num2;
    } else if ((req.body.operator === "-")) {
      answer = req.body.num1 - req.body.num2;
    } else {
      answer = req.body.num1 + req.body.num2;
    }
    await Calculate.create({
        num1: req.body.num1,
        num2: req.body.num2,
        operator: req.body.operator,
        sumAnswer: answer,
      });
    res.status(201).json({
      message: "Successfully created",
    });
  } catch (error) {
    next(error);
  }
};

export const getAllCalculations = async (req, res, next) => {
  try {
    const calculate = await Calculate.find();
    res.status(200).json({
      message: "Successful",
      data: {
        calculate,
      },
    });
  } catch (error) {
    next(error);
  }
};
