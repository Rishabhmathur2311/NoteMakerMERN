import SignUp from "../model/SignUp.js";

export const submitSignUp=async(req, res)=>{
    try {
        let exist=await SignUp.findOne({email: req.body.email});
        let detail= new SignUp(req.body);
        if(exist){
            return res.status(200).json("User already exists");
        }
        detail.save();
        return res.status(200).json(detail);
    } catch (error) {
        return res.status(500).json(error);
    }
}

export const submitLogIn=async(req, res)=>{
    try {
        const details=await SignUp.findOne({email: req.body.email, password: req.body.password})
        console.log(req.body);
        return res.status(200).json(details);
    } catch (error) {
        return res.status(500).json(error);
    }
}