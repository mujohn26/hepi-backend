import checkEmailpassword from '../middlewares/auth';

class AuthController{

    static async signin(req, res){
        await checkEmailpassword(req, res);

    }
}

export default AuthController;