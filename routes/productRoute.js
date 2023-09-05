import express from "express";
import { requireSignIn } from "../middlewares/authMiddleware";
import { braintreePaymentController, braintreeTokenController } from "../controllers/productController";

const router = express.Router()

// payment route
// token
router.get('/braintree/token', braintreeTokenController)

// payments
router.get('/braintree/payments', requireSignIn, braintreePaymentController)

export default router


