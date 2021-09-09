import express from 'express';
import cors from 'cors';

// import { auth } from './Util';

export default app => {
    app.use(cors())
    app.use(express.urlencoded())
    app.use(express.json())
    // app.use(auth)
};
